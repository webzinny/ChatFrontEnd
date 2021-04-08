import React from 'react'
import '../css/Login.css'
import axios from 'axios';

export default function Login(props) {

    const validationHandler=()=>{
        let email=document.getElementById('inpEmail').value;
        let pas=document.getElementById('inpPass').value;
        axios.get(`http://localhost:8000/chat/validate?email=${email}&pas=${pas}`)
        .then((res)=>{
            if (res.data.status===true){
                props.LoginHandler(res.data);
            }else{
                let a=document.getElementById("LoginMsg");
                a.innerHTML=res.data.status;
                a.style.display="block";
            }
        });
    }
    return (
        <div className="LoginContainer">
            <div className="LoginForm">
                <div style={{marginBottom:"20px",textAlign:"center",color:"whitesmoke",fontSize:"20px",letterSpacing:"1px"}}>Logo</div>
                <div id="LoginMsg" style={{ display:"none",marginBottom: "20px", textAlign: "center", color: "whitesmoke", fontSize: "20px", letterSpacing: "1px" }}>Logo</div>
                <input id="inpEmail" type="email" placeholder="Email"></input> <br></br>
                <input id="inpPass" type="password" placeholder="Password"></input> <br></br>
                <button onClick={validationHandler}>Login</button>
            </div>
            
        </div>
    )
}
