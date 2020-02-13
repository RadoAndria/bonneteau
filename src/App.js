import React from 'react';
import geek from './assets/images/geek.png';
import './App.css';
import {Bonneteau} from './containers/Bonneteau/Bonneteau';

function App() {
  return (
    <div className="App">
      <img alt="geek bonneteau" src={geek}/>
      <Bonneteau />
    </div>
  );
}

export default App;
