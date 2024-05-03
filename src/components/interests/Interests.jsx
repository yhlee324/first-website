/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import './InterestsStyles.css';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import { ref, getDownloadURL } from 'firebase/storage';
import storage from '../../services/datastore';

function Interests() {
  // Get the download URL for the images
  const [goldbergUrl, setGoldbergUrl] = useState('');
  const goldbergRef = ref(storage, 'goldberg.jpg');
  useEffect(() => {
    getDownloadURL(goldbergRef)
      .then((url) => {
        setGoldbergUrl(url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [goldbergRef]);
  const [catUrl, setCatUrl] = useState('');
  const catRef = ref(storage, 'cat.jpg');
  useEffect(() => {
    getDownloadURL(catRef)
      .then((url) => {
        setCatUrl(url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [catRef]);
  const [Thinker, setThinker] = useState('');
  const thinkerRef = ref(storage, 'thinker.png');
  useEffect(() => {
    getDownloadURL(thinkerRef)
      .then((url) => {
        setThinker(url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [thinkerRef]);
  const [Classical, setClassical] = useState('');
  const classicalRef = ref(storage, 'classical.jpg');
  useEffect(() => {
    getDownloadURL(classicalRef)
      .then((url) => {
        setClassical(url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [classicalRef]);
  const [Wittgenstein, setWittgenstein] = useState('');
  const wittgensteinRef = ref(storage, 'wittgenstein.jpg');
  useEffect(() => {
    getDownloadURL(wittgensteinRef)
      .then((url) => {
        setWittgenstein(url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [wittgensteinRef]);
  // End of getDownloadURL
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="interests" id="interests">
      <h2>Some Things That I love</h2>
      <div className="container">
        <div className="card-container">
          <Card body className="philosophy">
            <img src={Thinker} alt="Thinker" />
            <h3>Philosophy</h3>
            <p>
              I love reading
              {' '}
              <strong>philosophy</strong>
              {' '}
              books and discussing them with my friends.
              (or start pondering about life)
            </p>
          </Card>
        </div>
        <div className="carousel-container">
          <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
            <Carousel.Item>
              <img src={goldbergUrl} alt="goldberg" />
              <Carousel.Caption>
                <h3>Classical Music</h3>
                <p>Bach's Goldberg Variations is my favorite!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Wittgenstein} alt="SecondSlide" />
              <Carousel.Caption>
                <h3>Philosophy</h3>
                <p>
                  My favorite philosopher is Wittgenstein--he is an interesting person to study.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={catUrl} alt="My Cat! :)" />
              <Carousel.Caption>
                <h3>My Cat Ray</h3>
                <p>
                  This is Ray.
                </p>
                <p>
                  He helps me debug my code.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="card-container2">
          <Card body className="classical">
            <h3>Music</h3>
            <p>
              I am a big fan of
              {' '}
              <strong>classical music</strong>
              .
            </p>
            <p>I play the piano, violin, and bass.</p>
            <img src={Classical} alt="Classical" />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Interests;
