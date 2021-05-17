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

function CounterByReducer3() {

  const [count, setCount] = useReducer(reducer, intialState)
  const [count2, setCount2] = useReducer(reducer, intialState)

    return (
        <div>
            <div>Counter 1 - {count}</div>
            <button onClick={() => setCount('increment')}>Increment</button>
            <button onClick={() => setCount('decrement')}>Decrement</button>
            <button onClick={() => setCount('reset')}>Reset</button>

            <div>Counter 2 - {count2}</div>
            <button onClick={() => setCount2('increment')}>Increment</button>
            <button onClick={() => setCount2('decrement')}>Decrement</button>
            <button onClick={() => setCount2('reset')}>Reset</button>
        </div>
        
    )
}

export default CounterByReducer3
