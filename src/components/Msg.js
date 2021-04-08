import '../css/Msg.css'
const Msg=(props)=>{
    return(
        <div>
            <div className={props.typ}>
                <p>{props.msg}</p>
                <small>12:45 AM</small>
            </div>
        </div>
    );
}
export default Msg;