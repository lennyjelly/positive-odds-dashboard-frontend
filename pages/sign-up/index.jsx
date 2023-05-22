import React from 'react';
import DesktopSignup from '../../components/DesktopSignUp';

const SignUp = () => {
  return (
    <div>
      <DesktopSignup
        overlapGroup1="/img/pexels-cottonbro-cg-studio-8817532-1.png"
        logo="/img/logo-2@2x.png"
        pexelsCottonbroCgStudio88175323="/img/pexels-cottonbro-cg-studio-8817532-2-3.png"
        componentSignUpProps={desktopSignUpData.componentSignUpProps}
      />
    </div>
  );
};

export default SignUp;

const inputField1Data = {
  email: 'Email',
  hussainFinesseCom: 'youremail@gmail.com',
};

const inputField2Data = {
  email: 'Username',
  hussainFinesseCom: 'username123089321',
};

const dropdown1Data = {
  icRoundKeyboardArrowRight: '/img/ic-round-keyboard-arrow-right@2x.png',
};

const inputNumber1Data = {
  dropdownProps: dropdown1Data,
};

const buttonNext1Data = {
  icRoundKeyboardArrowRight: '/img/ic-round-keyboard-arrow-right-1@2x.png',
};

const componentSignUp1Data = {
  inputField1Props: inputField1Data,
  inputField2Props: inputField2Data,
  inputNumberProps: inputNumber1Data,
  buttonNextProps: buttonNext1Data,
};

const desktopSignUpData = {
  componentSignUpProps: componentSignUp1Data,
};
