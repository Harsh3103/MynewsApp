import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/images/logo.png';
import '../assests/Js/main'
function Header() {
  return (
    <header>
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4">
              <div className="logo">
                <Link to="/">
                <img src={logo} alt="Logo" />

                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="social">
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link to="/" className="navbar-brand">MENU</Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav m-auto">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/NewsCategory" className="nav-item nav-link">NewsCategory</Link>
                
                <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
