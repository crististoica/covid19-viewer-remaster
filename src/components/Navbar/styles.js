import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      flexDirection: "column",
      gap: 0,
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "66.6%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "53.3%",
    },
  },
  desktopDivider: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  mobileDivider: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      height: 2,
      borderRadius: "50%",
      backgroundColor: theme.palette.primary.main,
      display: "block",
    },
  },
  appBarControls: {
    display: "flex",
  },
  iconWText: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main,
  },
  iconWTextGap1: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main,
    gap: theme.spacing(1),
  },
  helpContent: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    "& > div": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(1),
      fontSize: 19,
    },
  },
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
