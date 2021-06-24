import {
  Tooltip,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import CountUp from "react-countup";

const compare = (a, b, compareKey) => {
  if (a.data[compareKey] < b.data[compareKey]) {
    return 1;
  }
  if (a.data[compareKey] > b.data[compareKey]) {
    return -1;
  }
  return 0;
};

const TableComponent = ({
  classes,
  colName,
  compareKey,
  color,
  title,
  date,
}) => {
  const { data } = useSelector(
    (state) => state.covid19Data,
    () => true
  );
  const tableData = date
    ? Object.keys(data)
        .map((country) => ({
          country,
          flag: data[country].flag,
          data: data[country].covid19Data[date],
        }))
        .sort((a, b) => compare(a, b, compareKey))
        .slice(0, 10)
    : [];

  return (
    <Grid item lg={4} md={6} sm={12}>
      <Grid item container xs={12} justify="center" style={{ color: color }}>
        <Typography variant="h6" className={classes.tableTitle}>
          {title}
        </Typography>
      </Grid>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" className={classes.table}>
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell align="left" style={{ color: color }}>
                Country
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                {colName}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((entry) => {
              return (
                <TableRow key={entry.country} className={classes.tableRow}>
                  <TableCell align="center">
                    <div className={classes.fContainer}>
                      <img
                        src={entry.flag}
                        alt="Country Flag"
                        loading="lazy"
                        className={classes.flag}
                      />
                      <div className={classes.ellipseContainer}>
                        <Tooltip title={entry.country}>
                          <Typography variant="body2" noWrap>
                            {entry.country}
                          </Typography>
                        </Tooltip>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <CountUp
                      start={0}
                      end={entry.data[compareKey]}
                      duration={2}
                      separator=","
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default TableComponent;
