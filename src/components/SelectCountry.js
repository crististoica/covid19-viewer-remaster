import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Paper,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles";
import { setCurrentCountry } from "redux/actions/covid19Data";

const SelectCountry = () => {
  const classes = useStyles();
  const { ids, currentCountryId } = useSelector(
    (state) => state.covid19Data,
    (prev, curr) => prev.currentCountryId === curr.currentCountryId
  );
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setCurrentCountry(e.target.value));
  };

  return (
    <Grid container spacing={2} justify="center">
      <Grid item lg={5} md={6} sm={9} xs={12}>
        <Paper className={classes.selectCountryPaper}>
          <FormControl className={classes.formControl}>
            <InputLabel id="country-select-label" color="primary">
              Select Country
            </InputLabel>
            <Select
              labelId="country-select-label"
              id="country-select"
              value={currentCountryId}
              onChange={handleChange}
            >
              {ids.map((id) => {
                return (
                  <MenuItem key={id} value={id} className={classes.menuItem}>
                    {id}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SelectCountry;
