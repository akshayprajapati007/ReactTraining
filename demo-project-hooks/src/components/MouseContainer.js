import React, {useState, useEffect} from 'react'
import OnlyOnceRender from './OnlyOnceRender'

function MouseContainer() {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toogle Display</button>
            {display && <OnlyOnceRender />}
        </div>
    )
}

export default MouseContainer
