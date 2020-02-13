import React from 'react';
import classes from './Cup.module.css';

export const cup = ({ chooseCup, cup, active }) => {
  return (
    <span
      className={classes.Cup}
      active={`${active? 'true' : 'false'}`}
      onClick={(e) => chooseCup(cup, e)}
    >O</span>
  )
}

export default cup;
