import React from 'react';

const HocComponent = (WrappedComponent) =>{
    class HocComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                 count : 0
            }
            console.log("in constructor")
        }
        
        increment = () => {
            console.log("in increment")
            this.setState({
                count : this.state.count+1
            })
        }
        render(){
            console.log("in renderhoccop");
                return <WrappedComponent 
            count = {this.state.count}
            increment = {this.increment}
            {...this.props}
            />      
        }
    }

    return HocComponent;
}

  
export default HocComponent;