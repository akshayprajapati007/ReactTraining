import React,{useContext} from 'react'
import {UserContext ,ChannelContext} from '../App'

function ComponentB() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {user} and {channel}
        </div>
    )
}

export default ComponentB
