import React from 'react';
import classes from './GameButton.module.css';

export const gameButton = ({click, disabled}) => {
  return (
    <div className={classes.GameButton}>
      <button onClick={e => click(e)}>Find da ball !!!</button>
    </div>
  )
}

export default gameButton
