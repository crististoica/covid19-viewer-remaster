import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import InfoCard from "./Card";
import useStyles from "./styles";

import {
  setCurrentCountryDate,
  setCurrentWorldDate,
} from "redux/actions/covid19Data";

const Cards = () => {
  const classes = useStyles();
  const {
    currentCountryId,
    currentCountryDate,
    currentWorldDate,
    data,
    world: worldData,
  } = useSelector((state) => state.covid19Data);
  const currentCountry = data[currentCountryId];

  return (
    <Grid container justify="center" spacing={2} className={classes.cards}>
      {/* COUNTRY */}

      <InfoCard
        img={currentCountry.flag}
        title={currentCountry.name}
        pop={currentCountry.population}
        date={currentCountry.covid19Data[currentCountryDate].date}
        totalConfirmedCases={
          currentCountry.covid19Data[currentCountryDate].confirmed
        }
        totalDeathsCases={currentCountry.covid19Data[currentCountryDate].deaths}
        newConfirmedCases={
          currentCountry.covid19Data[currentCountryDate].newConfirmed
        }
        newDeathsCases={
          currentCountry.covid19Data[currentCountryDate].newDeaths
        }
        dispatchDateAction={setCurrentCountryDate}
      />
      {/* WORLD */}
      <InfoCard
        img="world.png"
        title={worldData.name}
        pop={worldData.population}
        date={worldData.covid19Data[currentWorldDate].date}
        totalConfirmedCases={worldData.covid19Data[currentWorldDate].confirmed}
        totalDeathsCases={worldData.covid19Data[currentWorldDate].deaths}
        newConfirmedCases={worldData.covid19Data[currentWorldDate].newConfirmed}
        newDeathsCases={worldData.covid19Data[currentWorldDate].newDeaths}
        dispatchDateAction={setCurrentWorldDate}
      />
    </Grid>
  );
};

export default Cards;
