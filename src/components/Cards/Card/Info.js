import { Typography, Tooltip } from "@material-ui/core";
import CountUp from "react-countup";

import useStyles from "../styles";

const Info = ({ text, icon: Icon, title, cssClass }) => {
  const classes = useStyles();

  return (
    <Tooltip title={title} className={classes[cssClass]}>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.iconWText}
        style={{ textAlign: "center" }}
      >
        <Icon className={classes.icon} />
        <CountUp start={0} end={Number(text)} duration={2} separator="," />
      </Typography>
    </Tooltip>
  );
};

export default Info;
