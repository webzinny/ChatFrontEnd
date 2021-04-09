import '../css/Msg.css'
const Msg=(props)=>{
    return(
        <div>
            <div className={props.typ}>
                <p>{props.msg}</p>
                <small>{props.time}</small>
            </div>
        </div>
    );
}
export default Msg;