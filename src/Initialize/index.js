import React, { useState } from 'react';
import getJoke from '../api/data/jokeData';

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
      <div className="main-container">
        <h1>{joke.setup}</h1>
        <h1>{btnText !== 'Get Punchline' ? joke.punchline : ''}</h1>
        {btnText === 'Get a Joke' || btnText === 'Get Another Joke' ? (
          <button onClick={getAJoke} className="jokeBtn" type="button">
            {btnText}
          </button>
        ) : (
          <button
            onClick={() => setBtnText('Get Another Joke')}
            className="jokeBtn"
            type="button"
          >
            {btnText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Initialize;
