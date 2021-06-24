import { useState, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { IconButton, Tooltip } from "@material-ui/core";

import { formatDate } from "components/helpers";

const reverseDate = (date) => {
  const info = date.split("/");
  return info[2] + "-" + info[1] + "-" + info[0];
};

const Actions = ({ dispatchDateAction }) => {
  const { startDate, lastDate } = useSelector((state) => state.covid19Data);
  const [currentDate, setCurrentDate] = useState(
    new Date(reverseDate(lastDate))
  );
  const dispatch = useDispatch();

  const dateDisplayed = (timestamp) => {
    setCurrentDate(timestamp);
    dispatch(dispatchDateAction(formatDate(timestamp)));
  };

  const DateCustomInput = forwardRef(({ onClick }, ref) => (
    <Tooltip title="Change date">
      <IconButton onClick={onClick} ref={ref}>
        <DateRangeIcon />
      </IconButton>
    </Tooltip>
  ));

  return (
    <>
      <DatePicker
        selected={currentDate}
        onChange={(date) => dateDisplayed(date)}
        minDate={new Date(reverseDate(startDate))}
        maxDate={new Date(reverseDate(lastDate))}
        showYearDropdown
        customInput={<DateCustomInput />}
        popperModifiers={[
          {
            name: "offset",
          },
        ]}
      />
    </>
  );
};

export default Actions;
