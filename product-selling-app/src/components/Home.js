import React from "react";
import Nav from "./Nav";
import Dashboard from "./Dashboard/Dashboard";
import Categories from "./Categories";
import Products from "./Products/Products";
import Overview from "./Overview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  Navigation: {
    position: "absolute",
    border: "1px solid #d1d1d1",
    height: "100vh",
    width: "25vh",
    zIndex: "1",
  },
  componentArea: {
    position: "absolute",
    marginLeft: "25vh",
    width: "184vh",
    height: "100vh",
  },
});

function Home() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <div className={classes.Navigation}>
          <Nav />
        </div>
        <div className={classes.componentArea}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/categories" component={Categories} />
            <Route path="/products" component={Products}></Route>
            <Route path="/overview" component={Overview}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Home;
