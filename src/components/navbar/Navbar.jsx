import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './NavbarStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import audioFile from '../../assets/audio.mp3';

function Navbar() {
  // Navbar
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const handleResize = () => {
    if (window.innerWidth > 940) {
      setNav(false);
    }
  };
  // Audio
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Resize
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
          <audio ref={audioRef} src={audioFile}>
            <track kind="captions" srcLang="en" label="English" />
          </audio>
          <FontAwesomeIcon
            className="music-icon"
            icon={isPlaying ? faPause : faPlay}
            type="button"
            onClick={() => {
              if (isPlaying) {
                audioRef.current.pause();
              } else {
                audioRef.current.play();
              }
              setIsPlaying(!isPlaying);
            }}
          />
          <a
            href="https://www.instagram.com/ryanlee_yanghwa?igsh=YzRjbnB4YWQ4a2Vi&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/yang-hwa-lee-7b4249212/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="linkedin" />
          </a>
        </div>
        <div className="hamburger" onClick={handleNav} onKeyDown={() => {}} role="button" tabIndex={0} aria-label="Navigation Menu">
          {!nav ? <HiOutlineMenuAlt4 className="icon" /> : <AiOutlineClose style={{ color: '#000' }} className="icon" />}
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
          <ul className="mobile-nav">
            <li className="nav-item">
              <Link to="home" smooth duration={300}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth duration={300}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="interests" smooth duration={300}>Interests</Link>
            </li>
            <li className="nav-item">
              <Link to="goals" smooth duration={300}>Goals</Link>
            </li>
          </ul>
          <div className="mobile-menu-button">
            <div className="social-icons">
              <FontAwesomeIcon
                className="music-icon"
                icon={isPlaying ? faPause : faPlay}
                type="button"
                onClick={() => {
                  if (isPlaying) {
                    audioRef.current.pause();
                  } else {
                    audioRef.current.play();
                  }
                  setIsPlaying(!isPlaying);
                }}
              />
              <a
                href="https://www.instagram.com/ryanlee_yanghwa?igsh=YzRjbnB4YWQ4a2Vi&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="instagram" />
              </a>
              <a href="https://www.linkedin.com/in/yang-hwa-lee-7b4249212/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
