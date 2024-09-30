import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';
import './assests/styles/style.css'
import './assests/Js/main'
import CategoryNews from './pages/NewsCategory';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewsCategory" element={<CategoryNews/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
