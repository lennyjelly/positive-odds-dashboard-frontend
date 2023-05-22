import React from "react";
import TabsPayTime from "../TabsPayTime";
import Description2 from "../Description2";
import Frame3141 from "../Frame3141";
import MoneyAlert2 from "../MoneyAlert2";
import styled from "styled-components";
import {
  InterNormalTurquoisePearl12px,
  InterBoldSnowDrift20px,
  InterNormalSantasGray12px,
  InterBoldTurquoisePearl31px,
  DesktopPoDashboardbody1Semibold,
  InterBoldSnowDrift49px,
  ValignTextMiddle,
  ValignTextBottom,
} from "../../styledMixins";
import "./MobileSignUpSubscriptions.css";

function MobileSignUpSubscriptions(props) {
  const {
    pexelsCottonbroCgStudio88175321,
    logo,
    title,
    pexelsCottonbroCgStudio88175322,
    dailyBetter,
    price1,
    number1,
    mo1,
    premium,
    price2,
    number2,
    mo2,
    xcontinue,
    icRoundKeyboardArrowRight,
    tabsPayTimeProps,
    description21Props,
    frame31411Props,
    frame31412Props,
    description22Props,
    moneyAlert21Props,
    moneyAlert22Props,
    moneyAlert23Props,
    frame31413Props,
  } = props;

  return (
    <div className="mobile-sign-up-subscriptions screen">
      <Frame3245>
        <OverlapGroup>
          <PexelsCottonbroCgStudio88175321
            src={pexelsCottonbroCgStudio88175321}
            alt="pexels-cottonbro-cg-studio-8817532 1"
          />
          <Ellipse2094></Ellipse2094>
          <Logo src={logo} alt="Logo" />
          <Title>{title}</Title>
        </OverlapGroup>
        <OverlapGroup1>
          <PexelsCottonbroCgStudio88175322
            src={pexelsCottonbroCgStudio88175322}
            alt="pexels-cottonbro-cg-studio-8817532 2"
          />
          <Ellipse2095></Ellipse2095>
          <Frame3264>
            <TabsPayTime className={tabsPayTimeProps.className} />
            <InfoSubscriptions>
              <DailyBetter>
                <NamePrice>
                  <DailyBetter1>{dailyBetter}</DailyBetter1>
                  <Frame286>
                    <Frame287>
                      <Price>{price1}</Price>
                      <Number>{number1}</Number>
                    </Frame287>
                    <Mo>{mo1}</Mo>
                  </Frame286>
                </NamePrice>
                <Description2 popularOremIpsumDolorSitAmet={description21Props.popularOremIpsumDolorSitAmet} />
                <Details>
                  <Frame3141
                    moneyAlert21Props={frame31411Props.moneyAlert21Props}
                    moneyAlert22Props={frame31411Props.moneyAlert22Props}
                    moneyAlert23Props={frame31411Props.moneyAlert23Props}
                  />
                  <Frame3141
                    moneyAlert21Props={frame31412Props.moneyAlert21Props}
                    moneyAlert22Props={frame31412Props.moneyAlert22Props}
                    moneyAlert23Props={frame31412Props.moneyAlert23Props}
                  />
                </Details>
              </DailyBetter>
              <DailyBetter2>
                <NamePrice>
                  <DailyBetter1>{premium}</DailyBetter1>
                  <Frame286>
                    <Frame287>
                      <Price>{price2}</Price>
                      <Number>{number2}</Number>
                    </Frame287>
                    <Mo>{mo2}</Mo>
                  </Frame286>
                </NamePrice>
                <Description2 popularOremIpsumDolorSitAmet={description22Props.popularOremIpsumDolorSitAmet} />
                <Details>
                  <Frame31411>
                    <MoneyAlert2
                      iconThumbs_Up={moneyAlert21Props.iconThumbs_Up}
                      inTheMoneyAlert={moneyAlert21Props.inTheMoneyAlert}
                    />
                    <MoneyAlert2
                      iconThumbs_Up={moneyAlert22Props.iconThumbs_Up}
                      inTheMoneyAlert={moneyAlert22Props.inTheMoneyAlert}
                      className={moneyAlert22Props.className}
                    />
                    <MoneyAlert2
                      iconThumbs_Up={moneyAlert23Props.iconThumbs_Up}
                      inTheMoneyAlert={moneyAlert23Props.inTheMoneyAlert}
                    />
                  </Frame31411>
                  <Frame3141
                    moneyAlert21Props={frame31413Props.moneyAlert21Props}
                    moneyAlert22Props={frame31413Props.moneyAlert22Props}
                    moneyAlert23Props={frame31413Props.moneyAlert23Props}
                  />
                </Details>
              </DailyBetter2>
            </InfoSubscriptions>
            <ButtonContinue>
              <Continue>{xcontinue}</Continue>
              <IcroundKeyboardArrowRight src={icRoundKeyboardArrowRight} alt="ic:round-keyboard-arrow-right" />
            </ButtonContinue>
          </Frame3264>
        </OverlapGroup1>
      </Frame3245>
    </div>
  );
}

const Frame3245 = styled.div`
  position: relative;
  flex: 1;
  align-self: stretch;
  min-width: 485px;
  height: 1075px;
  background-color: var(--log-cabin);
  overflow: hidden;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 1096px;
  height: 776px;
  top: -565px;
  left: -328px;
`;

const PexelsCottonbroCgStudio88175321 = styled.img`
  position: absolute;
  width: 600px;
  height: 765px;
  top: 0;
  left: 0;
`;

const Ellipse2094 = styled.div`
  position: absolute;
  width: 610px;
  height: 610px;
  top: 166px;
  left: 486px;
  border-radius: 305px;
  filter: blur(10px);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(90.00000223517418, 197.0000034570694, 97.00000181794167, 0.4000000059604645) 0%,
    rgba(42.000001296401024, 54.00000058114529, 53.00000064074993, 0) 100%
  );
`;

const Logo = styled.img`
  position: absolute;
  width: 111px;
  height: 40px;
  top: 613px;
  left: 515px;
`;

const Title = styled.h1`
  ${InterBoldSnowDrift49px}
  position: absolute;
  top: 700px;
  left: 409px;
  text-align: center;
  letter-spacing: -0.98px;
  line-height: 58.8px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1071px;
  height: 1207px;
  top: 219px;
  left: -348px;
`;

const PexelsCottonbroCgStudio88175322 = styled.img`
  position: absolute;
  width: 600px;
  height: 412px;
  top: 577px;
  left: 471px;
`;

const Ellipse2095 = styled.div`
  position: absolute;
  width: 610px;
  height: 610px;
  top: 597px;
  left: 0;
  border-radius: 305px;
  filter: blur(10px);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(90.00000223517418, 197.0000034570694, 97.00000181794167, 0.4000000059604645) 0%,
    rgba(42.000001296401024, 54.00000058114529, 53.00000064074993, 0) 100%
  );
`;

const Frame3264 = styled.div`
  display: flex;
  flex-direction: column;
  width: 421px;
  align-items: center;
  gap: 40px;
  position: absolute;
  top: 0;
  left: 380px;
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
  ${ValignTextBottom}
  ${InterBoldSnowDrift20px}
            position: relative;
  width: 158px;
  height: 26px;
  letter-spacing: -0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame286 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 4px;
  position: relative;
`;

const Frame287 = styled.div`
  display: flex;
  width: fit-content;
  height: 30px;
  align-items: flex-start;
  position: relative;
`;

const Price = styled.div`
  ${ValignTextMiddle}
  ${InterNormalTurquoisePearl12px}
            position: relative;
  width: 8px;
  height: 26px;
  margin-top: -0.95px;
  letter-spacing: 0;
  line-height: 15.4px;
`;

const Number = styled.div`
  ${ValignTextBottom}
  ${InterBoldTurquoisePearl31px}
            position: relative;
  width: fit-content;
  margin-top: -0.95px;
  margin-bottom: -6.05px;
  letter-spacing: -0.62px;
  line-height: 37.2px;
  white-space: nowrap;
`;

const Mo = styled.div`
  ${InterNormalSantasGray12px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Details = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  align-self: stretch;
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

const Frame31411 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  flex: 1;
`;

const ButtonContinue = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px 12px 32px;
  position: relative;
  align-self: stretch;
  background-color: var(--mantis);
  border-radius: 6px;
  overflow: hidden;
`;

const Continue = styled.div`
  ${DesktopPoDashboardbody1Semibold}
  position: relative;
  width: fit-content;
  margin-top: -1.5px;
  font-weight: 600;
  color: var(--outer-space-2);
  line-height: 24.7px;
  white-space: nowrap;
`;

const IcroundKeyboardArrowRight = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default MobileSignUpSubscriptions;
