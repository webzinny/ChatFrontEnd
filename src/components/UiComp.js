import '../css/UiComp.css'
import { FaTimes,FaBars, FaSearch } from 'react-icons/fa'
import UiUser from './UiUser'
import conn from './WebSocketComp'

export default function UiComp(props) {
    const NavOpenHandler =()=>{
        document.getElementById('NavBar').style.left="0";
    }
    const NavCloseHandler=()=>{
        document.getElementById('NavBar').style.left = "-50%";
    }

    return (
        <div className="UiComp">
    {/* -----------------UiHead--------------------------- */}
            <div className="UiHead">
                <button onClick={NavOpenHandler}> <FaBars size='18px'/></button>
                Messages
                <button onClick={()=>{conn.connect("l")}} ><FaSearch size='18px' /></button>
            </div>
    {/* ---------------------------------------------------- */}
            <div className='UiUserRenderer'>
                <UiUser getName={props.getName} userName="Atul singh" lastMsg="How are you"/>
                <UiUser getName={props.getName}  userName="Dev" lastMsg="Khaa h yrr" />
                <UiUser getName={props.getName} userName="Masoom Khan" lastMsg="Nahi btaunga" />
            </div>

    {/* -----------------NAV BAR--------------------------------- */}
            <div id="NavBar">
                <div>
                    <i id="NavCrossBtn" onClick={NavCloseHandler}><FaTimes size="22px" /></i>
                </div>
                <button>Friends</button> <br />
                <button>Groups</button>
            </div>
        
        </div>
    )
}
