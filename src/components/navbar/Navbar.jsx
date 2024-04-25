import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook, FaGoogle, FaInstagram, FaPinterest, FaTwitter,
} from 'react-icons/fa';

import './NavbarStyles.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Food</h2>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Menu1</li>
        <li>Menu2</li>
        <li>Menu3</li>
        <li>Menu4</li>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger">
        <HiOutlineMenuAlt4 className="icon" />
      </div>

      <div className="mobile-menu">
        <ul className="mobile-nav">
          <li>Home</li>
          <li>Menu1</li>
          <li>Menu2</li>
          <li>Menu3</li>
          <li>Menu4</li>
        </ul>
        <div className="mobile-menu-button">
          <div className="menu-icons">
            <button type="button">Search</button>
            <button type="button">Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaGoogle className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
