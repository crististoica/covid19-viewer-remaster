import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chartmt: {
    marginTop: theme.spacing(5),
  },
  chartLocation: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  chartControls: {
    padding: theme.spacing(2),
  },
  datePicker: {
    marginTop: theme.spacing(2),
  },
  chartDescription: {
    color: theme.palette.grey[600],
    fontSize: 21,
  },
  graphsContainer: {
    paddingBottom: theme.spacing(4),
  },
  desktopChart: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileChart: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      display: "block",
    },
  },
}));

export default useStyles;
