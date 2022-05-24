import React from 'react';
import { Link } from 'react-router-dom';
import './style/Navbar.css';

import logo from './images/logoPolri.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo}/>
        <h1>polri</h1>
      </div>
      <div>
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/informasi">Informasi</Link>
        <Link className="links" to="/">Layanan</Link>
        <Link className="links" to="/">Hubungi</Link>
      </div>
      <div className="login">
        <Link className="links" to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Navbar;
