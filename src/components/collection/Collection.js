import React, { useState } from 'react'
import "../collection/Collection.css";
const Collection = (props) => {

    const [count, setCount] = useState(0);
    let btnClass = "btn btn-primary disabled";

    const click = (e) => {
        e.preventDefault();
        setCount(count + 1);
        console.log(typeof count);
        if (count < 5) {
            btnClass = "btn btn-primary" + "disabled";
        }
        const idToAdd = e.target.attributes.getNamedItem("data-tag").value;
        props.addToMyCollection(idToAdd);
    }
    return (
        <div className="container-fluid rounded-0">
            <div className="row">
                <div className="col-4">
                    <div className="card" style={{ width: "30rem" }}>
                        <div className="card-header">
                            Results for {props.movieName}:
                  </div>
                        <ol className="list-group list-group-flush">
                            {props.arrMovie.map((element, index) => (
                                <li className="list-group-item" key={index} id={index}>{element.Title + " " + "(" + element.Year + ")"}
                                    <button className={btnClass} id="favBtn" data-tag={index} onClick={click}>Nominate</button>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="col-4">
                </div>
                <div className="col-4"></div>
            </div>
        </div >
    )
}

export default Collection
