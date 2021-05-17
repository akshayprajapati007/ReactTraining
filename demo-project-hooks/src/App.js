import React, { useContext, useReducer } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import Counter1_1 from './components/Counter1_1';
import Counter2_1 from './components/Counter2_1';
import CounterByReducer1 from './components/CounterByReducer1';
import CounterByReducer2 from './components/CounterByReducer2';
import CounterByReducer3 from './components/CounterByReducer3';
import DataFetching from './components/DataFetching';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HookCounter5 from './components/HookCounter5';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

// for <CountContext.Provider>
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

function App() {

  const [count, setCount] = useReducer(reducer, intialState)

  return (
    <div className="App">

      {/*Using hooks create state */}
      <HookCounter/>

      {/* Another example of hooks */}
      <HookCounter2/>

      {/* Another example of hooks */}
      <HookCounter3/>

      {/* Hooks use for array state */}
      <HookCounter4/>

      {/* UseEffect method usage */}
      <HookCounter5/>
      
      {/* Only one time render useEffect and remove subscription*/}
      {/* <MouseContainer/> */}

      {/* Anothor example of hooks */}
      {/* <IntervalHookCounter/> */}

      {/* Fetching data using axios */}
      <DataFetching/>

      {/* Exapmle of context and here we wrap a our component in that context variable */}
      <UserContext.Provider value={'Ak'}>
        <ChannelContext.Provider value={'Aj'}>
          <ComponentA/>
        </ChannelContext.Provider>
      </UserContext.Provider>

      {/* Set counter using useReducer */}
      <CounterByReducer1/>
 
      {/* Set counter using useReducer */}
      <CounterByReducer2/>

      {/* Set two counter using useReducer with only 1 reducer method */}
      <CounterByReducer3/>

      {/* Set counter from different child component */}
      <CountContext.Provider value={{countValue: count, countSet: setCount}}>
        <br/>
        Controling counter by diffferent child component<br/>
        {count}
        <Counter1_1/>
        <Counter2_1/>
      </CountContext.Provider>

      {/* Fetching data using state */}
      <DataFetchingOne/>

      {/* Fetching data using useReducer */}
      <DataFetchingTwo/>

    </div>
  );
}

export default App;
