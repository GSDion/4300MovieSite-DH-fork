import React from 'react';

import './movieformcard.css';

function Card(props) {
  return (
    <div className="card">
      <div className="card__header">{props.title}</div>
      <div className="card__body">{props.children}</div>
      <div className="card__footer">{props.footer}</div>
    </div>
  );
}

export default Card;
