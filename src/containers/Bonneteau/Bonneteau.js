import React, { useState, useEffect } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import classes from './Bonneteau.module.css';

export const Bonneteau = () => {
  
  const [shuffleCount, setShuffleCount] = useState(5);
  const [cupCount, setCupCount] = useState(3);
  const [cups, setCups] = useState(Array(cupCount).fill('').map((_, i) => i));
  const [activeCup, setActiveCup] = useState(Math.floor(Math.random() * cupCount));
  const [showActive, setShowActive] = useState(true);
  const [result, setResult] = useState(null);
  const [shuffleInterval, setShuffleInterval] = useState(null);

  useEffect(() => {
    setCups(Array(cupCount).fill('').map((_, i) => i));
  }, [cupCount]);

  useEffect(() => {
    if (shuffleCount === 0) {
      clearInterval(shuffleInterval);
    }
  }, [shuffleCount, shuffleInterval]);

  const startGame = (e) => {
    setActiveCup(Math.floor(Math.random() * cupCount));
    setShowActive(false);
    setResult(null);
    setShuffleInterval(setInterval(() => {
      setCups(shuffle([...cups]));
      setShuffleCount(shuffleCount - 1);
    }, 700));
  }

  const shuffle = (array) => {
    const length = array.length;
    let index = -1;

    while (++index < length) {
      const rand = Math.floor(Math.random() * length);
      const value = array[rand];

      array[rand] = array[index];
      array[index] = value;
    }
    return array;
  }

  



  return (
    <div>
      <button onClick={e => startGame(e)}>Let's begin !!!</button>
      <ul className={classes.ShuffleList}>
        {cups.map(cup => {
          return (<li key={cup}>
            <a href="#">{cup}</a>
          </li>)
        })}
      </ul>
    </div>
  )
}
