import { useEffect, forwardRef } from "react";
import { TextField, InputAdornment, Button, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";

import DateRangeIcon from "@material-ui/icons/DateRange";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

import { reverseDate, formatDate } from "components/helpers";

const CustomDatePicker = ({ classes, setTableDate, tableDate }) => {
  const { startDate, lastDate } = useSelector(
    (state) => state.covid19Data,
    () => true
  );

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

  useEffect(() => {
    setTableDate(lastDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid item xs={12}>
      <div className={classes.fContainer}>
        <div>
          <DatePicker
            selected={tableDate ? new Date(reverseDate(tableDate)) : ""}
            dateFormat="dd/MM/yyyy"
            customInput={<DateCustomInput label="Select Date" />}
            minDate={new Date(reverseDate(startDate))}
            maxDate={new Date(reverseDate(lastDate))}
            showYearDropdown
            onChange={(date) => setTableDate(formatDate(date))}
          />
        </div>
        <Button
          variant="contained"
          startIcon={<RotateLeftIcon />}
          color="secondary"
          onClick={() => setTableDate(lastDate)}
        >
          Reset
        </Button>
      </div>
    </Grid>
  );
};

export default CustomDatePicker;
