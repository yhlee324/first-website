/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './HeroStyles.css';
import { AiOutlineSearch } from 'react-icons/ai';

function hero() {
  return (
    <div className="hero">
      <div className="overlay" />
      <div className="content">
        <h1>Asian Food</h1>
        <p>Get the best food in town</p>
        <p>Order Now</p>
        <form className="form">
          <div>
            <input type="text" placeholder="Enter your location" />
          </div>
          <div>
            <button type="button">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default hero;
