import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Hidden, Select, MenuItem } from "@material-ui/core";
import BarChartSample from "./BarChartSample";
import LineChartSample from "./LinechartSample";
import ResponsiveTable from "./ResponsiveTable";
import sidoKorName from "./data/sidoKorName";
import dataKorName from "./data/dataKorName";
import sourceSample from "./source";
import { TableChart } from "@material-ui/icons";
import { useEffect, useState } from "react";
import Tabledata from "./data/Tabledata";
import codeKorName from "./data/codeKorName";
import api from "../../api/opendata";
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
        지역별건강보건지수: parseInt(food.today),
      };
      transdata.push(item);
    }
    return transdata;
  } else if (code == "D01") {
    for (let a of asthma) {
      const item = {
        sido: sidoKorName[a.areaNo],
        지역별건강보건지수: parseInt(a.today),
      };
      transdata.push(item);
    }
    return transdata;
  } else if (code == "D02") {
    for (let s of stroke) {
      const item = {
        sido: sidoKorName[s.areaNo],
        지역별건강보건지수: parseInt(s.today),
      };
      transdata.push(item);
    }
    return transdata;
  } else {
    for (let skin of skindisease) {
      const item = {
        sido: sidoKorName[skin.areaNo],
        지역별건강보건지수: parseInt(skin.today),
      };
      transdata.push(item);
    }
    return transdata;
  }
};

