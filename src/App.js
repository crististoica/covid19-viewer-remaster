import { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, Typography, Paper } from "@material-ui/core";

const App = () => {
  const darkModePreference = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(
    darkModePreference ? darkModePreference === "true" : false
  );

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        light: "#757ce8",
        main: "#448aff",
        dark: "#5B6057",
        contrastText: "#ffffff",
      },
      secondary: {
        light: "#ff7961",
        main: "#3DA35D",
        contrastText: "#ffffff",
      },
      grey: {
        800: "#ff4242",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper className="main" square>
        <Typography>Hello World</Typography>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
