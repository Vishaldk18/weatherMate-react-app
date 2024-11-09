// Navbar.js
import React, { useState } from 'react';
import './navbar.css';

const Navbar = ({ onSearch, onUseLocation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">WeatherMate</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Example link: Uncomment and customize if needed */}
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li> */}
          </ul>
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by city"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>
            <button className="btn btn-outline-primary ms-2" type="button" onClick={onUseLocation}>Use My Location</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
