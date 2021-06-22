import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import Home from "./components/Home";

const Promise = lazy(() => import("./components/Promise"));

const drawerWidth = "240px";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth,
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <header>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar></Toolbar>
          </AppBar>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/promise">Promise</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/promise" component={Promise}></Route>
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
