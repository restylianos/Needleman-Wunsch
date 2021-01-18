import React, { useState } from 'react';
import '../../node_modules/bulma/css/bulma.css';
import Needleman from './Needleman';

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

  return (
    <div className="container">
      <div className="has-text-centered">
        <h1 className="title is-1">Needleman-Wunsch</h1>
      </div>

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
          <Needleman
            first_sequence={firstSequence}
            second_sequence={secondSequence}
            gap={gap}
            sub={sub}
            match={match}
          ></Needleman>
        )}
        {/* <div className="has-text-centered">
          <button
            className="button is-link is-centered is-large is-light"
            onClick={(e) => handleClick(e)}
          >
            GO
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default App;
