import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		border: '2px solid grey',
		width: '22em',
		borderRadius: '0.5em',
		padding: '0.8em',
		marginTop: '2em'

	},
	heading: {
		marginTop: '0'
	}
})

const HomePage = () => {
	const history = useHistory()
	const classes = useStyles()
	const [name, setName] = useState<string>('')
	const [gender, setGender] = useState<string>('male')
	const [language, setLanguage] = useState<string>('english')

	const handleSubmit =() => {
		if(!name) {
			alert('Please enter name!')
		} else {
			history.push({ pathname: '/quiz', state: {
				name: name,
				gender: gender,
				quizLanguage: language
			} })
		}
	}

	return (
		<div className={classes.mainContainer}>
			<h3 className={classes.heading}>
				Fill Details
			</h3>
			<div>
				<div>
					<TextField
						variant="outlined"
						size="small"
						placeholder="Enter name"
						autoComplete="off"
						value={name}
						onChange={event => setName(event?.target?.value)}/>
				</div>
				<div>
					<FormLabel component="legend">Gender</FormLabel>
				  <RadioGroup
				  	row
				    aria-label="gender"
				    value={gender}
				    name="gender-group"
				    onChange={event => setGender(event?.target?.value)}
				  >
				    <FormControlLabel value="male" control={<Radio />} label="Male" />
				    <FormControlLabel value="female" control={<Radio />} label="Female" />
				    <FormControlLabel value="other" control={<Radio />} label="Other" />
				  </RadioGroup>
				</div>
				<div>
					<FormLabel component="legend">Language</FormLabel>
				  <RadioGroup
				  	row
				    aria-label="language"
				    value={language}
				    name="language-group"
				    onChange={event => setLanguage(event?.target?.value)}
				  >
				    <FormControlLabel value="english" control={<Radio />} label="English" />
				    <FormControlLabel value="hindi" control={<Radio />} label="Hindi" />
				  </RadioGroup>
				</div>
				<Button
					variant="contained"
					onClick={handleSubmit}
					size="small">
					Submit
				</Button>
			</div>
		</div>
	)
}

export default HomePage