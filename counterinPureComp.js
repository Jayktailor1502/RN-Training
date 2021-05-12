import React from "react";


class App extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            arr: [],
            count: 0
        }
    }

    increment = () => {
        console.log("increment");
        this.setState({
            count: this.state.count + 1 
        });
        var index = this.state.arr.indexOf(this.state.count+1);
        console.log(" "+index)
        if((index === -1)){
            this.setState({
                arr: [...this.state.arr, this.state.count+1]
            })
        }
    }

    decrement = () => {
        console.log("decrement");
        this.setState({
            count: this.state.count - 1
        });
        var index = this.state.arr.indexOf(this.state.count-1);
        console.log(" "+index)
        if((index === -1)){
            this.setState({
                arr: [...this.state.arr, this.state.count-1]
            })
        }
    }

    render() {
        return (
            console.log(this.state.count),
            console.log(this.state.arr),
            <div>
                <b>Counter Value: {this.state.count}</b><p></p>
                <b>Array Value: {this.state.arr}</b><p></p>
                <button onClick={this.increment}>Increment</button >
                <button onClick={this.decrement}>Decrement</button >
            </div>
        )
    }
}

export default App;