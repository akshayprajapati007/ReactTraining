import React, {useState, useEffect} from 'react'

function HookCounter5() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    //as often as render method execute after that this method execute
    useEffect(() => {
        console.log('hello')
        document.title = `You clicked ${count} times`
    }, [count]) //useeffect take second argument as a array and in which we can define state and 
                //when anyone state will change at that time only this method again execute
    
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounter5
