import "./App.css";
import { incNumber, decNumber } from "./actions/actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const myState = useSelector((state) => state.countIncDec);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decNumber())}>-</button>
      <input type="text" value={myState} />
      <button onClick={() => dispatch(incNumber(5))}>+</button>
    </div>
  );
}

export default App;
