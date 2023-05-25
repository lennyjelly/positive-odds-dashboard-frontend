import React from 'react';
import FullGameCard from '../../components/GameCard/FullGameCard';
import { currentGame } from '../../constants/test.js';

const LiveGames = () => {
  return (
    <div>
      <div className="flex text-xl">
        <div>Tonight</div>
        <div>April 24, Monday</div>
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
