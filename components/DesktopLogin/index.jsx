import React from 'react';
import DesktopLoginContainer from '../DesktopLoginContainer';
import styled from 'styled-components';
import './DesktopLogin.css';

function DesktopLogin(props) {
  const {
    overlapGroup,
    logo,
    pexelsCottonbroCgStudio88175323,
    frame3140Props,
  } = props;

  return (
    <div className="desktop-login screen">
      <Frame3245>
        <FlexCol>
          <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
            <Logo src={logo} alt="Logo" />
          </OverlapGroup>
          <Ellipse2095></Ellipse2095>
        </FlexCol>
        <OverlapGroup2>
          <OverlapGroup1>
            <PexelsCottonbroCgStudio88175323
              src={pexelsCottonbroCgStudio88175323}
              alt="pexels-cottonbro-cg-studio-8817532 3"
            />
            <DesktopLoginContainer
              frame3139Props={frame3140Props.frame3139Props}
            />
          </OverlapGroup1>
          <Ellipse2094></Ellipse2094>
        </OverlapGroup2>
      </Frame3245>
    </div>
  );
}

const Frame3245 = styled.div`
  position: relative;
  flex: 1;
  align-self: stretch;
  min-width: 1440px;
  height: 860px;
  background-color: var(--log-cabin);
  overflow: hidden;
`;

const FlexCol = styled.div`
  position: absolute;
  width: 1056px;
  top: 0;
  left: -571px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1434px;
  gap: 102px;
`;

const OverlapGroup = styled.div`
  height: 385px;
  align-self: flex-end;
  display: flex;
  padding: 64px 80px;
  align-items: flex-start;
  min-width: 485px;
  background-size: 100% 100%;
`;

const Logo = styled.img`
  width: 168px;
  height: 60px;
`;

const Ellipse2095 = styled.div`
  width: 947px;
  height: 947px;
  border-radius: 473.5px;
  filter: blur(10px);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(
        90.00000223517418,
        197.0000034570694,
        97.00000181794167,
        0.4000000059604645
      )
      0%,
    rgba(42.000001296401024, 54.00000058114529, 53.00000064074993, 0) 100%
  );
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 1391px;
  height: 1482px;
  top: -622px;
  left: 510px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 930px;
  height: 710px;
  top: 772px;
  left: 0;
`;

const PexelsCottonbroCgStudio88175323 = styled.img`
  position: absolute;
  width: 690px;
  height: 504px;
  top: 206px;
  left: 240px;
`;

const Ellipse2094 = styled.div`
  position: absolute;
  width: 947px;
  height: 947px;
  top: 0;
  left: 444px;
  border-radius: 473.5px;
  filter: blur(10px);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(
        90.00000223517418,
        197.0000034570694,
        97.00000181794167,
        0.4000000059604645
      )
      0%,
    rgba(42.000001296401024, 54.00000058114529, 53.00000064074993, 0) 100%
  );
`;

export default DesktopLogin;
