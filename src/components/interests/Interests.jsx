/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './InterestsStyles.css';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import Goldberg from '../../assets/goldberg.jpg';
import Cat from '../../assets/cat.jpg';
import Thinker from '../../assets/thinker.png';
import Classical from '../../assets/classical.jpg';

function Interests() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="interests">
      <h2>Some Things That I love</h2>
      <div className="container">
        <div className="card-container">
          <Card body className="philosophy">
            <img src={Thinker} alt="Thinker" />
            <h3>Philosophy</h3>
            <p>
              I love reading philosophy books and discussing them with my friends.
              (or start pondering about life)
            </p>
          </Card>
        </div>
        <div className="carousel-container">
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
        <div className="card-container2">
          <Card body className="classical">
            <h3>Music</h3>
            <p>
              I am a big fan of classical music. I play the piano, violin, and bass.
            </p>
            <img src={Classical} alt="Classical" />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Interests;
