import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Hidden } from "@material-ui/core";
import BarChartSample from "./BarChartSample";
import LineChartSample from "./LinechartSample";
import TableDataSample from "./TableDataSample";
import sidoKorName from "./data/sidoKorName";
import source from "./source";
import { TableChart } from "@material-ui/icons";
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
      <Grid item xs={12} sm={7} lg={8}>
        <Paper className={classes.paper} style={{ height: "30vh" }}>
          <BarChartSample  />
        </Paper>
      </Grid>

      <Hidden mdDown>
        <Grid item lg={2}>
          <Paper></Paper>
        </Grid>
      </Hidden>
      <Hidden mdDown>
        <Grid item lg={2}></Grid>
      </Hidden>
      <Grid item xs={12} sm={7} lg={4}>
        <Paper className={classes.paper} style={{ height: "80vh" }}>
          <LineChartSample/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={7} lg={4}>
        <Paper className={classes.paper} style={{ height: "80vh" }}>
          
        </Paper>
      </Grid>

      <Hidden mdDown>
        <Grid item lg={2}></Grid>
      </Hidden>
    </Grid>
  );
};
export default Home;
