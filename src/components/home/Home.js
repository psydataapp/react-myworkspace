import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Hidden, Select, MenuItem } from "@material-ui/core";
import BarChartSample from "./BarChartSample";
import LineChartSample from "./LinechartSample";
import TableDataSample from "./TableDataSample";
import sidoKorName from "./data/sidoKorName";
import dataKorName from "./data/dataKorName";
import sourceSample from "./source";
import { TableChart } from "@material-ui/icons";
import { useEffect, useState } from "react";
import Tabledata from "./data/Tabledata";
import codeKorName from "./data/codeKorName";
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

const transformData = (source, code) => {
  if (source.length === 0) return [];
  console.log(source);
  const foodPoison = source.filter(function (f) {
    return f.code == "A01_2";
  });
  const asthma = source.filter(function (a) {
    return a.code == "D01";
  });
  const stroke = source.filter(function (s) {
    return s.code == "D02";
  });
  const skindisease = source.filter(function (skin) {
    return skin.code == "D04";
  });
  const transdata = [];
  console.log(foodPoison);
  if (code == "A01_2") {
    for (let food of foodPoison) {
      const item = {
        sido: sidoKorName[food.areaNo],
        today: food.today,
      };
      transdata.push(item);
    }
    return transdata;
  } else if (code == "D01") {
    for (let a of asthma) {
      const item = {
        sido: sidoKorName[a.areaNo],
        today: a.today,
      };
      transdata.push(item);
    }
    return transdata;
  } else if (code == "D02") {
    for (let s of stroke) {
      const item = {
        sido: sidoKorName[s.areaNo],
        today: s.today,
      };
      transdata.push(item);
    }
    return transdata;
  } else {
    for (let skin of skindisease) {
      const item = {
        sido: sidoKorName[skin.areaNo],
        today: skin.today,
      };
      transdata.push(item);
    }
    return transdata;
  }
};

// const transformLineData = (source) => {
//   if (source.length === 0) return [];

// }

const Home = () => {
  const classes = useStyles();
  const [code, setCode] = useState("A01_2");
  const [source, setSource] = useState([]);

  useEffect(() => {
    setSource(sourceSample);
  }, []);
  return (
    <Grid container spacing={2} className={classes.container} justify="center">
      <Hidden mdDown>
        <Grid item lg={2}>
          <Paper></Paper>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={7} lg={8}>
        <Paper
          className={classes.paper}
          style={{ height: "50vh", overflowY: "auto" }}
        >
          <Select
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
            }}
          >
            {Object.keys(codeKorName).map((code) => (
              <MenuItem key={`menu-${code}`} value={code}>
                {codeKorName[code]}
              </MenuItem>
            ))}
          </Select>
          <BarChartSample data={transformData(source, code)} />
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
      <Grid item xs={12} sm={6} lg={4}>
        <Paper
          className={classes.paper}
          style={{ height: "80vh", overflowY: "auto" }}
        >
          <LineChartSample />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper
          className={classes.paper}
          style={{ height: "80vh", overflowY: "auto" }}
        >
          {/* <TableDataSample /> */}
        </Paper>
      </Grid>

      <Hidden mdDown>
        <Grid item lg={2}></Grid>
      </Hidden>
    </Grid>
  );
};
export default Home;
