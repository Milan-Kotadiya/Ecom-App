import './App.css';
import Banner from './components/Home/Banner';
import Dresses from './components/Home/Dresses';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <div className="quote">

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <span>Extra 20% OFF</span>
          </div>
          <div className="carousel-item">
          <span>FREE DELIVERY FOR ORDERS OVER $30</span>
          </div>
          <div className="carousel-item">
          <span>Extra 20% OFF</span>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only"></span>
        </a>
      </div>

    </div>
    <Navbar/>
    <Banner/>
    <Dresses/>
    </>
  );
}

export default App;
