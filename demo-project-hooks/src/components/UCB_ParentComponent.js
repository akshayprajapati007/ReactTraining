import React, { useState, useCallback } from 'react'
import UCB_Count from './UCB_Count'
import UCB_Button from './UCB_Button'
import UCB_Title from './UCB_Title'

function UCB_ParentComponent() {
	const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)

	// UCB function take first argument as state/prop changing function 
	//and second argument as a dependency array
	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])

	return (
		<div>
			<UCB_Title />
			<UCB_Count text="Age" count={age} />
			<UCB_Button handleClick={incrementAge}>Increment Age</UCB_Button>
			<UCB_Count text="Salary" count={salary} />
			<UCB_Button handleClick={incrementSalary}>Increment Salary</UCB_Button>
		</div>
	)
}

export default UCB_ParentComponent