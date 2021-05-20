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

function CountryDetails({capital, population, latlng, flag, get_weather}) {

    const classes = useStyles();

    return (
        <div className='country-table'>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Capital</StyledTableCell>
                            <StyledTableCell align="center">Population</StyledTableCell>
                            <StyledTableCell align="center">LatLng</StyledTableCell>
                            <StyledTableCell align="center">Flag</StyledTableCell>
                            <StyledTableCell align="center">Weather Info</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {capital ?
                        <StyledTableRow key={capital}>
                            <StyledTableCell component="th" scope="row" align="center">{capital}</StyledTableCell>
                            <StyledTableCell align="center">{population}</StyledTableCell>
                            <StyledTableCell align="center">{latlng}</StyledTableCell>
                            <StyledTableCell align="center"><img src={flag} alt='flag' height='35px' width='55px'></img></StyledTableCell>
                            <StyledTableCell align="center"><button type='button' onClick={() => get_weather(capital)}>Capital Weather</button></StyledTableCell>
                        </StyledTableRow> : null}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CountryDetails