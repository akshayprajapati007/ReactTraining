import React, { Component } from 'react'

// Binding EventHandler using different 4 way
class BindEventHandling extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // 3(1)) using bind method in constuctor
        this.changeText = this.changeText.bind(this)
    }

    changeText() {
        this.setState ({
            message: 'GoodBye!'
        })
    }

    /* 4) using arrow function of class property (for this bind in constructor isn't require)

    changeText = () => {
        this.setState ({
            message: 'GoodBye!'
        })
    }

    */

    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* 1) using bind method in rendor part (not recommanded)
                <button onClick={this.changeText.bind(this)}>Click</button>
                */}
                
                {/* 2) using arrow function (not recommanded) 
                <button onClick={() => this.changeText()}>Click</button>
                */}

                {/* 3(2)) using bind function by constructor (highely recommanded) 
                */}
                <button onClick={this.changeText}>Click</button>

                {/* 4) using bind function by constructor (second highely recommanded) 
                 <button onClick={this.changeText}>Click</button>
                */}

            </div>
        )
    }
}

export default BindEventHandling
