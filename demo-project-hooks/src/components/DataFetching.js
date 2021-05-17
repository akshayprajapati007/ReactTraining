import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromBtnClick, setIdFromBtnClick] = useState(1)

    const clickHandler = () => {
        setIdFromBtnClick(id)
    }

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`) // for get ony one post-> .get('https://jsonplaceholder.typicode.com/posts/{id}')
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[idFromBtnClick])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
            <button type="button" onClick={clickHandler}>Fetch Data</button>
            <div>{post.title}</div>
            {/* for geting posts(morethan 1) below code is use */}
            {/* <ul>
                {
                    post.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
