import React, { Component } from 'react'

class EventHandling extends Component {

    Method() {
        console.log('Hello')
    }
    render() {
        return (
            <div>
                <button onClick={this.Method}>Click</button>
                {/* for function component
                
                function EventHandling() {

                    funcion Method() {
                        console.log('Hello')
                    }
                    
                    return (
                        <div>
                        <button onClick={Method}>Click</button>   //In both component () are not use
                        </div>
                    )
                }
                */}
            </div>
        )
    }
}

export default EventHandling
