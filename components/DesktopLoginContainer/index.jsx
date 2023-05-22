import React from 'react';
import DesktopLoginFields from '../DesktopLoginFields';
import Frame313922 from '../Frame313922';
import styled from 'styled-components';
import { InterBoldSnowDrift65px } from '../../styledMixins';

function DesktopLoginContainer(props) {
  const { className, frame3139Props } = props;

  return (
    <ComponentLogin className={`component-login ${className || ''}`}>
      <Title className="title-5">Login</Title>
      <DesktopLoginFields inputFieldProps={frame3139Props.inputFieldProps} />
      <Frame313922 />
    </ComponentLogin>
  );
}

const ComponentLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  align-items: flex-start;
  gap: 48px;
  /* position: absolute; */
  top: 0;
  left: 0;

  &.component-login.component-login-1 {
    top: 772px;
    left: 824px;
  }
`;

const Title = styled.h1`
  ${InterBoldSnowDrift65px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -1.3px;
  line-height: 78px;
  white-space: nowrap;
`;

export default DesktopLoginContainer;
