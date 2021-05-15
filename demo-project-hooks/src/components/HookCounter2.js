import React, {useState} from 'react'

function HookCounter2() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(count => count + 1) //here instead of passing direct next state value(here, (count + 1))
                                         //pass the function which accept current state value and in function body write the code for next state
        }
    }
    return (
        <div>
            <br/>Count : {count} <br/>
            <button onClick={() => setCount(initialCount)}>Reset</button>&nbsp;
            <button onClick={() => setCount(count => count + 1)}>Increment</button>&nbsp;
            <button onClick={() => setCount(count => count - 1)}>Decrement</button>&nbsp;
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounter2
