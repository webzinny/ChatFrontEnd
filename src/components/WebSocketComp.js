import ChatMsgBox from './ChatMsgBox'
class WebSocketComp {
    static instanace = null;

    static getSocket (){
        if (!WebSocketComp.instanace){
            WebSocketComp.instanace = new WebSocketComp();
        }
        return WebSocketComp.instanace;
    }

    constructor() {
        this.socket = null;
    }

    connect(url){
        this.socket=new WebSocket(`ws://localhost:8000/ws/chat/${url}/`);

        this.socket.onopen=()=>{console.log("Connection established...")}

        this.socket.onmessage=(e)=>{this.update(JSON.parse(e.data))}

        this.socket.onclose=()=>{console.log("Byyee...")}

    }

    update(msg){
        ChatMsgBox.update(msg.msg);
    }

    disconnect(){
        this.socket.close();
    }

    sendMsg(msg){
        this.socket.send(JSON.stringify({'msg':msg}));
    }

}

const conn = WebSocketComp.getSocket();
export default conn;