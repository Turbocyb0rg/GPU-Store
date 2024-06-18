import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router} from "react-router-dom"
import Slider from "./components/Slider.js"
import data from './data/data.json'
import Offer from './components/Offer.js'
import Heading from "./components/Heading.js"

function App() {

  const stylingOptions = {
    backgroundColor: "red",
    padding:"10px"
  }


  return (

    <Router>
      <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Offer gpu={data.gpu}/>
      <Heading text="Star Products"/>
    </Router>

  );
}

export default App;
