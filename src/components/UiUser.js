import '../css/UiUser.css'
export default function UiUser(props) {
    const UiUserClickHandler=(e)=>{
        props.getName(e.target.firstChild.data);
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
