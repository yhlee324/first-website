import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import {
  FaFacebook, FaYoutube, FaInstagram, FaPinterest, FaTwitter,
} from 'react-icons/fa';
import './NavbarStyles.css';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const handleResize = () => {
    if (window.innerWidth > 940) {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="header">
      <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
        <h2 className={nav ? 'h2-nav' : 'h2-default'}>Ryan Lee</h2>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="home" smooth>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth>About</Link>
          </li>
          <li className="nav-item">
            <Link to="interests" smooth>Interests</Link>
          </li>
          <li className="nav-item">
            <Link to="goals" smooth>Goals</Link>
          </li>
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
            <li className="nav-item">
              <Link to="home" smooth>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth>About</Link>
            </li>
            <li className="nav-item">
              <Link to="interests" smooth>Interests</Link>
            </li>
            <li className="nav-item">
              <Link to="goals" smooth>Goals</Link>
            </li>
          </ul>
          <div className="mobile-menu-button">
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
    </div>
  );
}

export default Navbar;
