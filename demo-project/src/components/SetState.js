import React, { Component } from 'react'

class SetState extends Component {

    constructor(){
        super()
        
        // intializing state
        this.state = {
            message : 'Hello Visitor',
            count : 0
        }
    }

    /* incorrect way of changing state value by direct change,
    it's not change value on UI
    
    changeMessage() {
        this.state.message : 'Thank you for subscribing'
    }
    */

    // passing object to setState
    changeMessage() {
        this.setState({
            message : 'Thank you for subscribing'
        })
    }

    // passing arrow function to setState using previous state(proper way)
    increment(){
        this.setState((prevState, props) => ({
            count : prevState.count + 1
            // count : prevState.count + props.value
        }), () => console.log(this.state.count))  // for update any thing after change state value use the callback function 
    }

    render() {

        /* destructing state and props
        const {name, nickName} = this.props
        const {message, count} = this.state
        */
        return (
            <div> 
                <h3>{this.state.message}</h3>
                {/* changing text on button click */}
                <button onClick={() => this.changeMessage()}>Subcribe</button>

                <h3>Count - {this.state.count}</h3>
                {/* increment count value on button click */}
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default SetState