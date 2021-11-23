import React from 'react';
import WildLogo from '../WildLogo';
import CaptainHammer from './Gif/captain-hammer.gif';
import './index.css';

function Game() {
  return (
    <div className="gameLayout">
      <WildLogo />
      <div className="wop">
        <div className="wopGif">
          <img src={CaptainHammer} alt="Captain America with Thor's hammer" />
        </div>
        <h3 className="wopTitle">Work In Progress !</h3>
        <h4 className="wopSub">
          But first, we have to take the hammer back...
        </h4>
      </div>
    </div>
  );
}

export default Game;
