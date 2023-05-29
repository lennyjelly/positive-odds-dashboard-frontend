import React from 'react';
import InfoIcon from '../../static/img/info-icon.png';

const InjuryBanner = ({ message }) => {
  return (
    <div className="flex justify-between bg-main-bg-black py-4 px-16">
      <div className="flex">
        <img src={InfoIcon} className=" w-5" />
        <div className="mx-3 font-normal flex">
          <p className="font-bold mr-2">Update:</p> {message}
        </div>
      </div>

      <div className=" text-main-green font-semibold cursor-pointer hover:underline">
        View Injured Players
      </div>
    </div>
  );
};

export default InjuryBanner;
