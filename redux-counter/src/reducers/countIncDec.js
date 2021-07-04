//Reducer function for changing counter
const initialValue = 0;

const countIncDec = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default countIncDec;
