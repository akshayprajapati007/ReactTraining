import React from 'react'

// display content using props
const Props = (props) => {
   return (<div>
    <h1>Hello {props.name} {props.nickName}</h1>
    {props.children} {/* accessing children using props */}
</div>) 
}

/* destructing props
 1) const Props = {name, nickName} => {....}
 2) const Props = (props) => {
    const {name, nickName} = props
    ...
 }
*/
export default Props