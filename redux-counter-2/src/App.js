import "./App.css";
import { incrementCount, decrementCount } from "./Redux/index";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incementCount: () => dispatch(incrementCount()),
    decrementCount: () => dispatch(decrementCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
