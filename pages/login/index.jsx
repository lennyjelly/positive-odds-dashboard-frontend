import React from 'react';
import DesktopLogin from '../../components/DesktopLogin';

const Login = () => {
  return (
    <div>
      <DesktopLogin
        overlapGroup="/img/pexels-cottonbro-cg-studio-8817532-1.png"
        logo="/img/logo-4@2x.png"
        pexelsCottonbroCgStudio88175323="/img/pexels-cottonbro-cg-studio-8817532-2-3.png"
        frame3140Props={desktopLoginData.frame3140Props}
      />
    </div>
  );
};

export default Login;

const inputField7Data = {
  email: 'Email',
  hussainFinesseCom: 'youremail@gmail.com',
};

const frame313941Data = {
  inputFieldProps: inputField7Data,
};

const frame31401Data = {
  frame3139Props: frame313941Data,
};

const desktopLoginData = {
  frame3140Props: frame31401Data,
};
