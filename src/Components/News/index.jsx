import React from 'react';

import { NavLink } from 'react-router-dom';
import './index.css';
import WildLogo from '../WildLogo';
import Expac from './NewsImages/Expac.png';
import Cards from './NewsImages/Cards.png';
import Melee from './NewsImages/Melee.png';

function News() {
  return (
    <div className="articlePage">
      <div>
        <WildLogo />
      </div>
      <NavLink to="/newspage1" className="articleBlocs firstArticleBlocs">
        <h3>
          The new Wild Heroes expansion is upon us! Check it out on
          twitch.tv/wildheroes on Dec. 16! <span> Learn More...</span>
        </h3>
        <img className="articleThumbnail" src={Expac} alt="Future Fight" />
      </NavLink>

      <NavLink to="/newspage2" className="articleBlocs firstArticleBlocs">
        <h3>
          The Last Chance Open is starting soon and it is going to be a HEROIC
          event!
          <span> Sign up now!</span>
        </h3>
        <img className="articleThumbnail" src={Cards} alt="Cards" />
      </NavLink>

      <NavLink to="/newspage3" className=" articleBlocs firstArticleBlocs">
        <h3>
          Team up with two other players in the latest game mode available on
          WildHeroes!
          <span> Learn More...</span>
        </h3>
        <img className="articleThumbnail" src={Melee} alt="3v3" />
      </NavLink>

      <NavLink to="/newspage4" className="articleBlocs otherArticleBlocs">
        <h3>
          Balance patch notes 1.3 - November 17th, 2021
          <span> Learn More...</span>
        </h3>
      </NavLink>

      <NavLink to="/newspage5" className="articleBlocs otherArticleBlocs">
        <h3>
          CARDGOD: Story of a champion<span> Learn More...</span>
        </h3>
      </NavLink>

      <li className="articleBlocs otherArticleBlocs showMoreBloc">
        <h3>...</h3>
      </li>
    </div>
  );
}

export default News;
