import ChatCompHead from './ChatCompHead';
import ChatMsgBox from './ChatMsgBox'
import ChatInp from './ChatInp'
import '../css/ChatComp.css'
import React, { Component } from 'react'

class ChatComp extends Component {

    constructor(props) {
        super(props)
        this.child=React.createRef();
    }

    update = (msg) => {
        this.child.current.updateMsgs(msg);
    }
    dis =()=>{
        this.child.current.disconnect()
    }
    
    render() {
        return (
            <div className="ChatComp">
                 <ChatCompHead userName={this.props.userName.name} dis={this.dis} backToUi={this.props.backToUi} />
                 <ChatMsgBox userId={this.props.userData.id} id={this.props.userName.id} ref={this.child} />
                 <ChatInp update={this.update}/>
            </div>
        )
    }
}

export default ChatComp



