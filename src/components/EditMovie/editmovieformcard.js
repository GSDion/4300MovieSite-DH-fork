import React from 'react';

import './editmovieformcard.css';

function Card(props) {
  return (
    <div className="moviecard">
      <div className="moviecard__header">{props.title}</div>
      <div className="moviecard__body">{props.children}</div>
      <div className="moviecard__footer">{props.footer}</div>
    </div>
  );
}

export default Card;
