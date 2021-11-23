import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import star1 from './cardsIcons/etoile1.svg';
import star2 from './cardsIcons/etoile2.svg';
import star3 from './cardsIcons/etoile3.svg';
import star4 from './cardsIcons/etoile4.svg';
import star5 from './cardsIcons/etoile5.svg';
import './index.css';

const GameCard = ({ heroApi, cardSize }) => {
  const [basicInfo, setBasicInfo] = useState({});
  const [stats, setStats] = useState({});
  const [visual, setVisual] = useState({});
  const [borderColor, setBorderColor] = useState('');
  const [rarity, setRarity] = useState('');

  useEffect(() => {
    axios
      .get(`https://www.superheroapi.com/api.php/10226516634046414/${heroApi}`)
      .then((resp) => resp.data)
      .then((data) => {
        setBasicInfo(data);
        setVisual(data.image);
        setStats(data.powerstats);
      });
  }, []);

  const rarityLevel = Math.round(
    (parseInt(stats.power, 10) +
      parseInt(stats.intelligence, 10) +
      parseInt(stats.speed, 10) +
      parseInt(stats.strength, 10) +
      parseInt(stats.durability, 10) +
      parseInt(stats.combat, 10)) /
      6
  );

  useEffect(() => {
    if (rarityLevel >= 80) {
      setBorderColor('legendaryCard');
      setRarity(star5);
    } else if (rarityLevel >= 60) {
      setBorderColor('epicCard');
      setRarity(star4);
    } else if (rarityLevel >= 40) {
      setBorderColor('ultraCard');
      setRarity(star3);
    } else if (rarityLevel >= 20) {
      setBorderColor('rareCard');
      setRarity(star2);
    } else {
      setBorderColor('commonCard');
      setRarity(star1);
    }
  });

  return (
    <article className={`${borderColor} gameCard card${cardSize}`}>
      <section className="cardVisual">
        <img src={visual.url} alt="" />
      </section>
      <section className="playValue">
        <p className="battleStat">
          {Math.round(
            (parseInt(stats.power, 10) +
              parseInt(stats.speed, 10) +
              parseInt(stats.intelligence, 10)) /
              3
          )}
        </p>
        <div className="rarityStat">
          <img className="rarityStar" src={rarity} alt="" />
        </div>
        <p className="summonStat">
          {Math.round(
            (parseInt(stats.combat, 10) +
              parseInt(stats.speed, 10) +
              parseInt(stats.durability, 10)) /
              3
          )}
        </p>
      </section>
      <section className="charaName">
        <p>{basicInfo.name}</p>
      </section>
    </article>
  );
};

GameCard.propTypes = {
  heroApi: PropTypes.number.isRequired,
  cardSize: PropTypes.string.isRequired,
};

export default GameCard;
