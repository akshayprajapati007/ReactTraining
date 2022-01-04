import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'
import { useLocation } from 'react-router-dom'
import CapitalWeatherDialog from '../CapitalWeatherDialog'

const useStyles = makeStyles({
	mainContainer: {
		width: '80%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		borderRadius: '0.5em',
		marginTop: '3em',
		marginBottom: '3em'
	},
	heading: {
		color: '#1976d2',
		fontSize: '1.3em',
		fontWeight: '700'
	},
	innerContainer: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		justifyContent: 'center',
		width: '90%',
		padding: '1.5em'
	},
	detailContainer: {
		height: '10em',
		border: '2px solid grey',
		borderRadius: '0.5em',
		padding:'1em',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		margin: '1em',
		minWidth: '12em'
	}
})

export interface ICapitalWeatherDialog {
	temperature: number
	weatherIcons: string[]
	windSpeed: number
	precip: number
}

const CountryDetails = () => {
	const classes = useStyles()
	const { state } = useLocation()
	const [weatherDialog, setWeatherDialog] = useState(false)
	const [dialogData, setDialogData] = useState(null)

	const API_KEY = process.env.REACT_APP_API_KEY

	const handleCapitalWeather = async (capital: string) => {
		await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`)
			.then(res => res.json())
			.then(data => {				
				if(data?.current) {
					const currentWeather = {
						temperature: data?.current?.temperature,
						weatherIcons: data?.current?.weather_icons,
						windSpeed: data?.current?.wind_speed,
						precip: data?.current?.precip,
					}
					setDialogData(currentWeather)
					setWeatherDialog(true)
				} else {
					alert('Some error occured!')
				}
			})
	}

	return (
			<div className={classes.mainContainer} >
				<h3 className={classes.heading} >Country Results</h3>
				<div className={classes.innerContainer} >
					{state?.map(record => {
						return (
							<div key={record?.capital} className={classes.detailContainer} >
								<div>
								<img
									src={record?.flags}
									alt="flag"
									height="50"
									width="100" />
								</div>
								<div>Capital : {record?.capital}</div>
								<div>Population: {record?.population}</div>
								<div>LatLng: {record?.latlng}</div>
								<div>
									<Button 
										variant="contained"
										onClick={() => handleCapitalWeather(record?.capital)}>
										Capital Weather
									</Button>
								</div>
							</div>
						)
					})}
				</div>
				<CapitalWeatherDialog 
					open={weatherDialog}
					handleClose={setWeatherDialog}
					dialogData={dialogData}
				/>
			</div>
		)
}

export default CountryDetails