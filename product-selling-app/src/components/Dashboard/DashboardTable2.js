import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TablePagination from "@material-ui/core/TablePagination";

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
  addMinusButton: {
    fontSize: "0.8em",
    width: "0.5vh",
    fontWeight: "bold",
    padding: "0",
  },
  addCartButton: {
    fontSize: "0.5rem",
    width: "15ch",
    backgroundColor: "#40a2d4",
  },
}));

const StyledTableCell = withStyles({
  head: {
    backgroundColor: "#f5f5f5",
    color: "#af1321",
    fontSize: 14,
    fontWeight: "600",
    maxWidth: 70,
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

function DashboardTable2(props) {
  const { productsData, addCartHandler } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [tempData, setTempData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setTempData([...productsData]);
  }, [productsData]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCountChange = (action, name) => {
    switch (action) {
      case "increment": {
        const tempindex = tempData.findIndex((x) => x.productName === name);
        const test = tempData[tempindex];
        test.qty++;
        tempData[tempindex] = test;

        setTempData([...tempData]);
        break;
      }
      case "decrement": {
        const tempindex2 = tempData.findIndex((x) => x.productName === name);
        const test2 = tempData[tempindex2];
        test2.qty--;
        tempData[tempindex2] = test2;

        setTempData([...tempData]);
        break;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <div>
      <TableContainer component={Paper} className="data-table">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">PRODUCT NAME</StyledTableCell>
              <StyledTableCell align="center">CATEGORY</StyledTableCell>
              <StyledTableCell align="center">QTY</StyledTableCell>
              <StyledTableCell align="center">PRICE</StyledTableCell>
              <StyledTableCell align="center">GST(%)</StyledTableCell>
              <StyledTableCell align="center">DISCOUNT(%)</StyledTableCell>
              <StyledTableCell align="center">ACTION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tempData
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((dt, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center">
                    {dt.productName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {dt.category}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      className={classes.addMinusButton}
                      variant="contained"
                      size="small"
                      color="default"
                      onClick={() =>
                        handleCountChange("decrement", dt.productName)
                      }
                      disabled={dt.qty === 0 ? true : false}
                    >
                      -
                    </Button>
                    {dt.qty}
                    <Button
                      className={classes.addMinusButton}
                      variant="contained"
                      size="small"
                      color="default"
                      onClick={() =>
                        handleCountChange("increment", dt.productName)
                      }
                    >
                      +
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">{dt.price}</StyledTableCell>
                  <StyledTableCell align="center">{dt.gst}</StyledTableCell>
                  <StyledTableCell align="center">
                    {dt.discount}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      className={classes.addCartButton}
                      variant="contained"
                      size="small"
                      color="primary"
                      onClick={() => addCartHandler(dt)}
                      disabled={dt.qty === 0 ? true : false}
                    >
                      Add To Cart
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={productsData ? productsData.length : 0}
          page={page}
          onChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}

export default DashboardTable2;
