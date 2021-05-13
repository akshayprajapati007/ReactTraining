import React, { Component } from 'react'

class FormBasic extends Component {

    constructor(props) {
        super(props)
    
        //store controlled component value
        this.state = {
             name:'',
             comments:'',
             tech:'react'
        }
    }

    //edit name handler method
    nameChangeHandler = event => {
        this.setState({
            name: event.target.value
        })
    }

    //edit comments handler method
    commentChangeHandler = event => {
        this.setState({
            comments:event.target.value
        })
    }

    //edit tech handler method
    techChangeHandler = event => {
        this.setState({
            tech: event.target.value,
        })
    }

    //form submit handler
    submitHandler = event => {
        alert(`${this.state.name} ${this.state.comments} ${this.state.tech}`)
    }
    
    render() {
        //destructing the state
        const {name, comments, tech} = this.state
        
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Name : </label>
                    <input type='text' value={name} onChange={this.nameChangeHandler}></input>
                </div>
                <div>
                    <label>Comments : </label>
                    <textarea value={comments} onChange={this.commentChangeHandler}></textarea>
                </div>
                <div>
                    <label>Tech : </label>
                    <select value={tech} onChange={this.techChangeHandler}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>

                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default FormBasic
