import React from 'react'
import Quiz from 'react-quiz-component'
import { quiz } from '../../utility/constants'
import {useLocation} from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import CustomResultPage from '../CustomResultPage'

const useStyles = makeStyles({
	mainContainer: {
		border: '2px solid grey',
		borderRadius: '0.5em',
		marginTop: '2em'
	},
	questionBox: {
		border: '1.5px solid grey',
		borderRadius: '0.5em',
		padding: '0.5em',
		marginBottom: '0.3em'
	},
	optionsBox: {
		marginLeft: '0.8em'
	},
	correct: {
		color: '#ffffff',
		backgroundColor: 'green',
		borderRadius: '0.5em',
		padding: '1px 0 1px 3px'
	},
	inCorrect: {
		color: '#ffffff',
		backgroundColor: 'red',
		borderRadius: '0.5em',
		padding: '1px 0 1px 3px'
	}
})

const QuizPage = () => {
	const classes = useStyles()
	const { state } = useLocation()
	const quizLanguage = state?.quizLanguage

	return (
		<div className={classes.mainContainer}>
			<Quiz
				quiz={quizLanguage === 'english' ? quiz : quiz}
				showDefaultResult={false}
				customResultPage={(obj) => CustomResultPage(obj, classes)}/>
		</div>
	)
}

export default QuizPage