import React from 'react'
import './Stylesheet.css'

function Stylesheet() {

    //for internal css object is use and note that the name of css property is in camelcase
    const inlineCss = {
        fontSize:'30px',
        color:'gray'
    }
    
    return (
        <div>
            <h2 className='stylesheet'>Css using external stylesheet</h2> {/* apply css using external stylesheet */}
            <h2 style={inlineCss}>Css using internal stylesheet</h2> {/* apply css using internal object */}
        </div>
    )
}

export default Stylesheet
