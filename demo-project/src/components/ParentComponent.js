import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             parrentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childName){
        alert(`Hello ${this.state.parrentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent sendFunction={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
