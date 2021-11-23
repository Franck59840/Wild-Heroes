import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLogo from './Logo/NavbarLogo.png';
import WildHeroesBurger from './Logo/WildHeroesBurger.png';
import BlackHome from './Logo/BlackHome.png';
import BlackGame from './Logo/BlackGame.png';
import BlackCollection from './Logo/BlackCollection.png';
import BlackRules from './Logo/BlackRules.png';
import BlackNews from './Logo/BlackNews.png';
import YellowBars from './Logo/YellowBars.png';
import YellowHome from './Logo/YellowHome.png';
import YellowGame from './Logo/YellowGame.png';
import YellowCollection from './Logo/YellowCollection.png';
import YellowRules from './Logo/YellowRules.png';
import YellowNews from './Logo/YellowNews.png';
import './index.css';

function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [yellowHome, setYellowHome] = useState(false);
  const showYellowHome = () => setYellowHome(true);
  const hideYellowHome = () => setYellowHome(false);
  const [yellowGame, setYellowGame] = useState(false);
  const showYellowGame = () => setYellowGame(true);
  const hideYellowGame = () => setYellowGame(false);
  const [yellowCollection, setYellowCollection] = useState(false);
  const showYellowCollection = () => setYellowCollection(true);
  const hideYellowCollection = () => setYellowCollection(false);
  const [yellowRules, setYellowRules] = useState(false);
  const showYellowRules = () => setYellowRules(true);
  const hideYellowRules = () => setYellowRules(false);
  const [yellowNews, setYellowNews] = useState(false);
  const showYellowNews = () => setYellowNews(true);
  const hideYellowNews = () => setYellowNews(false);

  return (
    <>
      <button type="button" className="yellowBars" onClick={showSidebar}>
        <img src={YellowBars} alt="Yellow Bars" />
      </button>
      <nav className={sidebar ? 'navMenuActive' : 'navBar'}>
        <button type="button" className="menuLogo" onClick={showSidebar}>
          <img src={NavbarLogo} alt="Wild Heroes" />
        </button>
        <div className="burgerImg">
          <img src={WildHeroesBurger} alt="Wild Heroes" />
        </div>
        <Link
          to="/"
          className="menuBars"
          onMouseEnter={showYellowHome}
          onMouseLeave={hideYellowHome}
          onClick={showSidebar}
        >
          <img src={yellowHome ? YellowHome : BlackHome} alt="Home" />
          <p className={sidebar ? 'textShow' : 'textHide'}>Home</p>
        </Link>
        <Link
          to="/newgame"
          className="menuBars"
          onMouseEnter={showYellowGame}
          onMouseLeave={hideYellowGame}
          onClick={showSidebar}
        >
          <img src={yellowGame ? YellowGame : BlackGame} alt="Game" />
          <p className={sidebar ? 'textShow' : 'textHide'}>Play Game</p>
        </Link>
        <Link
          to="/collection"
          className="menuBars"
          onMouseEnter={showYellowCollection}
          onMouseLeave={hideYellowCollection}
          onClick={showSidebar}
        >
          <img
            src={yellowCollection ? YellowCollection : BlackCollection}
            alt="Collection"
          />
          <p className={sidebar ? 'textShow' : 'textHide'}>Collection</p>
        </Link>
        <Link
          to="/rules"
          className="menuBars"
          onMouseEnter={showYellowRules}
          onMouseLeave={hideYellowRules}
          onClick={showSidebar}
        >
          <img src={yellowRules ? YellowRules : BlackRules} alt="Rules" />
          <p className={sidebar ? 'textShow' : 'textHide'}>Rules</p>
        </Link>
        <Link
          to="/news"
          className="menuBars"
          onMouseEnter={showYellowNews}
          onMouseLeave={hideYellowNews}
          onClick={showSidebar}
        >
          <img src={yellowNews ? YellowNews : BlackNews} alt="News" />
          <p className={sidebar ? 'textShow' : 'textHide'}>News</p>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
