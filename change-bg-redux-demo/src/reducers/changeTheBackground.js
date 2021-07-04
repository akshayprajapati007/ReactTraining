const initialState = "color1";

const changeTheBackground = (state = initialState, action) => {
  switch (action.type) {
    case "color1":
      return "color1";
    case "color2":
      return "color2";
    case "color3":
      return "color3";
    default:
      return "color1";
  }
};

export default changeTheBackground;
