import React from 'react';
import Card from 'react-bootstrap/Card';
import './GoalsStyles.css';

function Goals() {
  return (
    <div className="goals">
      <div className="container">
        <h2> Here are some of my goals</h2>
        <div className="card-container">
          <Card body className="card1">
            <h3>What I want to do in Dali</h3>
            <p>My short-term goal is to get a summer internship in web development.</p>
          </Card>
          <Card body className="card2">
            <h3>Long-term Goal</h3>
            <p>My long-term goal is to develop an app for classical music enthusiasts.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Goals;
