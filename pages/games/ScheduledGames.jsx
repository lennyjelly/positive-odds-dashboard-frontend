import React from 'react';
import UpcomingGameCard from '../../components/GameCard/UpcomingGameCard';
import { currentGame } from '../../constants/test.js';
import BlueEllipse from '../../static/img/blue-ellipse.png';
import moment from 'moment';

const ScheduledGames = () => {
  return (
    <>
      {/* TODO: Confirm how many scheduled games to show */}
      {/* TODO: Create validation here to remove games that are already in progress */}
      {/* NOTE: Currently showing two game dates in advance */}
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
            return <UpcomingGameCard key={id} game={game} />;
          })}
        </div>
      </div>

      <div className="px-16">
        <div></div>
        <div className="flex text-xl py-6">
          <div>Tomorrow</div>
          <div className="flex items-center mx-2">
            <img src={BlueEllipse} />
          </div>
          <div className=" text-main-gray-text">
            {moment(new Date()).add(1, 'days').format('MMMM DD, dddd')}
          </div>
        </div>

        <div className="flex">
          {currentGame.map((game, id) => {
            return <UpcomingGameCard key={id} game={game} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ScheduledGames;
