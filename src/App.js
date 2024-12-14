// import logo from './logo.svg';
// import About from './About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'animate.css';
import Newbutton from './Newbutton';
import Home from './Home';
import About from './About';
import Services from './Services';
import Booking from './Booking';
import Menu from './Menu';
import Video from './Video';
import ContactRastroant from './ContactRastroant';
import Navforsm from "./Navforsm";
import NavforRes from "./NavforRes";
import FooterRes from "./FooterRes";

// import Services from './Services';
// import ContactRastroant from './ContactRastroant';


//import 'animate.css';
//import NavforRes from './Resturan/1stpage/NavforRes';
// import FooterRes from './Resturan/FooterRes';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './Resturan/Home';
// import Navforsm from './Resturan/Navforsm';
// import Quality from './Resturan/1stpage/Quality';
// import About from './Resturan/About';
// import Services from './Resturan/Services';
// import ContactRastroant from './Resturan/ContactRestorant';
// import Menu from './Resturan/Menu';
// import Booking from './Resturan/Booking';
// import Video from './Resturan/Video';
// import Newbutton from './Resturan/1stpage/Newbutton';

// import Finalbarouq from './barouqe/Finalbarouq';



function App() {
  return (
    <div className="App">
    {/* // <About />
    // <hr />
    // <br />
    // <br />
    // <Services />
    // <hr />
    // <br />
    // <br />
    // <ContactRastroant /> */}
   
 {/* <Finalbarouq /> */}
 <Router>
    <NavforRes className='d-none d-lg-block'/>
    <Navforsm/>
    <Routes>
    <Route  path="/"  element={<Home/>} />
    <Route path="/" element={<Newbutton/>} />
    <Route  path="/About"  element={<About/>} />
    <Route  path="/Services"  element={<Services/>} />
    <Route  path="/Menu"  element={<Menu/>} />
    <Route  path="/Booking"  element={<Booking/>} />
    <Route  path="/Video"  element={<Video/>} />


    <Route  path="/ContactRestorant"  element={<ContactRastroant/>} />


   
    </Routes>
<FooterRes/>
</Router> 

    
 </div>
 
  );
}

export default App;
