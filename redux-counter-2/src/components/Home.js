import React from "react";

function Home(props) {
  return (
    <div>
      <h2 data-testid="h2Tag">Count : {props.count}</h2>
      <button data-testid="incrementButton" onClick={props.incrementCount}>
        Increment
      </button>
      <button data-testid="decrementButton" onClick={props.decrementCount}>
        Decrement
      </button>
    </div>
  );
}

export default Home;
