import React from "react";
import Frame3140 from "../Frame3140";
import styled from "styled-components";
import "./TabletLogin.css";

function TabletLogin(props) {
  const { pexelsCottonbroCgStudio88175321, pexelsCottonbroCgStudio88175322, logo, frame3140Props } = props;

  return (
    <div className="tablet-login screen">
      <Frame3245>
        <OverlapGroup>
          <PexelsCottonbroCgStudio88175321
            src={pexelsCottonbroCgStudio88175321}
            alt="pexels-cottonbro-cg-studio-8817532 1"
          />
          <PexelsCottonbroCgStudio88175322
            src={pexelsCottonbroCgStudio88175322}
            alt="pexels-cottonbro-cg-studio-8817532 2"
          />
          <Ellipse2094></Ellipse2094>
          <Ellipse2095></Ellipse2095>
          <Logo src={logo} alt="Logo" />
          <Frame3140 className={frame3140Props.className} frame3139Props={frame3140Props.frame3139Props} />
        </OverlapGroup>
      </Frame3245>
    </div>
  );
}

const Frame3245 = styled.div`
  position: relative;
  flex: 1;
  align-self: stretch;
  min-width: 926px;
  height: 860px;
  background-color: var(--log-cabin);
  overflow: hidden;
`;

const OverlapGroup = styled.div`
  position: relative;
  width: 1958px;
  height: 2056px;
  top: -622px;
  left: -571px;
`;

const PexelsCottonbroCgStudio88175321 = styled.img`
  position: absolute;
  width: 485px;
  height: 385px;
  top: 622px;
  left: 571px;
`;

const PexelsCottonbroCgStudio88175322 = styled.img`
  position: absolute;
  width: 690px;
  height: 504px;
  top: 978px;
  left: 807px;
`;

const Ellipse2094 = styled.div`
  position: absolute;
  width: 947px;
  height: 947px;
  top: 0;
  left: 1011px;
  border-radius: 473.5px;
  filter: blur(10px);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(90.00000223517418, 197.0000034570694, 97.00000181794167, 0.4000000059604645) 0%,
    rgba(42.000001296401024, 54.00000058114529, 53.00000064074993, 0) 100%
  );
`;

const Ellipse2095 = styled.div`
  position: absolute;
  width: 947px;
  height: 947px;
  top: 1109px;
  left: 0;
  border-radius: 473.5px;
  filter: blur(10px);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(90.00000223517418, 197.0000034570694, 97.00000181794167, 0.4000000059604645) 0%,
    rgba(42.000001296401024, 54.00000058114529, 53.00000064074993, 0) 100%
  );
`;

const Logo = styled.img`
  position: absolute;
  width: 168px;
  height: 60px;
  top: 686px;
  left: 635px;
`;

export default TabletLogin;
