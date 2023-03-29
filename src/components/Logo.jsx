import React from 'react';
import logo_url from '../images/logo.png';
import '../styles/Logo.css';

const Logo = ({ name }) => {
  return(
    <div className='logo-container'>
      <img
        className='logo'
        src={logo_url}
        alt={`Logo de ${name}`}
      />
    </div>
  );
};

export default Logo;