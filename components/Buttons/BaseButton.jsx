import React from 'react';

const BaseButton = ({ btnName, onClickHandler }) => {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      className=" text-main-dark-green bg-main-green w-[350px] py-3 rounded-md"
    >
      {btnName}
    </button>
  );
};

export default BaseButton;
