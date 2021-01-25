import React, { useState } from 'react';
import '../../node_modules/bulma/css/bulma.css';
import Needleman from './Needleman';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Smith from './Smith';
import Particles from 'react-particles-js';
import '../assets/css/app.css';
import { particlesOptions, blackparticlesOptions } from '../assets/css/Particles';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/dark.css';

const App = () => {
  const [firstSequence, setFirstSequence] = useState('');
  const [secondSequence, setSecondSequence] = useState('');
  const [gap, setGap] = useState(-8);
  const [match, setMatch] = useState(15);
  const [sub, setSub] = useState(-3);
  const [darkTheme, setDarkTheme] = useState(false);

  if (darkTheme) {
    document.documentElement.classList.add('darkmode');
  }
  if (!darkTheme) {
    document.documentElement.classList.remove('darkmode');
  }

  const updateFirstFreq = (e) => {
    setFirstSequence(e.target.value);
  };

  const updateSecondFreq = (e) => {
    setSecondSequence(e.target.value);
  };

  const updateUserGap = (e) => {
    let res = parseInt(e.target.value);
    if (isNaN(res)) {
      return;
      //debug for updating values
    }
    setGap(res);
  };

  const updateUserMatch = (e) => {
    let res = parseInt(e.target.value);
    if (isNaN(res)) {
      return;
      //debug for updating values
    }
    setMatch(res);
  };

  const updateUserSub = (e) => {
    let res = parseInt(e.target.value);
    if (isNaN(res)) {
      return;
      //debug for updating values
    }
    setSub(res);
  };

  return (
    <div>
      <Particles
        params={darkTheme === false ? particlesOptions() : blackparticlesOptions()}
        canvasClassName="background-canvas"
      />
      <div className="container">
        <div className="has-text-centered pt-6">
          <h1 className="title is-1"> Sequence Alignment</h1>
          <h6 className="subtitle is-6">v1.0.1 </h6>
        </div>
        <section className="section">
          <div className="box">
            <div className="field">
              <label className="label">First sequence</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="ex. GAWGHEE"
                  onChange={(e) => updateFirstFreq(e)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Second sequence</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="ex. WHEAE"
                  onChange={(e) => updateSecondFreq(e)}
                />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="field">
                  <label className="label has-text-centered">Match</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Default value is 15"
                      onChange={(e) => updateUserMatch(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label has-text-centered">Sub</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Default value is -3"
                      onChange={(e) => updateUserSub(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label has-text-centered">Gap</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Default value is -8"
                      onChange={(e) => updateUserGap(e)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {firstSequence && secondSequence && (
              <div className="columns is-fullheight">
                <div className="column">
                  <Needleman
                    first_sequence={firstSequence}
                    second_sequence={secondSequence}
                    gap={gap}
                    sub={sub}
                    match={match}
                  ></Needleman>
                </div>
                <div className="column">
                  <Smith
                    first_sequence={firstSequence}
                    second_sequence={secondSequence}
                    gap={gap}
                    sub={sub}
                    match={match}
                  ></Smith>
                </div>
              </div>
            )}
          </div>
          <div className="has-text-centered">
            <button
              className="button is-large"
              onClick={(e) => (darkTheme === false ? setDarkTheme(true) : setDarkTheme(false))}
            >
              <FontAwesomeIcon icon={faLightbulb} />
            </button>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
