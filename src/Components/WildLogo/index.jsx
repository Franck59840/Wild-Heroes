import React from 'react';
import WildHeroes from './Images/TopWildHeroes.png';
import './index.css';

const WildLogo = () => {
  return (
    <div className="wildLogo">
      <img src={WildHeroes} alt="Wild Heroes Logo" />
    </div>
  );
};

export default WildLogo;
