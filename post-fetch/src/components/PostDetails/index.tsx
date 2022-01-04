import React from 'react'
import {useLocation} from 'react-router-dom'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
	mainContainer: {
		position:' fixed',
		left: '50%',
		border: '2px solid grey',
		borderRadius: '0.5em',
		padding: '0.4em',
		transform: 'translateX(-50%)',
		marginTop: '3em'
	},
	heading: {
		margin: '0',
		fontWeight: '600',
		fontSie: '1.2em'
	},
	innerContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '0.5em',
		'& > div': {
			border: '2px solid grey',
			borderRadius: '0.3em',
			padding: '0.2em',
			margin: '0.2em'
		}
	},
})

const PostDetails = () => {
	const classes = useStyles()
	const {state} = useLocation()
	return (
		<div className={classes.mainContainer}>
			<h3 className={classes.heading}>Post Details</h3>
			<div className={classes.innerContainer}>
				<div data-testid="title-tag">Title : {state?.title}</div>
				<div>URL: {state?.url}</div>
				<div>Created At: {state?.createdAt}</div>
				<div>Author: {state?.author}</div>
			</div>
		</div>
	)
}

export default PostDetails