import React from "react";
import ComponentSignUp from "../ComponentSignUp";
import styled from "styled-components";
import "./TabletSignUp.css";

function TabletSignUp(props) {
  const { pexelsCottonbroCgStudio88175321, pexelsCottonbroCgStudio88175322, logo, componentSignUpProps } = props;

  return (
    <div className="tablet-sign-up screen">
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
          <ComponentSignUp
            className={componentSignUpProps.className}
            inputField1Props={componentSignUpProps.inputField1Props}
            inputField2Props={componentSignUpProps.inputField2Props}
            inputNumberProps={componentSignUpProps.inputNumberProps}
            buttonNextProps={componentSignUpProps.buttonNextProps}
          />
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
  height: 937px;
  background-color: var(--log-cabin);
  overflow: hidden;
`;

const OverlapGroup = styled.div`
  position: relative;
  width: 2015px;
  height: 2545px;
  top: -1034px;
  left: -628px;
`;

const PexelsCottonbroCgStudio88175321 = styled.img`
  position: absolute;
  width: 1113px;
  height: 1419px;
  top: 0;
  left: 0;
`;

const PexelsCottonbroCgStudio88175322 = styled.img`
  position: absolute;
  width: 1113px;
  height: 764px;
  top: 1467px;
  left: 864px;
`;

const Ellipse2094 = styled.div`
  position: absolute;
  width: 947px;
  height: 947px;
  top: 412px;
  left: 1068px;
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
  top: 1598px;
  left: 57px;
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
  width: 134px;
  height: 48px;
  top: 1098px;
  left: 692px;
`;

export default TabletSignUp;
