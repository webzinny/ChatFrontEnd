import '../css/UiUser.css'
import conn from './WebSocketComp'
export default function UiUser(props) {
    const UiUserClickHandler=(e)=>{
        let data = e.target.firstChild.data;
        props.getName(data);
        if (data==="Common Group"){
            conn.connect('cmnGrp');
        }
    }
    
    return (
        <div className='UiUserElmnt' onClick={UiUserClickHandler}>
            {props.userName}
            <div>
                <p><b>You:  </b>{props.lastMsg}</p>
                <i>9:54</i>
            </div>
        </div>
    )
}
