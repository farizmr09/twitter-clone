import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './authcomponents/LandingPage';
import Home from './Home';

function App() {
  return (
    // <Home />
    // <LandingPage />
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={ <LandingPage/> } />
          <Route path='/home' element={ <Home/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
