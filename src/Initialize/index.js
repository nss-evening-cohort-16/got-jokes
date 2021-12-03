import React, { useState } from 'react';
import getJoke from '../api/data/jokeData';
import '../styles/globals/index.scss';

function Initialize() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState({});

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setBtnText('Get Punchline');
    });
  };

  return (
    <div className="App">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Joke Generator</h5>
          <hr />
          <h3>{joke.setup}</h3>
          <h1>{btnText !== 'Get Punchline' ? joke.punchline : ''}</h1>
          {btnText === 'Get a Joke' || btnText === 'Get Another Joke' ? (
            <button onClick={getAJoke} className="btn btn-primary" type="button">
              {btnText}
            </button>
          ) : (
            <button
              onClick={() => setBtnText('Get Another Joke')}
              className="btn btn-primary"
              type="button"
            >
              {btnText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Initialize;
