import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.container} justify="center">
      <Hidden mdDown>
        <Grid item lg={2}>
          <Paper></Paper>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={7} lg={5}>
        <Paper className={classes.paper} style={{ height: "30vh" }}></Paper>
      </Grid>
      <Grid item xs={12} sm={7} lg={3}>
        <Paper className={classes.paper} style={{ height: "30vh" }}></Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={2}>
          <Paper></Paper>
        </Grid>
      </Hidden>
      <Hidden mdDown>
        <Grid item lg={2}></Grid>
      </Hidden>
      <Grid item xs={12} sm={12} lg={8}>
        <Paper className={classes.paper} style={{ height: "40vh" }}></Paper>
      </Grid>

      <Hidden mdDown>
        <Grid item lg={2}></Grid>
      </Hidden>
    </Grid>
  );
};
export default Home;
