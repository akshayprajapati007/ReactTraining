import React, {useReducer} from 'react'

const intialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return intialState
        default:
            return state
    }
}

function CounterByReducer1() {

  const [count, setCount] = useReducer(reducer, intialState)

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => setCount('increment')}>Increment</button>
            <button onClick={() => setCount('decrement')}>Decrement</button>
            <button onClick={() => setCount('reset')}>Reset</button>
        </div>
    )
}

export default CounterByReducer1
