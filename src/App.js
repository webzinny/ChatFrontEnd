import './App.css';
import React,{Component} from 'react';
import Login from './components/Login'
import ChatComp from './components/ChatComp';
import UiComp from './components/UiComp'
import axios from 'axios'

class App extends Component {

  constructor(){
    super()
    this.state={
      ui:"login"
    };
    this.userData={
      id:"",
      name:"",
    };
    this.clientData=[];
  }

  LoginDataHandler=(obj)=>{
    this.userData.id=obj.id;
    this.userData.name=obj.name;
    axios.get('http://localhost:8000/chat/userData')
      .then((res) => {
        this.clientData = res.data;
        this.setState({ ui: "ui" });
      });
  }

  ChatToUiHandler=()=>{
    this.setState({ui:"ui"});
  }

  UiToChatHandler=(name)=>{
    this.userName=name;
    this.setState({ui:"chat"});
  }

  render() {
    if (this.state.ui==="login"){
      return (
        <div className="App">
          <Login LoginHandler={this.LoginDataHandler}/>
        </div>
      )
    }

    else if (this.state.ui==="ui") {
      return (
        <div className="App">
          <UiComp userData={this.userData} clientData={this.clientData} getName={this.UiToChatHandler} />
        </div>
      )
    } else {
        return (
          <div className="App">
            <ChatComp userName={this.userName} backToUi={this.ChatToUiHandler} />
          </div>
        )
    }
  }
}

export default App

