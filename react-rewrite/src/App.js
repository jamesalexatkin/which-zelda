import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Console from './Console.js';
import Game from './Game.js';
import handhelds from './data/handhelds.json';
import home_consoles from './data/home_consoles.json';
import main_series from './data/main_series.json';
import spin_offs from './data/spin_offs.json';

function App() {

  const [ownedSystems, setOwnedSystems] = useState([]);
  var allGames = main_series.concat(spin_offs);

  function getElByPropVal(arr, prop, val){
    for (var i = 0, length = arr.length; i < length; i++) {
        if (arr[i][prop] == val){
            return arr[i];
        }
    }
  }

  return (
    <div className="App">
      <h1>Which Zelda games can I play?</h1>

      <p>Select which consoles you have below and we'll show you which Zelda games are available to you.</p>

      <div>
        <h2>Consoles</h2>

        <h3>Home consoles</h3>

        <div class="row">
          {home_consoles.map(home_console => (
            <Console name={home_console.name} imgSrc={home_console.imgSrc} ownedSystems={ownedSystems} setOwnedSystems={setOwnedSystems}/>
          ))}
        </div>

        <h3>Handheld consoles</h3>

        <div class="row">
          {handhelds.map(handheld => (
            <Console name={handheld.name} imgSrc={handheld.imgSrc} ownedSystems={ownedSystems} />
          ))}
        </div>


      </div>


      <div>
        <h2>Games</h2>

        <h3>Main series</h3>

        <div class="row">
          {main_series.map(game => (
            <Game name={game.name} imgSrc={game.imgSrc} ownedSystems={ownedSystems} gameObj={getElByPropVal(allGames, "name", game.name)} />
          ))}
        </div>

        <h3>Spin-offs</h3>

        {/* <div class="row">
          {spin_offs.map(game => (
            <Game name={game.name} imgSrc={game.imgSrc} ownedSystems={ownedSystems} />
          ))}
        </div> */}

      </div>


      <footer>
        <p>Game trademarks and copyrights are properties of their respective owners. Nintendo properties are trademarks of Nintendo. © 2020 Nintendo.</p>
        <p>Images courtesy of <a href="https://commons.wikimedia.org/wiki/User:Evan-Amos">Evan Amos</a>. </p>
        <p class="footer-p">Website created by <a href="https://jamesatk.in">James Atkin</a>. © JAMES ATKIN 2020. <a href="https://github.com/jamesalexatkin/which-zelda">View on Github</a></p>
      </footer>


    </div>
  );
}

export default App;
