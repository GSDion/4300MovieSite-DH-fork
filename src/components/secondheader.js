import React from 'react';
import './secondheader.css';

function SecHeader() {
    return (
    <header className="secheader">
      <div className="secheader__homebutton">
        <img src={process.env.PUBLIC_URL + '/homebutton.png'} alt="homebutton" />
      </div>
      <h1 className="secheader__title">DCC Movie Reviews</h1>
    </header>
  );
}

export default SecHeader;