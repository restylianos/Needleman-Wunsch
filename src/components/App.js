import React, { useState } from 'react';
import '../../node_modules/bulma/css/bulma.css';
import Needleman from './Needleman';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Smith from './Smith';
import Particles from 'react-particles-js';
import '../assets/css/app.css';

const App = () => {
  const [firstSequence, setFirstSequence] = useState('');
  const [secondSequence, setSecondSequence] = useState('');
  const [gap, setGap] = useState(-8);
  const [match, setMatch] = useState(15);
  const [sub, setSub] = useState(-3);

  const updateFirstFreq = (e) => {
    setFirstSequence(e.target.value);
  };

  const updateSecondFreq = (e) => {
    setSecondSequence(e.target.value);
  };

  const updateUserGap = (e) => {
    setGap(e.target.value);
  };

  const updateUserMatch = (e) => {
    setMatch(e.target.value);
  };

  const updateUserSub = (e) => {
    setSub(e.target.value);
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 96,
        density: {
          enable: false,
          value_area: 800.8649341288591,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 3,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'https://github.com/moov2/svgs/blob/master/svgs/facebook-logo.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 224.24218155608057,
        color: '#000000',
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div>
      <Particles params={particlesOptions} canvasClassName="background-canvas" />
      <div className="container">
        <div className="has-text-centered">
          <h1 className="title is-1"> Sequence Alignment</h1>
          <h6 className="subtitle is-6">v 1.0.1 </h6>
        </div>
        <section className="section">
          <div className="box">
            <div className="field">
              <label className="label">First sequence</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="AATT"
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
                  placeholder="ATCT"
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
        </section>
      </div>
    </div>
  );
};

export default App;
