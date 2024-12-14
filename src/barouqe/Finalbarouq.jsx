import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Home from './Home';
import Header1 from './Header1';
import End from './End';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';

function Finalbarouq() {
  return (
    <div>
         <Router>
     <Header1 />
     <hr />
     <Routes>
        <Route  path="/"  element={<Home />} />
        <Route  path="/Page1"  element={<Page1 />} />
         <Route path="Page2" element={<Page2 />} />
          <Route path="Page3" element={<Page3 />} />
          <Route path="Page4" element={<Page4 />} />
          <Route path="Page5" element={<Page5 />} />
          <Route path="Page6" element={<Page6 />} /> 
          <Route path="Page7" element={<Page7 />} /> 
          <Route path="Page8" element={<Page8 />} /> 
          <Route path="Page9" element={<Page9 />} /> 
          <Route path="Page10" element={<Page10 />} /> 
     
        
    </Routes>
    <hr />
    <End /> 
   </Router> 
   <hr /> 
   <Page8 />
    </div>
  )
}

export default Finalbarouq
