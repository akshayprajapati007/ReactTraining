import React from "react";

function Home(props) {
  return (
    <div>
      <h2>Count : {props.count}</h2>
      <button onClick={props.incementCount}>Increment</button>
      <button onClick={props.decrementCount}>Decrement</button>
    </div>
  );
}

export default Home;
