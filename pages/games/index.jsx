import React from 'react';
import { useLocation } from 'react-router-dom';
import LiveGames from './LiveGames';
import ScheduledGames from './ScheduledGames';
import LastNightGames from './LastNightGames';
import InjuryBanner from '../../components/Banner/InjuryBanner';
import Sidebar from '../../components/SideBar';

const Games = () => {
  const location = useLocation();

  const renderPageTitle = () => {
    switch (true) {
      case location.pathname.includes('live'):
        return 'Live Games';
      case location.pathname.includes('scheduled'):
        return 'Scheduled Games';
      case location.pathname.includes('last-night'):
        return "Last Night's Games";
      default:
        return 'Live Games';
    }
  };

  const renderGamePage = () => {
    switch (true) {
      case location.pathname.includes('live'):
        return <LiveGames />;
      case location.pathname.includes('scheduled'):
        return <ScheduledGames />;
      case location.pathname.includes('last-night'):
        return <LastNightGames />;
      default:
        return <LiveGames />;
    }
  };

  return (
    <div className="font-bold w-full h-screen bg-main-bg-gray text-main-white">
      {/* <Sidebar /> */}

      {/* Top Section */}
      <div className="flex justify-between">
        <div className="text-2xl">{renderPageTitle()}</div>

        <div className="flex">
          <div>Bell Icon</div>
          <div>Search Input</div>
        </div>
      </div>

      <div>
        <InjuryBanner />
      </div>
      {renderGamePage()}
    </div>
  );
};

export default Games;
