import React from 'react'

function Fragment() {
    return (
        /* for returning react allow only one element as a parent elemet
        so for if we not require element in html(ex.,div) than fragment is use */
        <>
            <h1>Fragment Demo</h1>
            <p>here is a fragment demo</p>
        </>

        /* for passing a key attribute to fragment it writeen like
        <React.Fragment>
        {
            items.map( item => ()                 //items is a array     
                <React.Fragment key={item.id}>    //only key attribute is use with fragment
                    <h1>Title</h1>
                    <p>{item}</p>
                </React.Fragment>))
        }     
        </React.Fragment>
        */
    )
}

export default Fragment
