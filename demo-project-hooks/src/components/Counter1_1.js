import React,{useContext} from 'react'
import {CountContext} from '../App'

function Counter1_1() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component 1_1 : 
            <button onClick={() => countContext.countSet('increment')}>Increment</button>
            <button onClick={() => countContext.countSet('decrement')}>Decrement</button>
            <button onClick={() => countContext.countSet('reset')}>Reset</button>
        </div>
    )
}

export default Counter1_1
