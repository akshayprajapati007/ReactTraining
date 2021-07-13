import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div>
        <h2>Count : {props.count}</h2>
        <button onClick={props.incementCount}>Increment</button>
        <button onClick={props.decrementCount}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
