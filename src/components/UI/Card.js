import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;

  return <article className={classes}>{props.children}</article>;
};

export default Card;
