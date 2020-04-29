import React from 'react';
import './Logo.css';
import logo from './logo-enigma-school-slider1.png';


function Logo() {
  return (
    <div className="banner">
        <div>
      <img src={logo} id="logo" />
      </div>
    </div>
  );
}

export default Logo;
