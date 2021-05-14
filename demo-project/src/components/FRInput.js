import React from 'react'

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}></input>
        </div>
    )
})

export default FRInput
