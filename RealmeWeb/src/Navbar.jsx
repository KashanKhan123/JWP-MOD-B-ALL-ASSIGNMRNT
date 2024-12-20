import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is installed

const Navbar = () => {
  return (

    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand" href="/">realme</a>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/smartphones">realme smartphone</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/narzo">narzo smartphone</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/audio">Audio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/accessories">Accessories</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/brand">Brand</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/support">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/community">Community</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
