import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(2),
    },
  },
  table: {
    minWidth: 100,
  },
  bottomPart: {
    "& > *": {
      float: "right",
    },
  },
}));

const StyledTableCell = withStyles({
  head: {
    backgroundColor: "#f5f5f5",
    color: "#af1321",
    fontSize: 14,
    fontWeight: "600",
  },
  body: {
    fontSize: 14,
  },
})(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function DashboardTable(props) {
  let num = 0;

  const { cartData } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TableContainer component={Paper} className="data-table">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">PRODUCT NAME</StyledTableCell>
              <StyledTableCell align="center">QTY</StyledTableCell>
              <StyledTableCell align="center">PRICE</StyledTableCell>
              <StyledTableCell align="center">GST(%)</StyledTableCell>
              <StyledTableCell align="center">DISCOUNT(%)</StyledTableCell>
              <StyledTableCell align="center">OPTIONS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartData
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((dt) => (
                <StyledTableRow key={num++}>
                  <StyledTableCell align="center">
                    {dt.productName}
                  </StyledTableCell>
                  <StyledTableCell align="center">{dt.qty}</StyledTableCell>
                  <StyledTableCell align="center">{dt.price}</StyledTableCell>
                  <StyledTableCell align="center">{dt.gst}</StyledTableCell>
                  <StyledTableCell align="center">
                    {dt.discount}
                  </StyledTableCell>
                  <StyledTableCell align="center">Nothing</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <div className={classes.bottomPart}>
          <span>TOTAL : 0</span>
          <br />
          <Button variant="contained" size="small">
            Checkout
          </Button>
        </div>
        {/* <TablePagination
          component="div"
          count={5}
          page={page}
          onChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /> */}
      </TableContainer>
    </div>
  );
}

export default DashboardTable;
