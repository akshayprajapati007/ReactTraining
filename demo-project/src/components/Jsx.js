import React from 'react'

// return using JSX
const Jsx = () => {
    return React.createElement('div',
    {id: 'id1', className: 'class1'},
    React.createElement('h1', null , 'Hello using JSx')
    )
}

export default Jsx