import { useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Line } from "react-chartjs-2";
import { Grid, Typography } from "@material-ui/core";

import { formatDate, formatChartData } from "components/helpers";

import useStyles from "../styles";
import CustomDatePicker from "./CustomDatePicker";

const LineChart = ({ dataKey, eqFunc, world }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [chartDescription, setchartDescription] = useState("");
  const { currentCountryId, [dataKey]: covidData } = useSelector(
    (state) => state.covid19Data,
    eqFunc
  );

  let title = world ? "World" : currentCountryId;
  const currentData = covidData[currentCountryId] || covidData;
  const length = Object.keys(currentData.covid19Data).length;
  const allDates = Object.keys(currentData.covid19Data);

  const [tempDates, setTempDates] = useState([...allDates.slice(length - 14)]);

  const { newConfirmed, newRecovered, newDeaths } = formatChartData(
    currentData.covid19Data,
    tempDates
  );
  const fadeValue = 0.6;

  const chartData = {
    labels: tempDates,
    datasets: [
      {
        label: "New Confirmed Cases",
        data: newConfirmed,
        fill: true,
        backgroundColor: fade(theme.palette.neutral.totalConfirmed, fadeValue),
        pointHitRadius: 10,
        options: {
          elements: {
            radius: 1,
          },
        },
      },
      {
        label: "New Recovered Cases",
        data: newRecovered,
        fill: true,
        backgroundColor: fade(theme.palette.neutral.totalRecovered, fadeValue),
        pointHitRadius: 10,
      },
      {
        label: "New Deceased Cases",
        data: newDeaths,
        fill: true,
        backgroundColor: theme.palette.neutral.totalDeaths,
        pointHitRadius: 10,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <Grid item xs={12} className={classes.chartmt}>
      <Grid container spacing={2} className={classes.chartControls}>
        <Grid item xs={12}>
          <Typography variant="h5">
            <span className={classes.chartLocation}>{title}</span>
            {": "}
            <span className={classes.chartDescription}>{chartDescription}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CustomDatePicker
            allDates={allDates}
            formatDate={formatDate}
            setTempDates={setTempDates}
            setchartDescription={setchartDescription}
            classes={classes}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.desktopChart}>
          <Line data={chartData} />
        </div>
        <div className={classes.mobileChart}>
          <Line data={chartData} options={options} />
        </div>
      </Grid>
    </Grid>
  );
};

export default LineChart;
