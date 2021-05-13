import React, { Component } from 'react'
import HocComponent from './HocComponent'

class HocCounter extends Component {
    render() {  
        console.log("in render hoc2")
        const {count, increment} = this.props
        return (
            <div>
                <h2 onMouseOver={increment}>{this.props.name} Hovered {count} Times</h2>
            </div>
        )
    }
}

export default HocComponent(HocCounter);
