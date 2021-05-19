import React from 'react'

function UCB_Title() {
  console.log('Rendering Title')
  return (
    <h2>
      useCallback Hook
    </h2>
  )
}

export default React.memo(UCB_Title)  // using memo it is only call new function when props or state change