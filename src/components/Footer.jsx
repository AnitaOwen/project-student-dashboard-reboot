import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
    <Link to="/about">About The Developers</Link>
    </footer>
   
  );
}

export default Footer;