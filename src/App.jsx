import React from "react";
import "./App.scss";
import  Index from "./compenents/login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(<div className="APP">
      < Index/></div>
    )
  }
}
 


export default App;
