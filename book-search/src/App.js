import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper/index';
import Navbar from './components/Navbar/index';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <NavTabs />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Saved" component={Saved} />
        {/* <Route exact path="/search" component={Search} /> */}
      </div>
    </Router>
  );
}

export default App;

