import React from 'react'
import ListrenderingJSX from './ListrenderingJSX'

//Rendering list where JSX is in other file
function ListRendering() {

    const names = ['Ak','Aj','Ak'] 
    const persons = [{
            id: 1,
            name: 'Ak',
            skill: 'React'
        },
        {
            id: 2,
            name:'Aj',
            skill:'Angular'
        }
    ]

    //for passing the list it have a unique keyvalue so choose the unique key and assign to "key" attribute (here id is unique in list and also name and skill)
    //in child component(ListRenderingJSX), this key attribute not accesible for display
    const personList = persons.map(person => <ListrenderingJSX key={person.id} person={person} />) 

    //in names list there has no unique value so for this list we use index as a key attribute but it make big problem
    //so use key as a index when following all 3 reason satisfy
    //1)item in list don't have unique id
    //2)list is a static and will not change
    //3)list will never be re-ordered or filtered
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>) 

    return (
        <div>
            {personList}
            {nameList}
        </div>
    )
}

export default ListRendering