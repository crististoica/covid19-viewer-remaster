import { forwardRef, useState, useEffect } from "react";
import { Grid, TextField, InputAdornment, Button } from "@material-ui/core";
import { useSelector } from "react-redux";

import DateRangeIcon from "@material-ui/icons/DateRange";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import DatePicker from "react-datepicker";

import { reverseDate } from "components/helpers";

let chartDateStartIndex;
let chartDateEndIndex;

const CustomDatePicker = ({
  allDates,
  formatDate,
  setTempDates,
  setchartDescription,
  classes,
}) => {
  const [chartStartDate, setChartStartDate] = useState(
    allDates[allDates.length - 14]
  );
  const [chartEndDate, setChartEndDate] = useState(
    allDates[allDates.length - 1]
  );
  const [triggerRender, setTriggerRender] = useState(false);
  const { startDate, lastDate } = useSelector((state) => state.covid19Data);

  const handleChartDateRange = () => {
    // if startDate > endDate => switch them between
    if (chartDateStartIndex > chartDateEndIndex) {
      const temp = chartDateStartIndex;
      chartDateStartIndex = chartDateEndIndex;
      chartDateEndIndex = temp;
      setChartStartDate(allDates[chartDateStartIndex]);
      setChartEndDate(allDates[chartDateEndIndex]);
    }
    setTempDates([
      ...allDates.slice(chartDateStartIndex, chartDateEndIndex + 1),
    ]);
    setTriggerRender(!triggerRender);
  };

  const DateCustomInput = forwardRef(({ value, onClick, label }, ref) => (
    <TextField
      value={value}
      variant="outlined"
      label={label}
      ref={ref}
      onClick={onClick}
      size="small"
      InputProps={{
        readOnly: true,
        startAdornment: (
          <InputAdornment position="start">
            <DateRangeIcon />
          </InputAdornment>
        ),
      }}
    />
  ));

  const handleReset = () => {
    setTempDates([...allDates.slice(allDates.length - 14)]);
    setChartStartDate(allDates[allDates.length - 14]);
    setChartEndDate(allDates[allDates.length - 1]);
    setchartDescription(
      `${new Date(
        reverseDate(allDates[allDates.length - 14])
      ).toDateString()} - ${new Date(
        reverseDate(allDates[allDates.length - 1])
      ).toDateString()}`
    );
  };

  useEffect(() => {
    chartDateStartIndex = allDates.indexOf(
      formatDate(reverseDate(chartStartDate))
    );
    chartDateEndIndex = allDates.indexOf(formatDate(reverseDate(chartEndDate)));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setchartDescription(
      `${new Date(reverseDate(chartStartDate)).toDateString()} - ${new Date(
        reverseDate(chartEndDate)
      ).toDateString()}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerRender]);

  return (
    <Grid container spacing={2}>
      <Grid container item xs={12} justify="center" spacing={2}>
        <Grid item>
          <DatePicker
            className={classes.datePicker}
            selected={new Date(reverseDate(chartStartDate))}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
              chartDateStartIndex = allDates.indexOf(formatDate(date));
              setChartStartDate(allDates[chartDateStartIndex]);
            }}
            customInput={<DateCustomInput label="Start Date" />}
            minDate={new Date(reverseDate(startDate))}
            maxDate={new Date(reverseDate(lastDate))}
            showYearDropdown
          />
        </Grid>
        <Grid item>
          <DatePicker
            className={classes.datePicker}
            selected={new Date(reverseDate(chartEndDate))}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
              chartDateEndIndex = allDates.indexOf(formatDate(date));
              setChartEndDate(allDates[chartDateEndIndex]);
            }}
            customInput={<DateCustomInput label="End Date" />}
            minDate={new Date(reverseDate(startDate))}
            maxDate={new Date(reverseDate(lastDate))}
            showYearDropdown
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} justify="center" spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DateRangeIcon />}
            onClick={handleChartDateRange}
          >
            Show
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<RotateLeftIcon />}
            onClick={handleReset}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomDatePicker;
