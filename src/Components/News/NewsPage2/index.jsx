import '../index.css';
import BackArrowBtn from '../NewsArrow';
import Cards from '../NewsImages/Cards.png';

function NewsPage2() {
  return (
    <article className="wholeArticle">
      <div className="backArrowDiv">
        <BackArrowBtn />
      </div>
      <div className="articleHead">
        <h3 className="articleTitles">
          The Last Chance Open is starting soon and it is going to be a HEROIC
          event! Sign up now!
        </h3>
      </div>
      <div className="articlePic">
        <img src={Cards} alt="Cards" />
      </div>
      <div className="articleBody">
        <p className="articlePara">
          Grab your deck and join the battle! The Last Chance Open is taking
          place from December 3rd to 5th. It is the last major tournament of the
          season and the last chance for players to grab a qualifying spot for
          the Wild Heroes World Cup that will take place in Lille, France from
          December 17th to 19th and will gather the world’s very best players in
          an attempt to win the grand prize of 100.000€. Register here.
        </p>
      </div>
    </article>
  );
}

export default NewsPage2;
