import React from 'react';
import WildLogo from '../WildLogo';
import GameCard from '../GameCard';
import './index.css';

const heroId = [
  4, 17, 18, 30, 70, 106, 107, 149, 151, 160, 162, 165, 176, 185, 213, 222, 226,
  227, 228, 238, 242, 247, 251, 253, 278, 287, 289, 299, 303, 307, 308, 309,
  310, 322, 327, 332, 333, 337, 346, 353, 354, 356, 370, 374, 379, 383, 389,
  404, 414, 418, 419, 423, 430, 443, 450, 470, 479, 485, 487, 488, 489, 498,
  522, 526, 527, 531, 536, 538, 541, 542, 548, 550, 558, 566, 567, 574, 579,
  587, 589, 601, 613, 619, 620, 627, 630, 639, 655, 658, 659, 678, 680, 686,
  696, 697, 702, 705, 714, 717, 720, 729,
];

function Collection() {
  return (
    <div>
      <WildLogo />
      <ul className="collecDisplay">
        {heroId.map((data) => {
          return (
            <li className="cardDisplay">
              <GameCard heroApi={data} key={data} cardSize="L" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Collection;
