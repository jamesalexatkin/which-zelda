import React, { useState } from 'react';
// import { Helmet } from 'react-helmet'
import './App.css';
import Console from './Console.js';
import Game from './Game.js';
import handhelds from './data/handhelds.json';
import home_consoles from './data/home_consoles.json';
import main_series from './data/main_series.json';
import spin_offs from './data/spin_offs.json';
import ordered_systems from './data/ordered_systems.json'


function App() {

  // Set page title
  document.title = 'Which Zelda games can I play?';

  const [ownedSystems, setOwnedSystems] = useState([]);
  var allGames = main_series.concat(spin_offs);
  var allSystems = home_consoles.concat(handhelds);

  function getElByPropVal(arr, prop, val) {

    for (var i = 0, length = arr.length; i < length; i++) {
      if (arr[i][prop] == val) {
        return arr[i];
      }
    }
  }

  function isPlayable(name, allGames, ownedSystems) {
    var gameObj = getElByPropVal(allGames, "name", name);

    var playable = false;

    const systemsPlayableOn = gameObj.systemsPlayableOn;

    // Make sure we consider all systems in order
    for (var i = 0; i < ordered_systems.length; i++) {
      const curSystem = ordered_systems[i];

      // Check that we own this system, otherwise nothing else matters
      if (ownedSystems.includes(curSystem)) {
        var systemObj = getElByPropVal(allSystems, "name", curSystem);

        // 3 cases:
        // 1. Game is playable in some fashion as it was released for that system
        // 2. Game is playable as the console is a variant of a console for which 1. is true
        // 3. Game is playable as the console provides backwards compatibility for a console for which 1. is true

        // Case 1. - natively playable
        for (var j = 0; j < systemsPlayableOn.length; j++) {
          const playableSystem = systemsPlayableOn[j];
          if (curSystem == playableSystem.name) {
            playable = true;
            break;
          }
        }

        // Case 2. - backwards compat
        if (systemObj.backwardsCompat) {

          for (var j = 0; j < systemsPlayableOn.length; j++) {
            const playableSystem = systemsPlayableOn[j];
            if (systemObj.bcWith == playableSystem.name) {
              playable = true;
              break;
            }
          }
        }

        // Case 3. - system variant
        if (systemObj.isVariant === true) {
          for (var j = 0; j < systemsPlayableOn.length; j++) {
            const playableSystem = systemsPlayableOn[j];
            if (systemObj.variantOf == playableSystem.name) {
              playable = true; break;
            }
          }
        }
      }
    }

    return playable;
  }

  function getGameDetail(name, allGames, ownedSystems) {
    var gameObj = getElByPropVal(allGames, "name", name);

    var detail = "Playable on:\n";

    const systemsPlayableOn = gameObj.systemsPlayableOn;

    // Make sure we consider all systems in order
    for (var i = 0; i < ordered_systems.length; i++) {

      const curSystem = ordered_systems[i];

      // Check that we own this system, otherwise nothing else matters
      if (ownedSystems.includes(curSystem)) {

        var systemObj = getElByPropVal(allSystems, "name", curSystem);

        // 3 cases:
        // 1. Game is playable in some fashion as it was released for that system
        // 2. Game is playable as the console is a variant of a console for which 1. is true
        // 3. Game is playable as the console provides backwards compatibility for a console for which 1. is true

        // Case 1. - natively playable
        for (var j = 0; j < systemsPlayableOn.length; j++) {
          const playableSystem = systemsPlayableOn[j];
          if (curSystem == playableSystem.name) {
            const consoleDetail = "• " + playableSystem.name + ": " + playableSystem.detail + "\n";
            detail += consoleDetail;
            break;
          }
        }

        // Case 2. - backwards compat
        if (systemObj.backwardsCompat) {

          for (var j = 0; j < systemsPlayableOn.length; j++) {
            const playableSystem = systemsPlayableOn[j];
            if (systemObj.bcWith == playableSystem.name) {
              const bcObj = getElByPropVal(systemsPlayableOn, "name", systemObj.bcWith);
              const bcDetail = bcObj.detail;
              const consoleDetail = "• " + systemObj.name + " (" + systemObj.bcAlias + " B/C): " + bcDetail + "\n";
              detail += consoleDetail;
            }
          }
        }

        // Case 3. - system variant
        if (systemObj.isVariant === true) {
          for (var j = 0; j < systemsPlayableOn.length; j++) {
            const playableSystem = systemsPlayableOn[j];
            if (systemObj.variantOf == playableSystem.name) {
              console.log()
              const variantObj = getElByPropVal(systemsPlayableOn, "name", systemObj.variantOf);
              const variantDetail = variantObj.detail;
              const consoleDetail = "• " + systemObj.name + ": " + variantDetail + "\n";
              detail += consoleDetail;
            }
          }
        }
      }
    }



    // TODO: delete this

    // for (var i = 0; i < systemsPlayableOn.length; i++) {

    //   const curSystem = systemsPlayableOn[i];
    //   var systemObj = getElByPropVal(allSystems, "name", curSystem.name);

    //   if (ownedSystems.includes(curSystem.name)) {
    //     const consoleDetail = "• " + curSystem.name + ": " + curSystem.detail + "\n";
    //     detail += consoleDetail;

    //     if (systemObj.backwardsCompat === true) {
    //       const bcObj = getElByPropVal(systemsPlayableOn, "name", systemObj.bcWith);
    //       const bcDetail = bcObj.detail;
    //       const consoleDetail = "• " + systemObj.name + "(" + systemObj.bcAlias + " B/C): " + bcDetail + "\n";
    //       detail += consoleDetail;
    //     }
    //   } else {
    //     console.log(JSON.stringify(systemObj));
    //     systemObj = getElByPropVal(allSystems, "name", curSystem.name);
    //     // if (systemObj.variant === true) {
    //     //   alert(systemObj.variantOf);
    //     //   const variantOfObj = getElByPropVal(systemsPlayableOn, "name", systemObj.variantOf);
    //     //   const variantOfDetail = variantOfObj.detail;
    //     //   const consoleDetail = "• " + systemObj.name + variantOfDetail + "\n";
    //     //   detail += consoleDetail;
    //     // }
    //   }





    // }

    return detail;
  }

  return (
    <div className="App">

      <h1>Which Zelda games can I play?</h1>

      <p>Select which consoles you have below and we'll show you which Zelda games are available to you.</p>

      <div>
        <h2>Consoles</h2>

        <h3>Home consoles</h3>

        <div className="row">
          {home_consoles.map(home_console => (
            <Console name={home_console.name} imgSrc={home_console.imgSrc} ownedSystems={ownedSystems} setOwnedSystems={setOwnedSystems} />
          ))}
        </div>

        <h3>Handheld consoles</h3>

        <div className="row">
          {handhelds.map(handheld => (
            <Console name={handheld.name} imgSrc={handheld.imgSrc} ownedSystems={ownedSystems} setOwnedSystems={setOwnedSystems} />
          ))}
        </div>


      </div>


      <div>
        <h2>Games</h2>

        <h3>Main series</h3>

        <div class="row">
          {main_series.map(game => (
            <Game name={game.name} imgSrc={game.imgSrc} playable={isPlayable(game.name, allGames, ownedSystems)} detail={getGameDetail(game.name, allGames, ownedSystems)} />
          ))}
        </div>

        <h3>Spin-offs</h3>

        <div class="row">
          {spin_offs.map(game => (
            <Game name={game.name} imgSrc={game.imgSrc} playable={isPlayable(game.name, allGames, ownedSystems)} detail={getGameDetail(game.name, allGames, ownedSystems)} />
          ))}
        </div>

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
