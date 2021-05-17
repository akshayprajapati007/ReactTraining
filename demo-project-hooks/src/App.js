import React, { useContext } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import CounterByReducer from './components/CounterByReducer';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HookCounter5 from './components/HookCounter5';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">

      {/*Using hooks create state */}
      <HookCounter></HookCounter>

      {/* Another example of hooks */}
      <HookCounter2></HookCounter2>

      {/* Another example of hooks */}
      <HookCounter3></HookCounter3>

      {/* Hooks use for array state */}
      <HookCounter4></HookCounter4>

      {/* UseEffect method usage */}
      <HookCounter5></HookCounter5>
      
      {/* Only one time render useEffect and remove subscription*/}
      {/* <MouseContainer></MouseContainer> */}

      {/* Anothor example of hooks */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}

      {/* Fetching data using axios */}
      <DataFetching></DataFetching>

      {/* Exapmle of context and here we wrap a our component in that context variable */}
      <UserContext.Provider value={'Ak'}>
        <ChannelContext.Provider value={'Aj'}>
          <ComponentA></ComponentA>
        </ChannelContext.Provider>
      </UserContext.Provider>

      {/* set counter using useReducer */}
      <CounterByReducer></CounterByReducer>

    </div>
  );
}

export default App;
