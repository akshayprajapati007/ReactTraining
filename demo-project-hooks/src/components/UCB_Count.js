import React from 'react'

function UCB_Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

export default React.memo(UCB_Count) // using memo it is only call new function when props or state change