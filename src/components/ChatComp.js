import ChatCompHead from './ChatCompHead';
import ChatMsgBox from './ChatMsgBox'
import ChatInp from './ChatInp'
import '../css/ChatComp.css'
const ChatComp =(props)=>{
    return(
        <div className="ChatComp">
            <ChatCompHead userName={props.userName} backToUi={props.backToUi} />
            <ChatMsgBox />
            <ChatInp />
        </div>
    );
}

export default ChatComp;