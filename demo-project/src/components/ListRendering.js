import React from 'react'

function ListRendering() {
    const names = ['ak', 'aj', 'as']
    const nameList = names.map(name => <h2>{name}</h2>)
    return (
        <div>{nameList}</div>
    )
}

export default ListRendering