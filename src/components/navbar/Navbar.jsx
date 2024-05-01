import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import {
  FaFacebook, FaYoutube, FaInstagram, FaPinterest, FaTwitter,
} from 'react-icons/fa';

import './NavbarStyles.css';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
      {/* <div className={nav ? 'logo dark' : 'logo'}>
        <h2>Ryan Lee</h2>
      </div> */}
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Interests</li>
        <li>Goals</li>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" style={{ marginRight: '1rem' }} />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger" onClick={handleNav} onKeyDown={handleNav} role="button" tabIndex={0} aria-label="Navigation Menu">
        {!nav ? <HiOutlineMenuAlt4 className="icon" /> : <AiOutlineClose style={{ color: '#000' }} className="icon" />}
      </div>

      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">
          <li>Home</li>
          <li>About</li>
          <li>Interests</li>
          <li>Goals</li>
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
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
