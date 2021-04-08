import '../css/ChatCompHead.css'
import {FaSignOutAlt,FaChevronLeft} from 'react-icons/fa'

function ChatCompHead(props){
    return(
        <div className="msgHead">
            <button className="backButton" onClick={props.backToUi}><FaChevronLeft size='20px' /> </button>
            <h3 className="userName">{props.userName}</h3>
            <button className="logOutButton"><FaSignOutAlt size='20px'/></button>
        </div>
    )
}
export default ChatCompHead;