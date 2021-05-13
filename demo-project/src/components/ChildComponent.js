import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.sendFunction('Child')}>Click Me</button>
        </div>
    )
}

export default ChildComponent
