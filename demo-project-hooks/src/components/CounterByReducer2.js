import React, {useReducer} from 'react'

const intialState = {
    firstCounter:0,
    secondCounter:15
}
const reducer = (state, action) => {
    switch(action.type){    // here we use object for state so that instead of using only action we need to specify action.type
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment5':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement5':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return intialState
        default:
            return state
    }
}

function CounterByReducer2() {


    // create state using useReducer function
    const [count, setCount] = useReducer(reducer, intialState)

    return (
        <div>
            <br/><div>Counter 1 : {count.firstCounter}</div>
            <div>Counter 2 : {count.secondCounter}</div>
            <button onClick={() => setCount({type:'increment', value: 1})}>
                Increment
            </button>
            <button onClick={() => setCount({type:'decrement', value: 1})}>
                Decrement
            </button>
            <button onClick={() => setCount({type:'increment5', value: 5})}>
                Increment 5
            </button>
            <button onClick={() => setCount({type:'decrement5', value: 5})}>
                Decrement 5
            </button>
            <button onClick={() => setCount({type:'increment2', value: 5})}>
                Increment Counter 2
            </button>
            <button onClick={() => setCount({type:'decrement2', value: 5})}>
                Decrement Counter 2
            </button>
            <button onClick={() => setCount({type:'reset'})}>
                Reset
            </button>
        </div>
    )
}

export default CounterByReducer2
