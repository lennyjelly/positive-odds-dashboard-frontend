import React from 'react';
import * as NBAIcons from 'react-nba-logos';
import BaseButton from '../Buttons/BaseButton';

const UpcomingGameCard = ({ game }) => {
  const HomeIcon = NBAIcons[game.home.team];
  const AwayIcon = NBAIcons[game.away.team];

  return (
    <div className="w-desktop-card-w-sched bg-card-bg flex flex-col items-center p-8 rounded-xl mr-4">
      <div>
        <div></div>
        <div>
          <div className="flex items-center">
            <div>
              <AwayIcon />
            </div>
            <div className=" text-xl opacity-0">100 - 100</div>
            <div>
              <HomeIcon />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className=" text-lg">{game.away.team}</div>
              <div className=" font-light text-xs">Away</div>
            </div>
            <div className="bg-secondary-white text-main-dark-green px-2 py-1 rounded mx-10">
              {/* TODO: Replace with scheduled time of game */}
              9:00 PM
            </div>
            <div className="flex flex-col items-center">
              <div className=" text-lg">{game.home.team}</div>
              <div className=" font-light text-xs">Home</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="my-2">Current</div>
        <div className=" w-desktop-inner-w-live h-desktop-inner-h-live rounded-md flex flex-col justify-between p-4">
          <div className="flex justify-around">
            <div>{game.away.current.pointspread}</div>
            <div className="font-light">Open spread</div>
            <div>{game.home.current.pointspread}</div>
          </div>
          <div className="flex justify-around">
            <div>{game.away.current.moneyline}</div>
            <div className="font-light">Money line</div>
            <div>{game.home.current.moneyline}</div>
          </div>
          <div className="flex justify-around">
            <div>{game.away.current.liveline}</div>
            <div className="font-light">Live line</div>
            <div>{game.home.current.liveline}</div>
          </div>
        </div>
      </div>

      <div className="mt-4 w-full">
        <BaseButton
          btnName={'Set Game Signals'}
          onClickHandler={() => {
            console.log('Set Game Signals');
          }}
        />
      </div>
    </div>
  );
};

export default UpcomingGameCard;
