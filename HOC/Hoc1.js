import React, { Component } from 'react'
import HocComponent from './HocComponent'

class Hoc extends Component {
    
    render() {
        console.log("in render hoc1");
        const {count, increment} = this.props
        return (
            <div>
                <h1>Higher Order Component</h1>
                <b><div>{count} </div></b><br />
                <button onClick={increment}>Increment</button>
            </div>    
        )   
    }
}

export default HocComponent(Hoc);
