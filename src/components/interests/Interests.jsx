/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import './InterestsStyles.css';
import { Card } from 'react-bootstrap';
import { ref, getDownloadURL } from 'firebase/storage';
import storage from '../../services/datastore';

function Interests() {
  // Get the download URL for the images
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
  // End of getDownloadURL

  // useState for card selection
  const [selectedPhilosophy, setSelectedPhilosophy] = useState(false);
  const [selectedClassical, setSelectedClassical] = useState(false);

  return (
    <div className="interests" id="interests">
      <h2>Some Things That I love</h2>
      <div className="container">
        <div className="card-container">
          <Card
            body
            className="philosophy"
            onClick={() => setSelectedPhilosophy(selectedPhilosophy === 'philosophy' ? null : 'philosophy')}
          >
            <h3>Philosophy</h3>
            <img src={Thinker} alt="Thinker" />
            {selectedPhilosophy === 'philosophy' && (
            <div>
              <p>
                I love reading
                {' '}
                <strong>philosophy</strong>
                {' '}
                books and discussing them with my friends.
                (or start pondering about life)
              </p>
              <p>
                My favorite philosopher is
                {' '}
                <strong> Wittgenstein</strong>
                {' '}
                and I love his book, "Tractatus Logico-Philosophicus."
              </p>
            </div>
            )}
          </Card>
        </div>
        <div className="card-container2">
          <Card
            body
            className="classical"
            onClick={() => setSelectedClassical(selectedClassical === 'classical' ? null : 'classical')}
          >
            <h3>Music</h3>
            <img src={Classical} alt="Classical" />
            {selectedClassical === 'classical' && (
            <div>
              <p>
                I am a big fan of
                {' '}
                <strong>classical music</strong>
                {' '}
                (yes, I'm a nerd).
              </p>
              <p>I play the piano, violin, and bass.</p>
              <p>
                My favorite piece is Bach's
                {' '}
                <strong>Goldberg Variations</strong>
                , which is the music that plays when you press the play button on the top right!
              </p>
            </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Interests;
