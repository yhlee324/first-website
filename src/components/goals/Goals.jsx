/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Card from 'react-bootstrap/Card';
import './GoalsStyles.css';
import Dali from '../../assets/dali.png';
import Chopin from '../../assets/chopin.jpg';

function Goals() {
  return (
    <div className="goals">
      <h2>Goals</h2>
      <div className="container">
        <div className="card-container">
          <Card body className="card1">
            <h3>DALI</h3>
            <p>
              I'm really excited to work with DALI! I can't wait to contribute to new DALI projects and learn new skills along the way!
            </p>
          </Card>
          <Card body className="card2">
            <h3>Long-term Goal</h3>
            <p>
              My long-term goal is to develop an app for classical music enthusiasts.
              I want an app where you can scan a music sheet and create/edit a new one in better quality.
            </p>
          </Card>
        </div>
        <div className="img-container">
          <img src={Dali} alt="DALI" />
          <img src={Chopin} alt="chopin" />
        </div>
      </div>
    </div>
  );
}

export default Goals;
