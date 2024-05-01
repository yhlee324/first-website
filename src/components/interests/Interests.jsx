import React, { useState } from 'react';
import './InterestsStyles.css';
import Carousel from 'react-bootstrap/Carousel';
import Goldberg from '../../assets/goldberg.jpg';

function Interests() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="interests">
      <div className="container">
        <div className="carousel-container1">
          <h2>Here are some of my interests</h2>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img src={Goldberg} alt="FirstSlide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Goldberg} alt="SecondSlide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolorn sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Goldberg} alt="LastSLide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
