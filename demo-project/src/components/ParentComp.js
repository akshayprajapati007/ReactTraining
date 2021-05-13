import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ak'
        }
    }

    //this method repeating state update in 2 seconds
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Ak' //here we update same state so in pure component shallow comparision occur,
                          //and if it returns true then pure component's render function not again render but regular component render again
                          //shallow comparision ("akshay"==="akshay" => give true)
            })
        }, 2000);
    }
    
    render() {
        console.log('-----Parent Comp-----')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}></MemoComp>
                <RegComp></RegComp>
                <PureComp></PureComp>
            </div>
        )
    }
}

export default ParentComp
