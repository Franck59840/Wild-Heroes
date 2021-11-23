import React from 'react';
import WildLogo from '../WildLogo';
import './index.css';

function Rules() {
  return (
    <body className="rulesBody">
      <div>
        <WildLogo />
      </div>
      <h3 className="rulesTitles">Deck building</h3>
      <p className="rulesPara">
        1. At the start of a game, the player chooses one card among three
        randomly suggested cards to be added to his deck.
      </p>
      <p className="rulesPara">
        2. This operation is repeated until the player has 10 cards in his deck.
      </p>
      <h3 className="rulesTitles">Start of the game and resources</h3>
      <p className="rulesPara">
        3. At the start of each turn, players draw until they have 5 cards in
        hand.
      </p>
      <p className="rulesPara">
        4. Players start with 50 Summoning Points. At the start of each turn,
        the total number of Summoning Points is increased by 40.
      </p>
      <p className="rulesPara">
        5. Players can summon as many Heroes as their Summoning Points allows
        it.
      </p>
      <p className="rulesPara">6. Players start the game with 3 Hit Points.</p>
      <h3 className="rulesTitles">Battle phase</h3>
      <p className="rulesPara">
        7. The Attack Points of the Heroes on each player’s side are added and
        compared to the opposite player’s.
      </p>
      <p className="rulesPara">
        8. The player with the highest Attack Points wins the duel. The loser of
        the duel loses one Hit Point.
      </p>
      <p className="rulesPara">
        9. If the Attack Points of the Heroes on each side of the board are
        equal, both players lose a Hit Points.
      </p>
      <h3 className="rulesTitles">End of the game.</h3>
      <p className="rulesPara lastPara">
        10. When a player’s Hit Points reach 0, the game ends.
      </p>
    </body>
  );
}

export default Rules;
