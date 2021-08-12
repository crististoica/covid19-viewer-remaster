import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Divider,
  Typography,
} from "@material-ui/core";

import { IoIosPeople } from "react-icons/io";
import { MdTurnedIn } from "react-icons/md";
import { RiSkull2Fill } from "react-icons/ri";

import Info from "./Info";
import Actions from "./Actions";

import useStyles from "../styles";

const reverseDate = (date) => {
  const info = date.split("/");
  return info[2] + "-" + info[1] + "-" + info[0];
};

const InfoCard = ({
  img,
  title,
  pop,
  date,
  totalConfirmedCases,
  totalDeathsCases,
  newConfirmedCases,
  newDeathsCases,
  dispatchDateAction,
}) => {
  const classes = useStyles();
  return (
    <Grid item lg={5} md={6} sm={9} xs={12}>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar src={img} alt="Romania" />}
          title={title}
          subheader={new Date(reverseDate(date)).toDateString()}
          action={<Actions dispatchDateAction={dispatchDateAction} />}
        />
        <Divider variant="middle" />
        <CardContent className={classes.content}>
          <Grid container justify="center">
            <Info
              text={pop}
              icon={IoIosPeople}
              title="Population (approximate)"
              cssClass="population"
            />
          </Grid>
          <Grid container spacing={2} justify="space-evenly">
            <Grid item sm={6} xs={12} className={classes.cardInfosContainer}>
              <Typography variant="body1">Total</Typography>
              <Divider variant="middle" />
              <Info
                text={totalConfirmedCases}
                icon={MdTurnedIn}
                title="Total Confirmed Cases"
                cssClass="totalConfirmed"
              />
              <Info
                text={totalDeathsCases}
                icon={RiSkull2Fill}
                title="Total Deceased Cases"
                cssClass="totalDeaths"
              />
            </Grid>
            <Grid item sm={6} xs={12} className={classes.cardInfosContainer}>
              <Typography variant="body1">New</Typography>
              <Divider variant="middle" />
              <Info
                text={newConfirmedCases}
                icon={MdTurnedIn}
                title="New Confirmed Cases"
                cssClass="totalConfirmed"
              />
              <Info
                text={newDeathsCases}
                icon={RiSkull2Fill}
                title="New Deceased Cases"
                cssClass="totalDeaths"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default InfoCard;
