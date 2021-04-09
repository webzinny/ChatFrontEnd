import React, { Component } from 'react'
import '../css/ChatMsgBox.css'
import Msg from './Msg'
import axios from 'axios'

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
        // this.socketRef.onopen = () => {
        //     console.log("Connection established..");
        // };
        this.socketRef.onmessage = e => {
            this.socketNewMessage(e.data);
        };
        this.socketRef.onerror = e => {
            console.log(e.message);
        };
        // this.socketRef.onclose = () => {
        //     console.log("WebSocket closed");
        // };
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
            this.socketRef.send(JSON.stringify({ 'msg': [this.props.userId, data]}));
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
        let path=null;
        if (this.props.id==="Grp"){
            path="grp"
        }else{
            let arr = [this.props.id, this.props.userId]
            arr.sort(function (a, b) { return a - b })
            path=arr.join("_")
        }
        axios.get(`http://localhost:8000/chat/msg/${path}`)
        .then(res=>{
            this.setState({ msgs: res.data },this.connect(path))
        })
    }

    render() {
        return (
            <div className="ChatMsgBox" id="ChatBox">
                {this.state.msgs.map((e,ind)=>{
                    if (e.sender === undefined) {
                        let date = new Date()
                        date = "" + date.getHours() + ":" + date.getMinutes()
                        if (this.props.userId === e.msg[0]) {
                            return (<Msg key={ind} typ='userMsg' msg={e.msg[1]} time={date} />)
                        } else {
                            return (<Msg key={ind} typ='clientMsg' msg={e.msg[1]} time={date} />)
                        }
                    } else {
                        let date = new Date(e.time)
                        date = "" + date.getHours() + ":" + date.getMinutes()
                        if (this.props.userId === e.sender) {
                            return (<Msg key={ind} typ='userMsg' msg={e.msg} time={date} />)
                        } else {
                            return (<Msg key={ind} typ='clientMsg' msg={e.msg} time={date} />)
                        }
                    }
                })}
            </div>
        )
    }
}

export default ChatMsgBox

    // < Msg typ = 'userMsg' msg = 'hi' />
    //     <Msg typ='clientMsg' msg='hello' />