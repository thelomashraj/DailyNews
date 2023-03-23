import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () =>{
    return (

      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={12} country="IN" category={null} heading="Today's Top Headlines" />} />
            <Route exact path="/business" element={<News key="business" pageSize={12} country="IN" category="business" heading="Business Headlines" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={12} country="IN" category="entertainment" heading="Entertainment Headlines" />} />
            <Route exact path="/health" element={<News key="health" pageSize={12} country="IN" category="health" heading="Health Headlines" />} />
            <Route exact path="/world" element={<News key="world" pageSize={12} country="IN" category="world" heading="World's Top Headlines" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={12} country="IN" category="sports" heading="Sports Headlines" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={12} country="IN" category="technology" heading="Technology Headlines" />} />
          </Routes>
        </div>
      </Router>
    )
}

export default App

