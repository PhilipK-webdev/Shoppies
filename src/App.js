import { useState, useEffect } from "react";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import InputField from './components/input/InputField';
import Axios from "axios";
import Collection from "./components/collection/Collection";

function App() {

  const [movieName, setMovieName] = useState("");
  const [arrMovie, setArrMovie] = useState([]);
  const [flag, setFlag] = useState(false);


  const apiKey = "270a451d";

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
      console.log(flag)
    })
      .catch((err) => console.log(err));
  }



  return (
    <div className="container-fluid" id="container-main">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <Header />
          <InputField submit={submit} addMovie={addMovie} movieName={movieName} />
          {flag ? <Collection arrMovie={arrMovie} /> : null}
          <Footer />
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default App;
