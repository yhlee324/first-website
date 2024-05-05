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

  const [Cat, setCatUrl] = useState('');
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

  const [selectedCard1, setSelectedCard1] = useState(null);
  const [selectedCard2, setSelectedCard2] = useState(null);
  const [selectedCard3, setSelectedCard3] = useState(null);

  return (
    <div className="goals" id="goals">
      <h2>Goals</h2>
      <div className="container">
        <Row className="row1">
          <Col>
            <Card
              body
              className="card1"
              onClick={() => setSelectedCard1(selectedCard1 === 'card1' ? null : 'card1')}
            >
              <h3>DALI</h3>
              <Image src={Dali} alt="DALI" roundedCircle />
              {selectedCard1 === 'card1' && (
                <p>
                  I'm really excited to work with DALI!
                  <p>
                    I can't wait to contribute to new projects and learn new skills along the way!
                  </p>
                </p>
              )}
            </Card>
          </Col>
          <Col>
            <Card
              body
              className="card2"
              onClick={() => setSelectedCard2(selectedCard2 === 'card2' ? null : 'card2')}
            >
              <h3>App for Classical Music</h3>
              <Image src={Chopin} alt="chopin" />
              {selectedCard2 === 'card2' && (
                <p>
                  One of my long-term goals is to develop an app for classical music enthusiasts.
                  <p>
                    I want to create a platform where users can easily organize recordings of classical music.
                  </p>
                </p>
              )}
            </Card>
          </Col>
          <Col>
            <Card
              body
              className="card3"
              onClick={() => setSelectedCard3(selectedCard3 === 'card3' ? null : 'card3')}
            >
              <h3>App for My Cat Ray!</h3>
              <Image src={Cat} alt="ray" />
              {selectedCard3 === 'card3' && (
                <p>
                  I also plan on developing an app for my cat Ray!
                  <p>
                    I want make an app to track his daily activities and also want to conveniently access his favorite music videos, or games.
                  </p>
                </p>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Goals;
