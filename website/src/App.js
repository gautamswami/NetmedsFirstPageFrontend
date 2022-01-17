import logo from './logo.svg';
// import './App.css';
// import '/header.css';
// import './components/header.css'
import './components/header.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Header from './components/header';
import Swiper from './components/swiper';
import ListingProduct from './components/listing';
import Mainnavigation from './components/mainnavigation';
// import Productdetail from './components/productdetails/productdetail';
function App() {
  return (

<>
< Header />
< Mainnavigation />
< Swiper />
<ListingProduct/>
    
    </>

);
}

export default App;
