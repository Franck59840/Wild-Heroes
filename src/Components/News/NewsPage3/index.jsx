import '../index.css';
import BackArrowBtn from '../NewsArrow';
import Melee from '../NewsImages/Melee.png';

function NewsPage3() {
  return (
    <article className="wholeArticle">
      <div className="backArrowDiv">
        <BackArrowBtn />
      </div>
      <div className="articleHead">
        <h3 className="articleTitles">
          Team up with two other players in the latest game mode available on
          WildHeroes!
        </h3>
      </div>
      <div className="articlePic">
        <img src={Melee} alt="New Game Mode" />
      </div>
      <div className="articleBody">
        <p className="articlePara">
          Heroes Assemble is a 3 versus 3 game mode that is releasing on PTR on
          November 22nd. Team up with two friends and come up with new creative
          strategies to defeat your opponent’s Heroes. Download the PTR here.
        </p>
      </div>
    </article>
  );
}

export default NewsPage3;
