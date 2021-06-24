import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  cards: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("xs")]: {
      marginTop: 0,
    },
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  iconWText: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    fontSize: 22,
    maxWidth: "max-content",
  },
  cardInfosContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  population: {
    color: theme.palette.neutral.population,
  },
  totalConfirmed: {
    color: theme.palette.neutral.totalConfirmed,
  },
  totalRecovered: {
    color: theme.palette.neutral.totalRecovered,
  },
  totalDeaths: {
    color: theme.palette.neutral.totalDeaths,
  },
}));

export default useStyles;
