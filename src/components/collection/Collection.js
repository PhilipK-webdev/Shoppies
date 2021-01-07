import React from 'react'

const Collection = (props) => {

    return (
        <div>
            {props.arrMovie.map((element, index) => (
                <p key={index}>{element.Title}</p>
            ))}
        </div>
    )
}

export default Collection
