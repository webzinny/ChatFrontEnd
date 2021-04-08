import './App.css';
import React,{Component} from 'react';
import ChatComp from './components/ChatComp';
import UiComp from './components/UiComp'

class App extends Component {

  constructor(){
    super()
    this.state={
      ui:true,
    };
    this.userName="";
  }

  ChatToUiHandler=()=>{
    this.setState({ui:true});
  }

  UiToChatHandler=(name)=>{
    this.userName=name;
    this.setState({ui:false});
  }

  render() {
    if (this.state.ui) {
      return (
        <div className="App">
          <UiComp getName={this.UiToChatHandler} />
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

