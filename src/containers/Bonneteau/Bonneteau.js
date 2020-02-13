import React, { useState, Component } from 'react';
import classes from './Bonneteau.module.css';
import Cup from '../../components/Bonneteau/Cups/Cup';
import Result from '../../components/Bonneteau/Result';
import GameButton from '../../components/Bonneteau/GameControls/GameButton';

export class Bonneteau extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shuffleCount: 5,
      cupCount: 3,
      cups: Array(3).fill('').map((_, i) => i),
      activeCup: Math.floor(Math.random() * 3),
      showActive: true,
      result: null,
      shuffleInterval: null
    }
  }

  /* 
    Clear interval when shuffleCount equal 0

    Had some error in this part using useEffect
    So i switched to class Component 
  */
  componentDidUpdate() {
    if (this.state.shuffleCount === 0) {
      clearInterval(this.state.shuffleInterval);
    }
  }

  /* Fisher-Yates's shuffle algorithm */
  shuffle = (array) => {
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

  startGame = (e) => {
    this.setState({
      activeCup: Math.floor(Math.random() * this.state.cupCount),
      showActive: true,
      result: null,
      isShuffling: true,
      shuffleInterval: setInterval(() => {
        this.setState({
          cups: this.shuffle(this.state.cups),
          shuffleCount: this.state.shuffleCount - 1
        })
      }, 700)
    })
  }

  getResult = (cup, e) => {
    if (!this.state.activeCup || this.result) return;
    this.setState({
      showActive: true,
      result: this.state.activeCup === cup ? 'Win' : 'Lose',
      shuffleCount: 5
    });
  }

  render() {
    return (<div>
      {/*<button onClick={e => this.startGame(e)}>Let's begin * !!!</button>*/}
      <Result result={this.state.result} />
      <ul className={classes.ShuffleList}>
        {this.state.cups.map(cup => {
          return <li key={cup}>
            <Cup
              active={this.state.showActive && this.state.activeCup === cup}
              chooseCup={this.getResult}
              cup={cup}
            />
          </li>
        })}
      </ul>
      <GameButton click={this.startGame}/>
    </div>)
  }

}