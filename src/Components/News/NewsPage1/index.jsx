import '../index.css';
import BackArrowBtn from '../NewsArrow';
import Expac from '../NewsImages/Expac.png';

function NewsPage1() {
  return (
    <article className="wholeArticle">
      <div className="backArrowDiv">
        <BackArrowBtn />
      </div>
      <div className="articleHead">
        <h3 className="articleTitles">
          The new Wild Heroes expansion is upon us! Check it out on
          twitch.tv/wildheroes on Dec. 16
        </h3>
        <div className="articlePic">
          <img src={Expac} alt="Future Fight" />
        </div>
      </div>
      <div className="articleBody">
        <p className="articlePara">
          The new Wild Heroes expansion, FUTURE FIGHT is upon us! Meet all the
          new heroes that are joining the Wild Heroes roster for this new
          expansion. Help Peter Quill and the Guardians of the Galaxy in
          repelling the forthcoming invasion. Join us on December 16th on
          twitch.tv/wildheroes to take part in the unveiling of this brand new
          and exciting expansion. Lead Director Jordan Henderson and American
          pro-player CARDPRINCESS will be there as well to showcase all the new
          cards, in what promises to be the most challenging expansion up to
          date.
        </p>
      </div>
    </article>
  );
}

export default NewsPage1;
