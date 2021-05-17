import React,{useContext} from 'react'
import {CountContext} from '../App'

function Counter2_2() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component 2_2 : 
            <button onClick={() => countContext.countSet('increment')}>Increment</button>
            <button onClick={() => countContext.countSet('decrement')}>Decrement</button>
            <button onClick={() => countContext.countSet('reset')}>Reset</button>
        </div>
    )
}

export default Counter2_2
