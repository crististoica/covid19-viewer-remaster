import { Grid } from "@material-ui/core";

import useStyles from "./styles";
import LineChart from "./LineChart";

const Graphs = () => {
  const classes = useStyles();
  const countryEqFunc = (prev, curr) =>
    prev.currentCountryId === curr.currentCountryId;

  const worldEqFunc = () => true;

  return (
    <Grid container spacing={4} className={classes.graphsContainer}>
      <LineChart dataKey="data" eqFunc={countryEqFunc} chartDateKey="country" />
      <LineChart
        dataKey="world"
        eqFunc={worldEqFunc}
        chartDateKey="world"
        world
      />
    </Grid>
  );
};

export default Graphs;
