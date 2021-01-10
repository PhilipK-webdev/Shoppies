import React from 'react'
import "../collection/Collection.css";

function CollectionDB(props) {

    const deleteMovie = (e) => {
        e.preventDefault();
        const idToDelet = e.target.attributes.getNamedItem("data-tag").value;
        props.deleteMyMovieDB(idToDelet);
    }


    return (

        <div className="container-fluid rounded-0">
            <div className="row">
                <div className="col-4">
                    <div className="card" style={{ width: "30rem" }}>
                        <ol className="list-group list-group-flush">
                            {props.movieDB.map((element, index) => (
                                <li className="list-group-item" key={index} id={index}>{element.Title + " " + "(" + element.Year + ")"}
                                    <button className="btn btn-primary" id="favBtn" data-tag={index} onClick={deleteMovie}>Delete</button>
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

export default CollectionDB
