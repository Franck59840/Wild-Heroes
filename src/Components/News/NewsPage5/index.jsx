import '../index.css';
import BackArrowBtn from '../NewsArrow';
import Player from '../NewsImages/Player.jpg';

function NewsPage5() {
  return (
    <article className="wholeArticle">
      <div className="backArrowDiv">
        <BackArrowBtn />
      </div>
      <div className="articleHead">
        <h3 className="articleTitles">CARDGOD: Story of a champion</h3>
      </div>
      <div className="articlePic">
        <img src={Player} alt="CARDGOD" />
      </div>
      <div className="articleBody">
        <p className="articlePara">
          As we’re slowly getting closer to the World Cup, we met with current
          World Champion CARDGOD in his hometown of Wijk aan Zee, Netherlands to
          talk about his year as a World Champion and his expectations for the
          future. Watch the full 16 minute video.
        </p>
      </div>
    </article>
  );
}

export default NewsPage5;
