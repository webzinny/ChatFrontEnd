import '../css/ChatInp.css'
import {IoIosSend} from 'react-icons/io'
const ChatInp = (props) =>{
    let inp=document.getElementById("userInput");
    // let box = document.getElementById('ChatBox');
    const sendHandler=()=>{
        if (inp){
            props.update(inp.value);
            inp.value = "";
        }else{
            inp = document.getElementById("userInput");
            props.update(inp.value);
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