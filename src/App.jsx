import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Game from './Components/Game';
import Collection from './Components/Collection';
import Rules from './Components/Rules';
import News from './Components/News';
import NewsPage1 from './Components/News/NewsPage1';
import NewsPage2 from './Components/News/NewsPage2';
import NewsPage3 from './Components/News/NewsPage3';
import NewsPage4 from './Components/News/NewsPage4';
import NewsPage5 from './Components/News/NewsPage5';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="navHome">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/newgame" component={Game} />
            <Route path="/collection" component={Collection} />
            <Route path="/rules" component={Rules} />
            <Route path="/news" component={News} />
            <Route path="/newspage1" component={NewsPage1} />
            <Route path="/newspage2" component={NewsPage2} />
            <Route path="/newspage3" component={NewsPage3} />
            <Route path="/newspage4" component={NewsPage4} />
            <Route path="/newspage5" component={NewsPage5} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