const transformLineData = (source, sido) => {
  if (source.length === 0) return [];

  const seouldata = source.filter(function (seoul) {
    return seoul.areaNo == "1100000000";
  });
  const busandata = source.filter(function (busan) {
    return busan.areaNo == "2600000000";
  });
  const daegudata = source.filter(function (daegu) {
    return daegu.areaNo == "2700000000";
  });
  const incheondata = source.filter(function (incheon) {
    return incheon.areaNo == "2800000000";
  });
  const gwangjudata = source.filter(function (gwangju) {
    return gwangju.areaNo == "2900000000";
  });
  const daejeondata = source.filter(function (daejeon) {
    return daejeon.areaNo == "3000000000";
  });
  const ulsandata = source.filter(function (ulsan) {
    return ulsan.areaNo == "3100000000";
  });
  const sejongdata = source.filter(function (sejong) {
    return sejong.areaNo == "3600000000";
  });
  const gyeonggidata = source.filter(function (gyeonggi) {
    return gyeonggi.areaNo == "4100000000";
  });
  const gangwondata = source.filter(function (gangwon) {
    return gangwon.areaNo == "4200000000";
  });
  const chungbukdata = source.filter(function (chungbuk) {
    return chungbuk.areaNo == "4300000000";
  });
  const chungnamdata = source.filter(function (chungnam) {
    return chungnam.areaNo == "4400000000";
  });
  const jeonbukdata = source.filter(function (jeonbuk) {
    return jeonbuk.areaNo == "4500000000";
  });
  const jeonnamdata = source.filter(function (jeonnam) {
    return jeonnam.areaNo == "4600000000";
  });
  const gyeongbukdata = source.filter(function (gyeongbuk) {
    return gyeongbuk.areaNo == "4700000000";
  });
  const gyeongnamdata = source.filter(function (gyeongnam) {
    return gyeongnam.areaNo == "4800000000";
  });
  const jejudata = source.filter(function (jeju) {
    return jeju.areaNo == "5000000000";
  });

  console.log(busandata);
  console.log(seouldata);
  let transdata = [];

  if (sido === "1100000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(seouldata[0].today),
        천식폐질환가능지수: parseInt(seouldata[1].today),
        뇌졸중가능지수: parseInt(seouldata[2].today),
        피부질환가능지수: parseInt(seouldata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(seouldata[0].tomorrow),
        천식폐질환가능지수: parseInt(seouldata[1].tomorrow),
        뇌졸중가능지수: parseInt(seouldata[2].tomorrow),
        피부질환가능지수: parseInt(seouldata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(seouldata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(seouldata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(seouldata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(seouldata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido === "2600000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(busandata[0].today),
        천식폐질환가능지수: parseInt(busandata[1].today),
        뇌졸중가능지수: parseInt(busandata[2].today),
        피부질환가능지수: parseInt(busandata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(busandata[0].tomorrow),
        천식폐질환가능지수: parseInt(busandata[1].tomorrow),
        뇌졸중가능지수: parseInt(busandata[2].tomorrow),
        피부질환가능지수: parseInt(busandata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(busandata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(busandata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(busandata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(busandata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido === "2700000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(daegudata[0].today),
        천식폐질환가능지수: parseInt(daegudata[1].today),
        뇌졸중가능지수: parseInt(daegudata[2].today),
        피부질환가능지수: parseInt(daegudata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(daegudata[0].tomorrow),
        천식폐질환가능지수: parseInt(daegudata[1].tomorrow),
        뇌졸중가능지수: parseInt(daegudata[2].tomorrow),
        피부질환가능지수: parseInt(daegudata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(daegudata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(daegudata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(daegudata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(daegudata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido === "2800000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(incheondata[0].today),
        천식폐질환가능지수: incheondata[1].today,
        뇌졸중가능지수: incheondata[2].today,
        피부질환가능지수: incheondata[3].today,
      },
      {
        date: "내일",
        식중독지수: parseInt(incheondata[0].tomorrow),
        천식폐질환가능지수: parseInt(incheondata[1].tomorrow),
        뇌졸중가능지수: parseInt(incheondata[2].tomorrow),
        피부질환가능지수: parseInt(incheondata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(incheondata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(incheondata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(incheondata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(incheondata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido == "2900000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(gwangjudata[0].today),
        천식폐질환가능지수: parseInt(gwangjudata[1].today),
        뇌졸중가능지수: parseInt(gwangjudata[2].today),
        피부질환가능지수: parseInt(gwangjudata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(gwangjudata[0].tomorrow),
        천식폐질환가능지수: parseInt(gwangjudata[1].tomorrow),
        뇌졸중가능지수: parseInt(gwangjudata[2].tomorrow),
        피부질환가능지수: parseInt(gwangjudata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(gwangjudata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(gwangjudata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(gwangjudata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(gwangjudata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido == "3000000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(daejeondata[0].today),
        천식폐질환가능지수: parseInt(daejeondata[1].today),
        뇌졸중가능지수: parseInt(daejeondata[2].today),
        피부질환가능지수: parseInt(daejeondata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(daejeondata[0].tomorrow),
        천식폐질환가능지수: parseInt(daejeondata[1].tomorrow),
        뇌졸중가능지수: parseInt(daejeondata[2].tomorrow),
        피부질환가능지수: parseInt(daejeondata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(daejeondata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(daejeondata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(daejeondata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(daejeondata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido == "3100000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(ulsandata[0].today),
        천식폐질환가능지수: parseInt(ulsandata[1].today),
        뇌졸중가능지수: parseInt(ulsandata[2].today),
        피부질환가능지수: parseInt(ulsandata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(ulsandata[0].tomorrow),
        천식폐질환가능지수: parseInt(ulsandata[1].tomorrow),
        뇌졸중가능지수: parseInt(ulsandata[2].tomorrow),
        피부질환가능지수: parseInt(ulsandata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(ulsandata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(ulsandata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(ulsandata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(ulsandata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido == "3600000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(sejongdata[0].today),
        천식폐질환가능지수: parseInt(sejongdata[1].today),
        뇌졸중가능지수: parseInt(sejongdata[2].today),
        피부질환가능지수: parseInt(sejongdata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(sejongdata[0].tomorrow),
        천식폐질환가능지수: parseInt(sejongdata[1].tomorrow),
        뇌졸중가능지수: parseInt(sejongdata[2].tomorrow),
        피부질환가능지수: parseInt(sejongdata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(sejongdata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(sejongdata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(sejongdata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(sejongdata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido == "4100000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(gyeonggidata[0].today),
        천식폐질환가능지수: parseInt(gyeonggidata[1].today),
        뇌졸중가능지수: parseInt(gyeonggidata[2].today),
        피부질환가능지수: parseInt(gyeonggidata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(gyeonggidata[0].tomorrow),
        천식폐질환가능지수: parseInt(gyeonggidata[1].tomorrow),
        뇌졸중가능지수: parseInt(gyeonggidata[2].tomorrow),
        피부질환가능지수: parseInt(gyeonggidata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(gyeonggidata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(gyeonggidata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(gyeonggidata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(gyeonggidata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido == "4200000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(gangwondata[0].today),
        천식폐질환가능지수: parseInt(gangwondata[1].today),
        뇌졸중가능지수: parseInt(gangwondata[2].today),
        피부질환가능지수: parseInt(gangwondata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(gangwondata[0].tomorrow),
        천식폐질환가능지수: parseInt(gangwondata[1].tomorrow),
        뇌졸중가능지수: parseInt(gangwondata[2].tomorrow),
        피부질환가능지수: parseInt(gangwondata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(gangwondata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(gangwondata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(gangwondata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(gangwondata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido == "4300000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(chungbukdata[0].today),
        천식폐질환가능지수: parseInt(chungbukdata[1].today),
        뇌졸중가능지수: parseInt(chungbukdata[2].today),
        피부질환가능지수: parseInt(chungbukdata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(chungbukdata[0].tomorrow),
        천식폐질환가능지수: parseInt(chungbukdata[1].tomorrow),
        뇌졸중가능지수: parseInt(chungbukdata[2].tomorrow),
        피부질환가능지수: parseInt(chungbukdata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(chungbukdata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(chungbukdata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(chungbukdata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(chungbukdata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido == "4400000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(chungnamdata[0].today),
        천식폐질환가능지수: parseInt(chungnamdata[1].today),
        뇌졸중가능지수: parseInt(chungnamdata[2].today),
        피부질환가능지수: parseInt(chungnamdata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(chungnamdata[0].tomorrow),
        천식폐질환가능지수: parseInt(chungnamdata[1].tomorrow),
        뇌졸중가능지수: parseInt(chungnamdata[2].tomorrow),
        피부질환가능지수: parseInt(chungnamdata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(chungnamdata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(chungnamdata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(chungnamdata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(chungnamdata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido == "4500000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(jeonbukdata[0].today),
        천식폐질환가능지수: parseInt(jeonbukdata[1].today),
        뇌졸중가능지수: parseInt(jeonbukdata[2].today),
        피부질환가능지수: parseInt(jeonbukdata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(jeonbukdata[0].tomorrow),
        천식폐질환가능지수: parseInt(jeonbukdata[1].tomorrow),
        뇌졸중가능지수: parseInt(jeonbukdata[2].tomorrow),
        피부질환가능지수: parseInt(jeonbukdata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(jeonbukdata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(jeonbukdata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(jeonbukdata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(jeonbukdata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido == "4600000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(jeonnamdata[0].today),
        천식폐질환가능지수: parseInt(jeonnamdata[1].today),
        뇌졸중가능지수: parseInt(jeonnamdata[2].today),
        피부질환가능지수: parseInt(jeonnamdata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(jeonnamdata[0].tomorrow),
        천식폐질환가능지수: parseInt(jeonnamdata[1].tomorrow),
        뇌졸중가능지수: parseInt(jeonnamdata[2].tomorrow),
        피부질환가능지수: parseInt(jeonnamdata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(jeonnamdata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(jeonnamdata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(jeonnamdata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(jeonnamdata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido == "4700000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(gyeongbukdata[0].today),
        천식폐질환가능지수: parseInt(gyeongbukdata[1].today),
        뇌졸중가능지수: parseInt(gyeongbukdata[2].today),
        피부질환가능지수: parseInt(gyeongbukdata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(gyeongbukdata[0].tomorrow),
        천식폐질환가능지수: parseInt(gyeongbukdata[1].tomorrow),
        뇌졸중가능지수: parseInt(gyeongbukdata[2].tomorrow),
        피부질환가능지수: parseInt(gyeongbukdata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(gyeongbukdata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(gyeongbukdata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(gyeongbukdata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(gyeongbukdata[3].theDayAfterTomorrow),
      },
    ]);
  } else if (sido == "4800000000") {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(gyeongnamdata[0].today),
        천식폐질환가능지수: parseInt(gyeongnamdata[1].today),
        뇌졸중가능지수: parseInt(gyeongnamdata[2].today),
        피부질환가능지수: parseInt(gyeongnamdata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(gyeongnamdata[0].tomorrow),
        천식폐질환가능지수: parseInt(gyeongnamdata[1].tomorrow),
        뇌졸중가능지수: parseInt(gyeongnamdata[2].tomorrow),
        피부질환가능지수: parseInt(gyeongnamdata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(gyeongnamdata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(gyeongnamdata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(gyeongnamdata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(gyeongnamdata[3].theDayAfterTomorrow),
      },
    ]);
  } else {
    return (transdata = [
      {
        date: "오늘",
        식중독지수: parseInt(jejudata[0].today),
        천식폐질환가능지수: parseInt(jejudata[1].today),
        뇌졸중가능지수: parseInt(jejudata[2].today),
        피부질환가능지수: parseInt(jejudata[3].today),
      },
      {
        date: "내일",
        식중독지수: parseInt(jejudata[0].tomorrow),
        천식폐질환가능지수: parseInt(jejudata[1].tomorrow),
        뇌졸중가능지수: parseInt(jejudata[2].tomorrow),
        피부질환가능지수: parseInt(jejudata[3].tomorrow),
      },
      {
        date: "모레",
        식중독지수: parseInt(jejudata[0].theDayAfterTomorrow),
        천식폐질환가능지수: parseInt(jejudata[1].theDayAfterTomorrow),
        뇌졸중가능지수: parseInt(jejudata[2].theDayAfterTomorrow),
        피부질환가능지수: parseInt(jejudata[3].theDayAfterTomorrow),
      },
    ]);
  }
};

const trasformTabledata = (source, code1) => {
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
  if (code1 == "A01_2") {
    for (let food of foodPoison) {
      const item = {
        지역: sidoKorName[food.areaNo],
        오늘: parseInt(food.today),
        내일: parseInt(food.tomorrow),
        모레: parseInt(food.theDayAfterTomorrow),
      };
      transdata.push(item);
    }
    return transdata;
  } else if (code1 == "D01") {
    for (let a of asthma) {
      const item = {
        지역: sidoKorName[a.areaNo],
        오늘: parseInt(a.today),
        내일: parseInt(a.tomorrow),
        모레: parseInt(a.theDayAfterTomorrow),
      };
      transdata.push(item);
    }
    return transdata;
  } else if (code1 == "D02") {
    for (let s of stroke) {
      const item = {
        지역: sidoKorName[s.areaNo],
        오늘: parseInt(s.today),
        내일: parseInt(s.tomorrow),
        모레: parseInt(s.theDayAfterTomorrow),
      };
      transdata.push(item);
    }
    return transdata;
  } else {
    for (let skin of skindisease) {
      const item = {
        지역: sidoKorName[skin.areaNo],
        오늘: parseInt(skin.today),
        내일: parseInt(skin.tomorrow),
        모레: parseInt(skin.theDayAfterTomorrow),
      };
      transdata.push(item);
      console.log(transdata);
    }
    return transdata;
  }
};

const Home = () => {
  const classes = useStyles();
  const [code, setCode] = useState("A01_2");
  const [source, setSource] = useState([]);
  const [sido, setSido] = useState("1100000000");
  const [code1, setCode1] = useState("A01_2");
  useEffect(() => {
    const getData = async () => {
      const result = await api.fetchHealthWtrIdx();
      setSource(result.data);
    };
    getData();
  }, []);
  return (
    <Grid container spacing={2} className={classes.container} justify="center">
      <Hidden mdDown>
        <Grid item lg={2}>
          <Paper></Paper>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={7} lg={8}>
        <Paper className={classes.paper} style={{ height: "40vh" }}>
          <h5>
            지역별 &nbsp;
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
            &nbsp; 그래프
          </h5>

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
      <Grid item xs={12} sm={6} lg={3}>
        <Paper
          className={classes.paper}
          style={{ height: "50vh", overflowY: "auto" }}
        >
          <Select
            value={sido}
            onChange={(event) => {
              setSido(event.target.value);
            }}
          >
            {Object.keys(sidoKorName).map((sido) => (
              <MenuItem key={`menu-${sido}`} value={sido}>
                {sidoKorName[sido]}
              </MenuItem>
            ))}
          </Select>
          <LineChartSample data={transformLineData(source, sido)} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={5}>
        <Paper
          className={classes.paper}
          style={{ height: "50vh", overflowY: "auto" }}
        >
          <h5>
            지역별 &nbsp;
            <Select
              value={code1}
              onChange={(event) => {
                setCode1(event.target.value);
              }}
            >
              {Object.keys(codeKorName).map((code1) => (
                <MenuItem key={`menu-${code1}`} value={code1}>
                  {codeKorName[code1]}
                </MenuItem>
              ))}
            </Select>
          </h5>

          <ResponsiveTable data={trasformTabledata(source, code1)} />
        </Paper>
      </Grid>

      <Hidden mdDown>
        <Grid item lg={2}></Grid>
      </Hidden>
    </Grid>
  );
};
export default Home;
