import React from "react";
import ReactDOM from 'react-dom';

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "This is a message from Parent Class (Constructor)"
    };
    console.log("From Parent Constructor")
  }

  // static getDerivedStateFromProps(props, state){
  //   console.log("From Parent getDerivedStateFromProps");
  //   return { message : props.message };
  // }

  shouldComponentUpdate() {
    console.log("From Parent shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("From Parent getSnapshotBeforeUpdate");
    document.getElementById("div1").innerHTML =
      "Before the update, the message was " + prevState.message;
    return null;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: "This is a message from Parent Class (componentDidMount)" })
    }, 2000);
    console.log("From Parent componentDidMount");
  }

  componentDidUpdate() {
    console.log("From Parent componentDidUpdate");
    document.getElementById("div2").innerHTML =
      "The updated message is " + this.state.message;
  }

  componentWillUnmount() {
    console.log("From Parent componentWillUnmount");
  }

  render() {
    console.log("From Parent Render");
    return (
      <div>
        <b>Messages : {this.state.message}</b><br />
      </div>)


  }
}

class ChildComponent extends ParentComponent {
  constructor(props) {
    super(props);
    this.state = {
      message1: "This is a message from Child Class (Constructor)"
    };
    console.log("From Child Constructor")
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("From Child getDerivedStateFromProps");
  //   return { message1: props.message1 };
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("From Child getSnapshotBeforeUpdate");
    document.getElementById("div3").innerHTML =
      "Before the update, the message was " + prevState.message1;
    return null;
  }

  componentDidUpdate() {
    console.log("From Child componentDidUpdate");
    document.getElementById("div4").innerHTML =
      "The updated message is " + this.state.message1;
  }

  shouldComponentUpdate() {
    console.log("From Child shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message1: "This is a message from Child Class (componentDidMount)" })
    }, 2000);
    console.log("From Child componentDidMount");
  }

  componentWillUnmount() {
    console.log("From Child componentWillUnmount");
  }


  render() {
    const { message1 } = this.props;
    console.log("From Child Render");
    return (
      <div>
        <p>
          <b>Messages : {this.state.message1}</b>
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <h1>LifeCycle Methods In Inheritance</h1>
    <ParentComponent />
    <ChildComponent />
  <div id="div1"></div>
  <div id="div2"></div><br />
  <div id="div3"></div>
  <div id="div4"></div>
  </div>
  ,
  document.getElementById('root')
);


// =================================================================LifeCycle Inheritance

