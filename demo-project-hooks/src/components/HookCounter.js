import React, {useState} from 'react'

function HookCounter() {

    //using hooks define a state
    //count is a state property name and second parameter is a setStateFunction
    const [count, setCount] = useState(0)  // 0 is a default value of state(here count)

    return (
        <div>
            <button onClick={() => setCount(count => count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter
