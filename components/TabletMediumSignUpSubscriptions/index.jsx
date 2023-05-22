import React from "react";
import TabsPayTime from "../TabsPayTime";
import Frame286 from "../Frame286";
import Description3 from "../Description3";
import Details2 from "../Details2";
import Frame2862 from "../Frame2862";
import ButtonContinue from "../ButtonContinue";
import styled from "styled-components";
import { InterBoldSnowDrift25px, InterBoldSnowDrift49px } from "../../styledMixins";
import "./TabletMediumSignUpSubscriptions.css";

function TabletMediumSignUpSubscriptions(props) {
  const {
    pexelsCottonbroCgStudio88175321,
    pexelsCottonbroCgStudio88175322,
    logo,
    title,
    dailyBetter,
    premium,
    tabsPayTimeProps,
    description31Props,
    details21Props,
    description32Props,
    details22Props,
    buttonContinueProps,
  } = props;

  return (
    <div className="tabletmedium-sign-up-subscriptions screen">
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
          <Title>{title}</Title>
          <Frame3264>
            <TabsPayTime className={tabsPayTimeProps.className} />
            <InfoSubscriptions>
              <DailyBetter>
                <NamePrice>
                  <DailyBetter1>{dailyBetter}</DailyBetter1>
                  <Frame286 />
                </NamePrice>
                <Description3 popularOremIpsumDolorSitAmet={description31Props.popularOremIpsumDolorSitAmet} />
                <Details2
                  frame314121Props={details21Props.frame314121Props}
                  frame314122Props={details21Props.frame314122Props}
                />
              </DailyBetter>
              <DailyBetter2>
                <NamePrice>
                  <DailyBetter1>{premium}</DailyBetter1>
                  <Frame2862 />
                </NamePrice>
                <Description3 popularOremIpsumDolorSitAmet={description32Props.popularOremIpsumDolorSitAmet} />
                <Details2
                  frame314121Props={details22Props.frame314121Props}
                  frame314122Props={details22Props.frame314122Props}
                />
              </DailyBetter2>
            </InfoSubscriptions>
            <ButtonContinue className={buttonContinueProps.className} />
          </Frame3264>
        </OverlapGroup>
      </Frame3245>
    </div>
  );
}

const Frame3245 = styled.div`
  position: relative;
  flex: 1;
  align-self: stretch;
  min-width: 826px;
  height: 1109px;
  background-color: var(--log-cabin);
  overflow: hidden;
`;

const OverlapGroup = styled.div`
  position: relative;
  width: 1915px;
  height: 2717px;
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
  top: 1639px;
  left: 764px;
`;

const Ellipse2094 = styled.div`
  position: absolute;
  width: 947px;
  height: 947px;
  top: 412px;
  left: 968px;
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
  top: 1770px;
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

const Title = styled.h1`
  ${InterBoldSnowDrift49px}
  position: absolute;
  top: 1161px;
  left: 878px;
  text-align: center;
  letter-spacing: -0.98px;
  line-height: 58.8px;
  white-space: nowrap;
`;

const Frame3264 = styled.div`
  display: flex;
  flex-direction: column;
  width: 666px;
  align-items: center;
  gap: 40px;
  position: absolute;
  top: 1253px;
  left: 708px;
`;

const InfoSubscriptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  position: relative;
  align-self: stretch;
`;

const DailyBetter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 20px 32px 32px;
  position: relative;
  align-self: stretch;
  background-color: var(--mine-shaft);
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid;
  border-color: var(--mantis);
  box-shadow: 2px 2px 25px #080b0b80;
`;

const NamePrice = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  align-self: stretch;
`;

const DailyBetter1 = styled.div`
  ${InterBoldSnowDrift25px}
  position: relative;
  width: 158px;
  height: 26px;
  letter-spacing: -0.25px;
  line-height: 30px;
  white-space: nowrap;
`;

const DailyBetter2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 20px 32px 32px;
  position: relative;
  align-self: stretch;
  background-color: var(--mine-shaft);
  border-radius: 6px;
  overflow: hidden;
`;

export default TabletMediumSignUpSubscriptions;
