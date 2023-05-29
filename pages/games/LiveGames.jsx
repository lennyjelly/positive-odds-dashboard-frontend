import React from 'react';
import FullLiveGameCard from '../../components/GameCard/FullLiveGameCard';
import { currentGame } from '../../constants/test.js';
import BlueEllipse from '../../static/img/blue-ellipse.png';
import moment from 'moment';

const LiveGames = () => {
  return (
    <div className="px-16">
      <div></div>
      <div className="flex text-xl py-6">
        <div>Tonight</div>
        <div className="flex items-center mx-2">
          <img src={BlueEllipse} />
        </div>
        <div className=" text-main-gray-text">
          {moment(new Date()).format('MMMM DD, dddd')}
        </div>
      </div>

      <div className="flex">
        {currentGame.map((game, id) => {
          return <FullLiveGameCard key={id} game={game} />;
        })}
      </div>
    </div>
  );
};

export default LiveGames;
