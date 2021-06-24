import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    gap: theme.spacing(2),
    margin: theme.spacing(1),
    width: "100%",
    height: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  flag: {
    width: 35,
    height: 25,
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  creditsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(2),
    marginTop: theme.spacing(6),
    padding: theme.spacing(4),
  },
  creditText: {
    width: 200,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(2),
    "&:hover": {
      opacity: 0.7,
    },
  },
  loading: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      fontSize: "40vmin",
    },
  },
  selectCountryPaper: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderBottom: `5px solid ${theme.palette.primary.main}`,
  },
}));

export default useStyles;
