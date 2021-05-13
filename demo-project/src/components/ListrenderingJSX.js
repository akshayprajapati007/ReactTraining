import React from 'react'

function ListrenderingJSX({person}) {
    return (
        <div>
            <h2>{`I am ${person.name} and my skill is ${person.skill}`}</h2>
        </div>
    )
}
export default ListrenderingJSX
