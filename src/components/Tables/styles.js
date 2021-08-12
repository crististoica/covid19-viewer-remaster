import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tablesContainer: {
    marginTop: theme.spacing(2),
  },
  head: {
    backgroundColor: "black",
  },
  tableRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  fContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  flag: {
    width: 30,
    height: 20,
  },
  tableTitle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  datePicker: {
    width: 150,
  },
  ellipseContainer: {
    textAlign: "left",
    width: 250,
    overflow: "hidden",
    textOverflow: "ellipse",
    [theme.breakpoints.down("md")]: {
      width: 200,
    },
    [theme.breakpoints.down("sm")]: {
      width: 400,
    },
    [theme.breakpoints.down("xs")]: {
      width: 120,
    },
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  date: {
    color: theme.palette.grey[600],
    fontSize: 21,
  },
}));

export default useStyles;
