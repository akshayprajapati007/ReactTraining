import React from "react";
import "./App.css";
import clsx from "clsx";
import { makeStyles, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { color1, color2, color3 } from "./actions/index";

const useStyles = makeStyles({
  buttonBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "450px",
    marginTop: "2em",
  },
  container: {
    display: "grid",
    placeItems: "center",
    height: "300px",
    width: "450px",
    borderRadius: "5px",
    marginTop: "1em",
    fontFamily: "sans-serif",
  },
  color1: {
    backgroundColor: "#41B3A3",
  },
  color2: {
    backgroundColor: "#C38D9E",
  },
  color3: {
    backgroundColor: "#E8A87C",
  },
});

function App() {
  const classes = useStyles();
  const bgColorState = useSelector((state) => state.changeTheBackground);
  const dispatch = useDispatch();
  console.log(bgColorState);

  return (
    <div className="App">
      <div className={classes.buttonBox}>
        <Button
          style={{ backgroundColor: "#41B3A3" }}
          onClick={() => dispatch(color1())}
        >
          color1
        </Button>
        <Button
          style={{ backgroundColor: "#C38D9E" }}
          onClick={() => dispatch(color2())}
        >
          color2
        </Button>
        <Button
          style={{ backgroundColor: "#E8A87C" }}
          onClick={() => dispatch(color3())}
        >
          color3
        </Button>
      </div>
      <div
        className={`${classes.container} ${clsx({
          [classes.color1]: bgColorState === "color1",
          [classes.color2]: bgColorState === "color2",
          [classes.color3]: bgColorState === "color3",
        })}`}
      >
        <h2>Bg Change Redux Demo</h2>
      </div>
    </div>
  );
}

export default App;
