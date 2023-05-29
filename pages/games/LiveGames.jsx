import React from 'react';
import FullGameCard from '../../components/GameCard/FullGameCard';
import { currentGame } from '../../constants/test.js';
import BlueEllipse from '../../static/img/blue-ellipse.png';

const LiveGames = () => {
  return (
    <div className="px-16">
      <div></div>
      <div className="flex text-xl py-6">
        <div>Tonight</div>
        <div className="flex items-center mx-2">
          <img src={BlueEllipse} />
        </div>
        <div className=" text-main-gray-text">April 24, Monday</div>
      </div>

      <div>
        {currentGame.map((game, id) => {
          return <FullGameCard key={id} game={game} />;
        })}
      </div>
    </div>
  );
};

export default LiveGames;
