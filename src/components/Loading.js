import { Paper } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import useStyles from "./styles";

const Loading = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.loading} square>
      <CircularProgress color="primary" />
    </Paper>
  );
};

export default Loading;
