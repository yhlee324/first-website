/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './AboutStyles.css';
import Card from 'react-bootstrap/Card';
import Korean from '../../assets/korean.jpg';

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="img-container">
          <img src={Korean} alt="Korean" />
        </div>
        <div className="text-section-container">
          <Card body className="card">
            <h2>A Little About Me!</h2>
            <p>
              Hi! I'm
              {' '}
              <strong>Ryan</strong>
              {' '}
              from
              {' '}
              <strong>Seoul</strong>
              , South Korea.
            </p>
            <p>I am a computer science major and I am interested in getting to learn more about web development.</p>
            <p>
              I was originally a '24 but I left to serve in the
              {' '}
              <strong>Korean military</strong>
              {' '}
              for 18 months after sophomore year and now I am back as a '26!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
