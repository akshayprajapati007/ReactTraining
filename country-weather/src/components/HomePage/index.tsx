import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
	mainContainer: {
		height: '15em',
		width: '25em',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		borderRadius: '0.5em',
		marginTop: '3em'
	},
	heading: {
		color: '#1976d2',
		fontSize: '1.3em',
		fontWeight: '700'
	},
	innerContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		height: '6em',
		padding: '1em'
	}
})

interface ICountryDetails {
	capital: string
	population: number
	latlng: string
	flags: string
}

const HomePage = () => {
	const classes = useStyles()
	const history = useHistory()
	const [countryText, setCountryText] = useState('')

	const handleSubmit = async () => {
		await fetch(`https://restcountries.com/v3.1/name/${countryText}`)
			.then(res => res.json())
			.then(data => {
				if(data?.length > 0) {
					const totalData:ICountryDetails = []
					data?.map(record => {
						const countryDetails = {
							capital: record?.capital && record.capital[0],
							population: record?.population,
							latlng: record?.latlng.join(','),
							flags: record?.flags?.svg || record?.flags?.png
						}
						totalData.push(countryDetails)
					})
					history.push({ pathname: '/country-details', state: totalData })
				} else {
					alert('Some error occured!')
				}
			})
			.catch(err => console.log(err))
	}

	return (
		<div className={classes.mainContainer}>
			<h3 className={classes.heading} >Country</h3>
			<div className={classes.innerContainer} >
				<TextField
					variant="outlined" 
					size="small"
					placeholder="Enter country"
					value={countryText}
					autoComplete="off"
					onChange={(event) => setCountryText(event?.target?.value)}
				/>
				<Button
					variant="contained"
					disabled={!countryText}
					onClick={handleSubmit}
				>
						Submit
				</Button>
			</div>
		</div>
		)
}

export default HomePage