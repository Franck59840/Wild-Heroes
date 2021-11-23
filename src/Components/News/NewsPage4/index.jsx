import '../index.css';
import BackArrowBtn from '../NewsArrow';
import BalancePatch from '../NewsImages/BalancePatch.jpeg';

function NewsPage4() {
  return (
    <article className="wholeArticle">
      <div className="backArrowDiv">
        <BackArrowBtn />
      </div>
      <div className="articleHead">
        <h3 className="articleTitles">
          Balance patch notes 4.3 - November 17th, 2021{' '}
        </h3>
      </div>
      <div className="articlePic">
        <img src={BalancePatch} alt="Balance Patch" />
      </div>
      <div className="articleBodyPatch">
        <div className="articlePatch">
          <h5 className="patchHeroName">Cyborg Superman</h5>
          <div className="patchHeroRight">
            <p className="patchHeroPara">Overall power decreased by 5</p>
            <p className="patchHeroPara">Summoning Cost increased by 3</p>
          </div>
          <h5 className="patchHeroName">Dr Manhattan</h5>
          <div className="patchHeroRight">
            <p className="patchHeroPara">Overall power decreased by 5</p>
          </div>
          <h5 className="patchHeroName">Galactus</h5>
          <div className="patchHeroRight">
            <p className="patchHeroPara">Overall power decreased by 3</p>
            <p className="patchHeroPara">Summoning Cost increased by 3</p>
          </div>
          <h5 className="patchHeroName">Superman</h5>
          <div className="patchHeroRight">
            <p className="patchHeroPara">Overall power decreased by 10</p>
            <p className="patchHeroPara">Summoning Cost increased by 3</p>
          </div>
          <h5 className="patchHeroName">Thanos</h5>
          <div className="patchHeroRight">
            <p className="patchHeroPara">Overall power decreased by 5</p>
          </div>
        </div>
        <div className="articlePara articleParaPatch">
          <p>
            We realized the most powerful of Heroes were a bit too strong in the
            current meta-game. The massive amount of the power residing in those
            cards is currently too good to pass on. This is a first step in
            addressing this issue and attempting to put those strongest Heroes
            (and more if needed) in line with what we think their current power
            level should be so as to make the Heroes pool more diverse and
            reduce their oppressiveness.
          </p>
        </div>
      </div>
    </article>
  );
}

export default NewsPage4;
