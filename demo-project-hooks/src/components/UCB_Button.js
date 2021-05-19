import React from 'react'

function UCB_Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default React.memo(UCB_Button) // using memo it is only call new function when props or state change