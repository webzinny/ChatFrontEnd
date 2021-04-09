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
    {/* ----------------------UserRenderer------------------------------ */}
            <div className='UiUserRenderer'>
                {props.clientData.map(data =>{
                    if (data.id !== props.userData.id){
                        return (<UiUser key={data.id} id={data.id} getName={props.getName} userName={data.name} lastMsg="How are you" />)
                    }
                    return null;
                })}

                <UiUser key="20" id="Grp" getName={props.getName} userName="Common Group" lastMsg="Welcome to Group" />
            </div>
    {/* -----------------NAV BAR--------------------------------- */}
            <div id="NavBar">
                <div>
                    <i id="NavCrossBtn" onClick={NavCloseHandler}><FaTimes size="22px" /></i>
                </div>
                <div id="UserName">
                    Hi! <br />
                    {props.userData.name}
                </div>
                <button>Friends</button> <br />
                <button>Groups</button>
            </div>
    {/* -------------------------------------------------------------------- */}
        </div>
    )
}
