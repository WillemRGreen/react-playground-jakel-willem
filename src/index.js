import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bomb from './state-drills/Bomb';
import App from './App';
import HelloWorld from './state-drills/Hello';
import RouletteGun from './state-drills/RouletteGun';

const bulletInChamber = 8;
ReactDOM.render(
  
  
    <RouletteGun bulletInChamber={bulletInChamber} />,
  document.getElementById('root')
);