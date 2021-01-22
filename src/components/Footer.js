import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer" style={{ background: 'none' }}>
      <div className="content has-text-centered">
        <h4 className="title is-4">
          Created by <a href="www.github.com/restylianos">restylianos </a>
          <FontAwesomeIcon icon={faCode} />
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
