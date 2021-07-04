import { makeStyles } from "@material-ui/core";
import { Grid, Hidden, Paper } from "@material-ui/core";

import PromiseForm from "./PromiseForm";
import PromiseTable from "./PromiseTable";
const Promise = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    container: {
      [theme.breakpoints.up("lg")]: {
        marginTop: "80px",
      },
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.container}
        spacing={3}
        justify="center"
      >
        <Hidden xsDown>
          <Grid item sm={1} md={1} lg={2}></Grid>
        </Hidden>
        <Grid item xs={12} sm={10} md={10} lg={8}>
          <Paper className={classes.paper} style={{ width: "100%" }}>
            <PromiseForm />
            <PromiseTable />
          </Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={1} md={1} lg={2}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Promise;
