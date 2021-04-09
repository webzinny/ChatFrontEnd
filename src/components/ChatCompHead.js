import '../css/ChatCompHead.css'
import {FaSignOutAlt,FaChevronLeft} from 'react-icons/fa'
import conn from './WebSocketComp'

function ChatCompHead(props){

    const backClickHandler=()=>{
        props.backToUi();
    }

    return(
        <div className="msgHead">
            <button className="backButton" onClick={backClickHandler}><FaChevronLeft size='20px' /> </button>
            <h3 className="userName">{props.userName}</h3>
            <button className="logOutButton"><FaSignOutAlt size='20px'/></button>
        </div>
    )
}
export default ChatCompHead;