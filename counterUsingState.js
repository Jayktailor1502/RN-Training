import React from "react";

class App extends React.Component{

    constructor(props){
      super(props);
      this.state={
        count : 0
      };
    }
  
increment= () => {
    console.log("increment");
    this.setState({
        count : this.state.count + 1
      })
}

decrement= () => {
    console.log("decrement");
    this.setState({
        count : this.state.count - 1
      })
}


  render(){
    return (
      <div>
      <button onClick={this.increment}>Increment</button > <p></p>
      <button onClick={this.decrement}>Decrement</button >
      <h4>{this.state.count}</h4>
      </div>
    )
  }
  }
  
export default App;