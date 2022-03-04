import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import About from './About.js'; 
import Contact from './Contact.js'; 
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
        // Set up the Router
        <Route exact path="/" component={Projects} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
  
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
                                          
            // Set up the Links
            <Link to="/About" className="item">About</Link>
            <Link to="/Project" className="item">Projects</Link>
            <Link to="/Contact" className="item">Contact</Link>
  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
 
export default App;