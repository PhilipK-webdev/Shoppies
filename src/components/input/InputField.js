import React from 'react'
import "../input/InputField.css"
const InputField = () => {
    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search Movie" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    )
}

export default InputField
