import React, { Component } from 'react'

//Conditonal Rendering using if/else, variable, ternary operator, short-circuit operator
class ConRendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLogedIn: true
        }
    }
    
    render() {

        //using if/else
        /* if(this.state.isLogedIn){
            return <div>Welcome Ak</div>
        } else{
            return <div>Welcome Guest</div>
        } */


        //using variable
        /*
        let message           //declare variable
        if(this.state.isLogedIn){
            message = <div>Welcome Ak</div>
        } else {
            message = <div>Welcome Guest</div>
        }
        return message */


        //using ternary operator (mostaly recommanded)
        return (
            this.state.isLogedIn ?
            <div>Welcome Ak</div> :
            <div>Welcome Guest</div>
        )


        //using short-circuit value
        /* return this.state.isLogedIn && <div>Welcome Ak</div> */
    }
}

export default ConRendering