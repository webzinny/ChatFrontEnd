import React, { Component } from 'react'
import '../css/ChatMsgBox.css'
import Msg from './Msg'

class ChatMsgBox extends Component {

    constructor(props) {
        super(props)
        this.socketRef = null;
        this.state = {
            msgs: [],
        }
    }

    connect(url) {
        this.socketRef = new WebSocket(`ws://localhost:8000/ws/chat/${url}/`);
        this.socketRef.onopen = () => {
            console.log("Connection established..");
        };
        this.socketRef.onmessage = e => {
            this.socketNewMessage(e.data);
        };
        this.socketRef.onerror = e => {
            console.log(e.message);
        };
        this.socketRef.onclose = () => {
            console.log("WebSocket closed let's reopen");
            this.connect();
        };
    }

    disconnect=()=> {
        this.socketRef.close();
    }

    socketNewMessage(data) {
        const parsedData = JSON.parse(data);
        this.setState({ msgs: [...this.state.msgs, parsedData] });
    }

    sendMessage(data) {
        try {
            this.socketRef.send(JSON.stringify({ 'msg': data }));
        } catch (err) {
            console.log(err.message);
        }
    }

    state() {
        return this.socketRef.readyState;
    }

    updateMsgs = (msg) => {
        this.sendMessage(msg);
    }

    componentDidMount(){
        console.log("heloo from msg box")
        this.connect(this.props.id);
    }

    render() {
        return (
            <div className="ChatMsgBox" id="ChatBox">
                {this.state.msgs.map((e,ind)=><Msg key={ind} typ='userMsg' msg={e.msg}/>)}
            </div>
        )
    }
}

export default ChatMsgBox

    // < Msg typ = 'userMsg' msg = 'hi' />
    //     <Msg typ='clientMsg' msg='hello' />
