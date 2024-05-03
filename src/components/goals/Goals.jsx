/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './GoalsStyles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../../services/datastore';

function Goals() {
  // import photo urls from firebase
  const [Chopin, setChopin] = useState('');
  const chopinRef = ref(storage, 'chopin.jpg');
  useEffect(() => {
    getDownloadURL(chopinRef)
      .then((url) => {
        setChopin(url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [chopinRef]);
  const [Dali, setDali] = useState('');
  const daliRef = ref(storage, 'dali.png');
  useEffect(() => {
    getDownloadURL(daliRef)
      .then((url) => {
        setDali(url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [daliRef]);

  return (
    <div className="goals" id="goals">
      <h2>Goals</h2>
      <div className="container">
        <Row className="row1">
          <Col>
            <Card body className="card1">
              <h3>DALI</h3>
              <p>
                I'm really excited to work with DALI!
                <p>
                  I can't wait to contribute to new projects and learn new skills along the way!
                </p>
              </p>
            </Card>
          </Col>
          <Col>
            <div className="img-container">
              <Image src={Dali} alt="DALI" roundedCircle />
            </div>
          </Col>
        </Row>
        <Row className="row2">
          <Col>
            <div className="img-container">
              <Image src={Chopin} alt="chopin" />
            </div>
          </Col>
          <Col>
            <Card body className="card2">
              <h3>Long-term Goal</h3>
              <p>
                My long-term goal is to develop an app for classical music enthusiasts.
              </p>
              <p>
                I want an app where you can scan a music sheet and create/edit a new one in better quality.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Goals;
