import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton, Typography, Drawer, Hidden } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import {
  Menu as MenuIcon,
  TableChart,
  Home as HomeIcon,
} from "@material-ui/icons";

import Home from "./components/home/Home";

import rootReducer from "./redux";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

const Promise = lazy(() => import("./components/promise/Promise"));

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
  menuButton: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: drawerWidth,
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div className={classes.toolbar}>
        <List component="nav">
          <Link to="/" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link to="/promise" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <TableChart />
              </ListItemIcon>
              <ListItemText>Promise</ListItemText>
            </ListItem>
          </Link>
        </List>
      </div>
    </>
  );

  return (
    <Provider store={store}>
      <Router>
        <div className={classes.root}>
          <header>
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  edge="start"
                  className={classes.menuButton}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                  My Workspace
                </Typography>
              </Toolbar>
            </AppBar>
            <Hidden lgUp implementation="css">
              <Drawer
                variant="temporary"
                open={mobileOpen}
                classes={{ paper: classes.drawerPaper }}
                onClose={handleDrawerToggle}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden mdDown implementation="css">
              <Drawer
                open
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
              >
                {drawer}
              </Drawer>
            </Hidden>
          </header>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/promise" component={Promise} exact></Route>
              </Switch>
            </Suspense>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
