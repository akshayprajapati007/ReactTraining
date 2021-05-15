import './App.css';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HookCounter5 from './components/HookCounter5';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import OnlyOnceRender from './components/OnlyOnceRender';

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
      <MouseContainer></MouseContainer>

      <IntervalHookCounter></IntervalHookCounter>

    </div>
  );
}

export default App;
