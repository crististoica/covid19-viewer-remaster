import { Grow, Grid, Paper, Typography, Divider } from "@material-ui/core";

import HelpIcon from "@material-ui/icons/Help";
import ErrorIcon from "@material-ui/icons/Error";

import ToggleDarkMode from "./ToggleDarkMode";
import Help from "./Help";
import HelpContent from "./HelpContent";
import WarningContent from "./WarningContent";

import useStyles from "./styles";

const Navbar = ({ setDarkMode, darkMode }) => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid container spacing={0} justify="center">
        <Grid item className={classes.appBar} component={Paper} elevation={1}>
          <Typography variant="h5" color="primary">
            Covid-19 Data Visualization
          </Typography>
          <Divider orientation="vertical" className={classes.desktopDivider} />
          <div className={classes.mobileDivider}></div>
          <div className={classes.appBarControls}>
            <ToggleDarkMode
              setDarkMode={setDarkMode}
              darkMode={darkMode}
              classes={classes}
            />
            <Help
              classes={classes}
              icon={HelpIcon}
              title={
                <>
                  <HelpIcon /> Help
                </>
              }
              content={HelpContent}
              tooltipTitle="Help"
            />
            <Help
              classes={classes}
              icon={ErrorIcon}
              title={
                <>
                  <ErrorIcon /> Disclaimer
                </>
              }
              content={WarningContent}
              tooltipTitle="Disclaimer"
            />
          </div>
        </Grid>
      </Grid>
    </Grow>
  );
};

export default Navbar;
