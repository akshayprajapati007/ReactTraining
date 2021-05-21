import React from 'react'
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    table: {
        minWidth: 100,
      },
  }));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

function TableData(alldata) {

    const classes = useStyles();
    console.log(alldata.alldata.hits)
    const data1 = alldata.alldata.hits.map(c => 'hi')

    return (
        <div className='data-table'>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Title</StyledTableCell>
                            <StyledTableCell align="center">URL</StyledTableCell>
                            <StyledTableCell align="center">Created Date</StyledTableCell>
                            <StyledTableCell align="center">Author</StyledTableCell>
                        </TableRow>
                    </TableHead> 
                    <TableBody>
                        {alldata.alldata.hits.map(dt => 
                            <StyledTableRow>
                            <StyledTableCell component="th" scope="row" align="center">{dt.title}</StyledTableCell>
                            <StyledTableCell align="center">{dt.url}</StyledTableCell>
                            <StyledTableCell align="center">{dt.created_at}</StyledTableCell>
                            <StyledTableCell align="center">{dt.author}</StyledTableCell>
                        </StyledTableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableData