import React from 'react';
import './secondheader.css';

import { Link } from 'react-router-dom';

function SecHeader() {
    return (
    <header className="secheader">
      <div className="secheader__homebutton">
        <Link to="/">
        <img src={process.env.PUBLIC_URL + '/homebutton.png'} alt="homebutton" />
        </Link>
      </div>
      <h1 className="secheader__title">DCC Movie Reviews</h1>
    </header>
  );
}

export default SecHeader;