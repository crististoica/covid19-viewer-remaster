import { Typography, Paper } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import useStyles from "./styles";

const Credits = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.creditsContainer}>
      <a target="_blank" rel="noreferrer" href="http://restcountries.eu/">
        <div className={classes.creditText}>
          <Typography variant="body1">Data About Countries</Typography>
          <ExitToAppIcon />
        </div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/pomber/covid19"
      >
        <div className={classes.creditText}>
          <Typography variant="body1">Covid19 Data</Typography>
          <ExitToAppIcon />
        </div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/crististoica/covid19-data"
      >
        <div className={classes.creditText}>
          <Typography variant="body1">My Data</Typography>
          <ExitToAppIcon />
        </div>
      </a>
    </Paper>
  );
};

export default Credits;
