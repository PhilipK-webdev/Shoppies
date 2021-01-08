import React from 'react'
import "../collection/Collection.css";
const Collection = (props) => {

    return (
        <div className="container-fluid rounded-0">
            <div className="row">
                <div className="col-4">
                    <div className="card" style={{ width: "30rem" }}>
                        <div className="card-header">
                            Results :
                  </div>
                        <ol className="list-group list-group-flush">
                            {props.arrMovie.map((element, index) => (
                                <div>
                                    <li className="list-group-item" key={index}>{element.Title + " " + "(" + element.Year + ")"}
                                        <button className="btn btn-primary" id="favBtn">ADD</button>
                                    </li>
                                </div>

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
