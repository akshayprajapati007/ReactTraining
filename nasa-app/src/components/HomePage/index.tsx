import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { makeStyles } from '@mui/styles'
import { FindRandomId, FindAsteroidDetails } from '../../services/nasa-services'
import AsteroidDialog from '../AsteroidDialog'

export interface IAsteroidDetails {
	name: string
	nasaJplUrl: string
	isPotentiallyHazardous: boolean
}

const useStyles = makeStyles({
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		border: '2px solid grey',
		borderRadius: '0.5em',
		padding: '0.8em',
		marginTop: '2em',
		width: '20em',
		height: '8em'
	},
	heading: {
		marginTop: '0'
	},
	buttonContainer: {
		marginTop: '0.5em',
		display: 'flex',
		justifyContent: 'space-between',
	},
	loader: {
		position: 'fixed',
		left: '50%',
		top: '30%',
		transform: 'translateX(-50%)'
	}
})

const HomePage = () => {
	const classes = useStyles()
	const [loader, setLoader] =  useState<boolean>(false)
	const [asteroidId, setAsteroidId] = useState<string>('')
	const [dialog, setDialog] = useState<boolean>(false)
	const [asteroidDetails, setAsteroidDetails] = useState<IAsteroidDetails | null>(null)

	const handleSubmit = async (id = asteroidId) => {
		setLoader(true)
		const response = await FindAsteroidDetails(id)
		if(response) {
			const asteroidData = response?.data
			setAsteroidDetails({
				name: asteroidData?.name,
				nasaJplUrl: asteroidData?.nasa_jpl_url,
				isPotentiallyHazardous: asteroidData?.is_potentially_hazardous_asteroid
			})
			setDialog(true)
			setLoader(false)
		} else {
			setLoader(false)
			alert('Some error occured!')
		}
	}

	const handleRandomId = async () => {
		setLoader(true)
		const response = await FindRandomId()
		if (response) {
			const data = response?.data?.near_earth_objects
			const dataLength = data?.length
			const randomIndex = Math.floor(Math.random() * dataLength)

			const randomId = data[randomIndex]?.id
			setAsteroidId(randomId.toString())
			handleSubmit(randomId)
		} else {
			setLoader(false)
			alert('Some error occured!')
		}
	}

	return(
		<div className={classes.mainContainer}>
			{loader && <CircularProgress className={classes.loader}/>}
			<h3 className={classes.heading}>
				Nasa Asteroid
			</h3>
			<div>
				<TextField
					size="small"
					variant="outlined"
					placeholder="Enter asteroid id"
					autoComplete="off"
					value={asteroidId}
					onChange={(event) => setAsteroidId(event?.target?.value)} />
				<div className={classes.buttonContainer}>
					<Button
						size="small"
						variant="contained"
						disabled={!asteroidId}
						onClick={() => handleSubmit()}>
						Submit
					</Button>
					<Button
						size="small"
						variant="contained"
						onClick={handleRandomId}>
						Random Asteroid
					</Button>
				</div>
			</div>
			<AsteroidDialog
				open={dialog}
				handleClose={setDialog}
				dialogData={asteroidDetails}/>
		</div>
	)
}

export default HomePage