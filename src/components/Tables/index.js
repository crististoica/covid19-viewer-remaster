import { useState } from "react";
import { Typography, Grid, useTheme } from "@material-ui/core";
import useStyles from "./styles";

import CustomDatePicker from "./CustomDatePicker";
import TableComponent from "./TableComponent";

import { reverseDate } from "components/helpers";

const Tables = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [tableDate, setTableDate] = useState("");

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      className={classes.tablesContainer}
    >
      <Grid item xs={12}>
        <Typography variant="h5">
          <span className={classes.title}>Highest Growth on: </span>{" "}
          <span className={classes.date}>
            {new Date(reverseDate(tableDate)).toDateString()}
          </span>
        </Typography>
      </Grid>
      <CustomDatePicker
        classes={classes}
        setTableDate={setTableDate}
        tableDate={tableDate}
      />

      <TableComponent
        classes={classes}
        colName="New Confirmed"
        compareKey="newConfirmed"
        color={theme.palette.neutral.totalConfirmed}
        title="Confirmed Cases"
        date={tableDate}
      />
      <TableComponent
        classes={classes}
        colName="New Recovered"
        compareKey="newRecovered"
        color={theme.palette.neutral.totalRecovered}
        title="Recovered Cases"
        date={tableDate}
      />
      <TableComponent
        classes={classes}
        colName="New Deceased"
        compareKey="newDeaths"
        color={theme.palette.neutral.totalDeaths}
        title="Deceased Cases"
        date={tableDate}
      />
    </Grid>
  );
};

export default Tables;
