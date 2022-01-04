import React from 'react'
import { Chart } from "react-google-charts";

const CustomResultPage = (obj, classes) => {

	const { questions, userInput, numberOfCorrectAnswers, numberOfIncorrectAnswers } = obj

	const chartData = [["AnswerType", "NumberOfAnswers"],
						['Correct', numberOfCorrectAnswers],
						['Incorrect', numberOfIncorrectAnswers]]

	const areEqual = (array1, array2) => {
	  return array1.every(item => array2.includes(item))
	}

	const handleAnswerType = (qDetails) => {
		const correctAnswers = qDetails?.correctAnswer
		const selectedAnswers = userInput[qDetails?.questionIndex - 1]
		return Array.isArray(correctAnswers)
				? areEqual(correctAnswers, selectedAnswers)
				: selectedAnswers.toString() === correctAnswers.toString()
	}
	
	return (
		<div>
			<Chart
		      chartType="PieChart"
		      data={chartData}
		      loading={<div>loading..</div>}
		      width={"100%"}
		      height={"150px"}
		    />
	    	<div>
	    		{questions?.map(qDetails => {
	    			return (
	    				<div key={qDetails?.questionIndex} className={classes?.questionBox}>
	    					{`${qDetails?.questionIndex}. ${qDetails?.question}`}
	    					<div>
	    						{qDetails?.answers?.map((option, index) => {
	    							return (
	    								<div key={index} className={classes?.optionsBox}>
	    									{`${index+1}. ${option}`}
	    								</div>
	    							)
	    						})}
	    					</div>
	    					<>
		    					{handleAnswerType(qDetails)
	    								? <div className={classes?.correct}>Correct</div>
	    								: <div className={classes?.inCorrect}>Incorrect</div>}
	    					</>
	    					<div>
	    						<span>
	    						{`Answers(s) : 
	    						${Array.isArray(qDetails.correctAnswer)
	    							? qDetails.correctAnswer.join(',')
	    							: qDetails?.correctAnswer}`}
	    						</span>
	    						{' | '}
	    						<span>
	    						{`Selected Answer(s) :
	    						${Array.isArray(userInput[qDetails?.questionIndex - 1])
	    							? userInput[qDetails?.questionIndex - 1].join(',')
	    							: userInput[qDetails?.questionIndex - 1]}`}
	    						</span>
	    					</div>
	    				</div>
	    			)
	    		})}
	    	</div>
		</div>
	)
}

export default CustomResultPage