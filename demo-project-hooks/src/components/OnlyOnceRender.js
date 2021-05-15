import React, {useState, useEffect} from 'react'

function OnlyOnceRender() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('UseEffect Called')
        window.addEventListener('mousemove', logMousePosition)

        // returning function remove subscription when component is unmount
        return () => {
            console.log('Unmountong code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, []) //here empty error means it only one time render

    return (
        <div>
            X - {x} Y - {y}
        </div>
    )
}

export default OnlyOnceRender
