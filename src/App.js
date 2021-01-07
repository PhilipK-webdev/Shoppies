import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import InputField from './components/input/InputField';

function App() {
  return (
    <div className="container-fluid" id="container-main">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <Header />
          <InputField />
          <Footer />
        </div>
        <div className="col-3"></div>
      </div>

    </div>
  );
}

export default App;
