/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './InterestsStyles.css';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import Goldberg from '../../assets/goldberg.jpg';
import Cat from '../../assets/cat.jpg';

function Interests() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="interests">
      <div className="container">
        <h2>Here are some of my interests</h2>
        <div className="card-container">
          <Card body className="card1">
            <h3>Classical Music</h3>
            <p>I love listening to classical music, especially Bach's Goldberg Variations.</p>
          </Card>
        </div>
        <div className="carousel-container1">
          <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
            <Carousel.Item>
              <img src={Goldberg} alt="FirstSlide" />
              <Carousel.Caption>
                <h3>Classical Music</h3>
                <p>Bach's Goldberg Variations is my favorite!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Goldberg} alt="SecondSlide" />
              <Carousel.Caption>
                <h3>Philosophy</h3>
                <p>
                  My favorite philosopher is Wittgenstein.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Cat} alt="LastSLide" />
              <Carousel.Caption>
                <h3>My Cat</h3>
                <p>
                  This is my cat, Ray.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Interests;
