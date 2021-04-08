import '../css/ChatMsgBox.css'
import Msg from './Msg'
import React, { Component } from 'react'

class ChatMsgBox extends Component {

    constructor() {
        super()
        this.state={
            msgs: ["Hello","How are you.."],
        }
    }
    
    static update(msg){
        console.log(msg);
    }

    render() {
        return (
            <div className="ChatMsgBox" id="ChatBox">
                {this.state.msgs.map((e,ind)=><Msg key={ind} typ='userMsg' msg={e}/>)}
            </div>
        )
    }
}

export default ChatMsgBox

    // < Msg typ = 'userMsg' msg = 'hi' />
    //     <Msg typ='clientMsg' msg='hello' />
