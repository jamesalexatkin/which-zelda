import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Console from './Console.js';
import Game from './Game.js';
import handhelds from './data/handhelds.json';
import home_consoles from './data/home_consoles.json';
import main_series from './data/main_series.json';
import spin_offs from './data/spin_offs.json';

function App() {

  return (
    <div className="App">
      <h1>Which Zelda games can I play?</h1>

      <p>Select which consoles you have below and we'll show you which Zelda games are available to you.</p>

      <div>
        <h2>Consoles</h2>

        <h3>Home consoles</h3>

        <div class="row">
          {home_consoles.map(home_console => (
            <Console name={home_console.name} img_src={home_console.img_src}/>
          ))}
        </div>

        <h3>Handheld consoles</h3>        

        <div class="row">
          {handhelds.map(handheld => (
            <Console name={handheld.name} img_src={handheld.img_src}/>
          ))}
        </div>


      </div>


      <div>
        <h2>Games</h2>

        <h3>Main series</h3>

        <div class="row">
          {main_series.map(game => (
            <Game name={game.name} img_src={game.img_src}/>
          ))}
        </div>

        <h3>Spin-offs</h3>

        <div class="row">
          {spin_offs.map(game => (
            <Game name={game.name} img_src={game.img_src}/>
          ))}
        </div>

      </div>


    </div>
  );
}

export default App;
