import React, { Component } from 'react'


// here usage of ref is focusing input field on page load and fetch value
class RefsDemo extends Component {
    constructor(props) {
        super(props)
        
        //first way
        this.inputRef = React.createRef()

        //second way
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount(){
        //first way
        //this.inputRef.current.focus()

        //second way
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <label>Refs Demo : </label>
                <input type="text" ref={this.inputRef}></input> {/* // firstway */}
                <input type="text" ref={this.setCbRef}></input> {/* // secondway */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
