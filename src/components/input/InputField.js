import React from 'react'
import "../input/InputField.css"
const InputField = (props) => {
    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search Movie" aria-label="Recipient's username" value={props.movieName} aria-describedby="button-addon2" onChange={props.addMovie} />
                <button className="btn" type="button" id="button-addon2" onClick={props.submit}>Button</button>
            </div>
        </div>
    )
}

export default InputField
