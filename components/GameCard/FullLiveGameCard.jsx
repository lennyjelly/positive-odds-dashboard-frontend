import React from 'react';
import * as NBAIcons from 'react-nba-logos';
import LiveIcon from '../../static/img/live_icon.png';
import BaseButton from '../Buttons/BaseButton';

const FullGameCard = ({ game }) => {
  const HomeIcon = NBAIcons[game.home.team];
  const AwayIcon = NBAIcons[game.away.team];

  return (
    <div className="w-desktop-card-w-live h-desktop-card-h-live bg-card-bg flex flex-col items-center p-8 rounded-xl mr-4">
      <div>
        <div></div>
        <div>
          <div className="flex items-center">
            <div>
              <AwayIcon />
            </div>
            <div className=" text-xl">
              {game.away.score} - {game.home.score}
            </div>
            <div>
              <HomeIcon />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className=" text-lg">{game.away.team}</div>
              <div className=" font-light text-xs">Away</div>
            </div>
            <div className=" px-11">
              <img src={LiveIcon} className="w-16" />
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
        <div className=" w-desktop-inner-w-live h-desktop-inner-h-live bg-secondary-bg-gray rounded-md flex flex-col justify-between p-4">
          <div className="flex justify-around">
            <div>{game.away.current.pointspread}</div>
            <div>Open spread</div>
            <div>{game.home.current.pointspread}</div>
          </div>
          <div className="flex justify-around">
            <div>{game.away.current.moneyline}</div>
            <div>Money line</div>
            <div>{game.home.current.moneyline}</div>
          </div>
          <div className="flex justify-around">
            <div>{game.away.current.liveline}</div>
            <div>Live line</div>
            <div>{game.home.current.liveline}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="my-2">Opening</div>
        <div className=" w-desktop-inner-w-live h-44 bg-secondary-bg-gray rounded-md flex flex-col justify-between p-4">
          <div className="flex justify-around">
            <div>{game.away.opening.pointspread}</div>
            <div>Open spread</div>
            <div>{game.home.opening.pointspread}</div>
          </div>
          <div className="flex justify-around">
            <div>{game.away.opening.moneyline}</div>
            <div>Money line</div>
            <div>{game.home.opening.moneyline}</div>
          </div>
          <div className="flex justify-around">
            <div>{game.away.opening.liveline}</div>
            <div>Live line</div>
            <div>{game.home.opening.liveline}</div>
          </div>
          <div className="flex justify-around">
            <div>{game.away.opening.injuries}</div>
            <div>Injuries</div>
            <div>{game.home.opening.injuries}</div>
          </div>
        </div>
      </div>

      <div className="mt-4 w-full px-10">
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

export default FullGameCard;
