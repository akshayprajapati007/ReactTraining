import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count => count + 1) // 2nd way -> count + 1
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, []) // for 2nd way -> [count]

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter