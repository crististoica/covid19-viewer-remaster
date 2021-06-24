import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, Paper, Container, Divider } from "@material-ui/core";

import Navbar from "./components/Navbar";
import SelectCountry from "./components/SelectCountry";
import Cards from "./components/Cards";
import Graphs from "./components/Graphs";
import Tables from "./components/Tables";
import Credits from "./components/Credits";
import Loading from "./components/Loading";
import { getAllData } from "redux/actions/covid19Data";

const App = () => {
  const darkModePreference = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(
    darkModePreference ? darkModePreference === "true" : false
  );
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => state.covid19Data,
    (prev, curr) => prev.isLoading === curr.isLoading
  );

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
          primary: {
            light: "#757ce8",
            main: !darkMode ? "#003F91" : "#7F87C7",
            dark: "#5B6057",
            contrastText: "#ffffff",
          },
          secondary: {
            light: "#ff7961",
            main: "#3DA35D",
            contrastText: "#ffffff",
          },
          neutral: {
            population: "#36827F",
            totalConfirmed: "#DF2935",
            totalRecovered: "#05B384",
            totalDeaths: "#827081",
          },
          contrastThreshold: 3,
          tonalOffset: 0.2,
        },
      }),
    [darkMode]
  );

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper className="main" square>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Container maxWidth="lg">
          <SelectCountry />

          <Cards />
          <Divider />

          <Graphs />
          <Divider />

          <Tables />
          <Credits />
        </Container>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
