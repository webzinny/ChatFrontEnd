import '../css/ChatMsgBox.css'
import Msg from './Msg'
const ChatMsgBox =()=>{
    
    return(
        <div className="ChatMsgBox" id="ChatBox">
            <Msg typ='userMsg' msg='hi'/>
            <Msg typ='clientMsg' msg='hello'/>
            <Msg typ='userMsg' msg='how are you'/>
            <Msg typ='clientMsg' msg='I m good'/>
            <Msg typ='userMsg' msg='Great, Actually i have a work for you would you like to do it and i will pay for you...' />
            <Msg typ='clientMsg' msg='Seems to be a great opportunity and I m always ready to take new challanges.' />
            <Msg typ='userMsg' msg='Ohk then i will send you details about it tommorow..' />
            <Msg typ='clientMsg' msg='Ohk thanks for considering me..' />
            <Msg typ='userMsg' msg='My pleasure.' />
            <Msg typ='clientMsg' msg='Have a great day' />
            <Msg typ='userMsg' msg='You to.' />
            <Msg typ='clientMsg' msg='Yuppiee booiii...' />
        </div>

    );
}

export default ChatMsgBox;