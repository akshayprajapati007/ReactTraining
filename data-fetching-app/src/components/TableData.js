import React, { useState } from 'react'
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          marginTop: theme.spacing(2),
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

    let num = 0  

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [orderDirection, setOrderDirection] = React.useState('asc');
    const [valueToOrderBy, setValueToOrderBy]= React.useState(0)
    const classes = useStyles();

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
        <div >
            <TableContainer component={Paper} className='data-table'>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">No.</StyledTableCell>
                            <StyledTableCell align="center">
                                <TableSortLabel 
                                  active={'title' === 'title'}
                                  direction='asc'
                                  //onClick={createSortHandler('title')}
                                >
                                  Title
                                </TableSortLabel>
                            </StyledTableCell>
                            <StyledTableCell align="center">URL</StyledTableCell>
                            <StyledTableCell align="center">Created Date</StyledTableCell>
                            <StyledTableCell align="center">Author</StyledTableCell>
                        </TableRow>
                    </TableHead> 
                    <TableBody>
                        {alldata.alldata.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(dt => 
                            <StyledTableRow key={num}>
                            <StyledTableCell align="center">{++num}</StyledTableCell>
                            <StyledTableCell align="center">{dt.title}</StyledTableCell>
                            <StyledTableCell align="center">{dt.url ? dt.url : 'Null'}</StyledTableCell>
                            <StyledTableCell align="center">{dt.created_at}</StyledTableCell>
                            <StyledTableCell align="center">{dt.author}</StyledTableCell>
                        </StyledTableRow>)}
                    </TableBody>
                </Table>        
                <TablePagination
                      component='div'
                      count={alldata.alldata.length}
                      page={page}
                      onChangePage={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />        
            </TableContainer>
        </div>
    )
}

export default TableData