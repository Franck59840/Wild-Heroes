import './index.css';
import { Link } from 'react-router-dom';
import ArticleHomeBlog from '../ArticleHomeBlog';
import fight from './Images/fight.png';
import cardsgame from './Images/cardsGame.png';
import heroeslist from './Images/heroesList.png';

function HomeBlog() {
  return (
    <section className="homeNews">
      <h3> News </h3>
      <div className="articleList">
        <Link to="/newspage1">
          <ArticleHomeBlog
            title="Future Fight: our latest expansion"
            image={fight}
          />
        </Link>
        <Link to="/newspage3">
          <ArticleHomeBlog
            title="Join the fray in 3v3 battles"
            image={heroeslist}
          />
        </Link>
        <Link to="/newspage2">
          <ArticleHomeBlog
            title="Register for the Last Chance Open"
            image={cardsgame}
          />
        </Link>
      </div>
    </section>
  );
}

export default HomeBlog;
