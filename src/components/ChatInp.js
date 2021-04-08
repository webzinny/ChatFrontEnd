import '../css/ChatInp.css'
import {IoIosSend} from 'react-icons/io'
import conn from './WebSocketComp'
const ChatInp = () =>{
    let inp=document.getElementById("userInput");
    // let box = document.getElementById('ChatBox');
    const sendHandler=()=>{
        if (inp){
            conn.sendMsg(inp.value);
            inp.value = "";
        }else{
            inp = document.getElementById("userInput");
            conn.sendMsg(inp.value);
            inp.value="";
        }
    }
    return(
        <div className="chatInp" >
            <input id='userInput' type="text" placeholder='Type your msg here...' />
            <button type='button' onClick={sendHandler}><IoIosSend size='30px' className='sendIcon' /></button>
        </div>
    );
}

export default ChatInp;