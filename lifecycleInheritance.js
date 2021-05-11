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

    static getDerivedStateFromProps(props, state){
      console.log("From Parent getDerivedStateFromProps");
      return { message : props.message };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({message: "This is a message from Parent Class (componentDidMount)"})
      }, 2000);
      console.log("From Parent componentDidMount");
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

  static getDerivedStateFromProps(props, state){
    console.log("From Child getDerivedStateFromProps");
    return { message1 : props.message1 };
  }

  componentDidMount() {
      setTimeout(() => {
        this.setState({message1: "This is a message from Child Class (componentDidMount)"})
      }, 2000);
      console.log("From Child componentDidMount");
    }


  render() {
      const { message } = this.props;
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
        <h1>Lifecycle Methods In Inheritance</h1>
        <ParentComponent message="Hello from Parent"/>
        <ChildComponent message1="Hello from child"/>
        </div> ,
        document.getElementById('root')
      );
