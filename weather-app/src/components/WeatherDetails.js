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

function WeatherDetails({temperature, weather_icons, wind_speed, precip}) {

    const classes = useStyles();

    return (
        <div className='weather-table'>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Temperature</StyledTableCell>
                            <StyledTableCell align="center">Weather Icons</StyledTableCell>
                            <StyledTableCell align="center">Wind Speed</StyledTableCell>
                            <StyledTableCell align="center">Precip</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row" align="center">{temperature}</StyledTableCell>
                            <StyledTableCell align="center"><img src={weather_icons} alt='weather' height='35px' width='35px'></img></StyledTableCell>
                            <StyledTableCell align="center">{wind_speed}</StyledTableCell>
                            <StyledTableCell align="center">{precip}</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default WeatherDetails
