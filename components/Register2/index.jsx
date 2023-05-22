import React from "react";
import Frame3258 from "../Frame3258";
import Frame3253 from "../Frame3253";
import styled from "styled-components";
import {
  InterNormalSantasGray12px,
  ValignTextMiddle,
  InterSemiBoldOuterSpace19px,
  InterNormalTurquoisePearl12px,
  InterNormalSantasGray16px,
  InterBoldSnowDrift25px,
  InterBoldSnowDrift65px,
  InterBoldTurquoisePearl39px,
  ValignTextBottom,
} from "../../styledMixins";
import "./Register2.css";

function Register2(props) {
  const {
    pexelsCottonbroCgStudio88175321,
    pexelsCottonbroCgStudio88175322,
    title,
    dailyBetter,
    price1,
    number1,
    mo1,
    premium,
    price2,
    number2,
    mo2,
    xcontinue,
    monthly,
    weekly,
    yearly,
    frame32581Props,
    frame32531Props,
    frame32582Props,
    frame32532Props,
  } = props;

  return (
    <div className="register-2 screen">
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
          <Logo src="/img/logo-1.svg" alt="Logo" />
          <Title>{title}</Title>
          <Frame3250>
            <Frame32501>
              <Frame3259>
                <DailyBetter>{dailyBetter}</DailyBetter>
                <Frame286>
                  <Frame287>
                    <Price>{price1}</Price>
                    <Number>{number1}</Number>
                  </Frame287>
                  <Mo>{mo1}</Mo>
                </Frame286>
              </Frame3259>
              <Frame3258 popularOremIpsumDolorSitAmet={frame32581Props.popularOremIpsumDolorSitAmet} />
              <Frame3253
                frame32511Props={frame32531Props.frame32511Props}
                frame32512Props={frame32531Props.frame32512Props}
                frame32513Props={frame32531Props.frame32513Props}
                frame32514Props={frame32531Props.frame32514Props}
                frame32515Props={frame32531Props.frame32515Props}
                frame32516Props={frame32531Props.frame32516Props}
              />
            </Frame32501>
            <Frame3252>
              <Frame3259>
                <DailyBetter>{premium}</DailyBetter>
                <Frame286>
                  <Frame287>
                    <Price>{price2}</Price>
                    <Number>{number2}</Number>
                  </Frame287>
                  <Mo>{mo2}</Mo>
                </Frame286>
              </Frame3259>
              <Frame3258 popularOremIpsumDolorSitAmet={frame32582Props.popularOremIpsumDolorSitAmet} />
              <Frame3253
                frame32511Props={frame32532Props.frame32511Props}
                frame32512Props={frame32532Props.frame32512Props}
                frame32513Props={frame32532Props.frame32513Props}
                frame32514Props={frame32532Props.frame32514Props}
                frame32515Props={frame32532Props.frame32515Props}
                frame32516Props={frame32532Props.frame32516Props}
              />
            </Frame3252>
          </Frame3250>
          <ButtonMedium>
            <Continue>{xcontinue}</Continue>
            <IcroundKeyboardArrowRight
              src="/img/ic-round-keyboard-arrow-right-2.svg"
              alt="ic:round-keyboard-arrow-right"
            />
          </ButtonMedium>
          <ButtonMedium1>
            <MonthlySelected>
              <Monthly>{monthly}</Monthly>
            </MonthlySelected>
            <WeeklyDisabled>
              <Weekly>{weekly}</Weekly>
            </WeeklyDisabled>
            <WeeklyDisabled>
              <Weekly>{yearly}</Weekly>
            </WeeklyDisabled>
          </ButtonMedium1>
        </OverlapGroup>
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

const OverlapGroup = styled.div`
  position: relative;
  width: 2472px;
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
  height: 860px;
  top: 622px;
  left: 1321px;
`;

const Ellipse2094 = styled.div`
  position: absolute;
  width: 947px;
  height: 947px;
  top: 0;
  left: 1525px;
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
  left: 651px;
`;

const Title = styled.h1`
  ${InterBoldSnowDrift65px}
  position: absolute;
  top: 717px;
  left: 1076px;
  text-align: center;
  letter-spacing: -1.3px;
  line-height: 78px;
  white-space: nowrap;
`;

const Frame3250 = styled.div`
  display: flex;
  width: 762px;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  position: absolute;
  top: 912px;
  left: 910px;
`;

const Frame32501 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 20px 32px 28px;
  position: relative;
  flex: 1;
  background-color: var(--mine-shaft);
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid;
  border-color: var(--mantis);
  box-shadow: 2px 2px 25px #080b0b80;
`;

const Frame3259 = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  align-self: stretch;
`;

const DailyBetter = styled.div`
  ${InterBoldSnowDrift25px}
  position: relative;
  width: 158px;
  height: 26px;
  letter-spacing: -0.25px;
  line-height: 30px;
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
  height: 40px;
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
  ${InterBoldTurquoisePearl39px}
            position: relative;
  width: fit-content;
  margin-top: -0.95px;
  margin-bottom: -6.05px;
  letter-spacing: -0.78px;
  line-height: 46.8px;
  white-space: nowrap;
`;

const Mo = styled.div`
  ${InterNormalSantasGray12px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame3252 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 20px 32px 28px;
  position: relative;
  flex: 1;
  background-color: var(--mine-shaft);
  border-radius: 6px;
  overflow: hidden;
`;

const ButtonMedium = styled.div`
  display: flex;
  width: fit-content;
  height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px 12px 32px;
  position: absolute;
  top: 1334px;
  left: 1205px;
  background-color: var(--mantis);
  border-radius: 6px;
  overflow: hidden;
`;

const Continue = styled.div`
  ${InterSemiBoldOuterSpace19px}
  position: relative;
  width: fit-content;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 24.7px;
  white-space: nowrap;
`;

const IcroundKeyboardArrowRight = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const ButtonMedium1 = styled.div`
  display: flex;
  width: fit-content;
  height: 44px;
  align-items: center;
  justify-content: center;
  padding: 12px 4px;
  position: absolute;
  top: 828px;
  left: 1162px;
  background-color: var(--mine-shaft);
  border-radius: 8px;
  overflow: hidden;
`;

const MonthlySelected = styled.div`
  display: flex;
  width: fit-content;
  height: 36px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 14px;
  position: relative;
  margin-top: -8px;
  margin-bottom: -8px;
  background-color: var(--mantis);
  border-radius: 6px;
  overflow: hidden;
`;

const Monthly = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -7px;
  margin-bottom: -5px;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--outer-space);
  font-size: var(--font-size-l);
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const WeeklyDisabled = styled.div`
  display: flex;
  width: fit-content;
  height: 36px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 14px;
  position: relative;
  margin-top: -8px;
  margin-bottom: -8px;
  border-radius: 6px;
  overflow: hidden;
`;

const Weekly = styled.div`
  ${InterNormalSantasGray16px}
  position: relative;
  width: fit-content;
  margin-top: -7px;
  margin-bottom: -5px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default Register2;
