import { useState, useEffect } from "react";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import InputField from './components/input/InputField';
import Axios from "axios";
import Collection from "./components/collection/Collection";
import CollectionDB from "./components/collection/CollectionDB";

function App() {

  const [movieName, setMovieName] = useState("");
  const [arrMovie, setArrMovie] = useState([]);
  const [movieDB, setMovieDB] = useState([]);
  const [flag, setFlag] = useState(false);
  const [tempFlag, setTempFlage] = useState(false);
  const [count, setCount] = useState(0);
  const apiKey = "270a451d";
  let banner = (
    <div className="alert alert-primary" role="alert">
      5 nominations!
    </div>
  )

  useEffect(() => {
    let value = [];
    value = JSON.parse(window.localStorage.getItem("movie"));
    if (value) {
      setMovieDB([...value]);
      setTempFlage(true);
      setCount(value.length);
    }
  }, []);



  const addMovie = (e) => {
    let tempName = e.target.value;
    setMovieName(tempName);

  }

  const submit = (e) => {
    e.preventDefault();
    let movies = [];
    movies = Axios.get(`http://www.omdbapi.com/?s=${movieName}&type=movie&apikey=${apiKey}`);
    movies.then((res) => {
      let arr = [...res.data.Search];
      setArrMovie([...arr]);
      setFlag(true);
    })
      .catch((err) => console.log(err));
  }



  function addToMyCollection(addMovie) {

    if (movieDB.length <= 5) {
      movieDB.push(arrMovie[addMovie]);
      setMovieDB([...movieDB]);
      setTempFlage(true);
      setCount(count + 1);
      window.localStorage.setItem("movie", JSON.stringify(movieDB));
      window.localStorage.setItem("count", JSON.stringify(movieDB.length));
    }
  }

  function deleteMyMovieDB(deleteMovie) {
    movieDB.splice(deleteMovie, 1);
    setMovieDB([...movieDB]);
    setCount(count - 1);
    window.localStorage.setItem("movie", JSON.stringify(movieDB));
    window.localStorage.setItem("count", JSON.stringify(movieDB.length));
  }


  return (
    <div className="container-fluid text-center" id="container-main">
      <Header />
      <InputField submit={submit} addMovie={addMovie} movieName={movieName} />
      {count >= 5 ? banner : null}
      <div className="row">
        <div className="col-6">
          {flag ? <Collection arrMovie={arrMovie} movieName={movieName} addToMyCollection={addToMyCollection} count={count} /> : null}
          <Footer />
        </div>
        <div className="col-6">
          {tempFlag ? <CollectionDB movieDB={movieDB} deleteMyMovieDB={deleteMyMovieDB} /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
