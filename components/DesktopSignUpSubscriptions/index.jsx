import React, { useState } from 'react';
import Frame286 from '../Frame286';
import Frame3258 from '../Frame3258';
import Frame3253 from '../Frame3253';
import Frame2862 from '../Frame2862';
import ButtonContinue from '../ButtonContinue';

import styled from 'styled-components';
import {
  InterBoldSnowDrift25px,
  InterBoldSnowDrift65px,
  DesktopPoDashboardbody2Semibold,
  DesktopPoDashboardbody2Regular,
} from '../../styledMixins';
import './DesktopSignUpSubscriptions.css';

function DesktopSignUpSubscriptions(props) {
  const {
    pexelsCottonbroCgStudio88175321,
    pexelsCottonbroCgStudio88175323,
    logo,
    dailyBetter,
    premium,
    title,
    frame32581Props,
    frame32531Props,
    frame32582Props,
    frame32532Props,
    className,
  } = props;

  const [selectedPlan, setSelectedPlan] = useState('monthly-daily-better');

  return (
    <div className="desktop-sign-up-subscriptions screen">
      <Frame3245>
        <OverlapGroup>
          <PexelsCottonbroCgStudio88175321
            src={pexelsCottonbroCgStudio88175321}
            alt="pexels-cottonbro-cg-studio-8817532 1"
          />
          <PexelsCottonbroCgStudio88175323
            src={pexelsCottonbroCgStudio88175323}
            alt="pexels-cottonbro-cg-studio-8817532 3"
          />
          <Ellipse2094></Ellipse2094>
          <Ellipse2095></Ellipse2095>
          <Logo src={logo} alt="Logo" />
          <InfoSubscriptions>
            <DailyBetter
              selectedPlan={selectedPlan === 'monthly-daily-better'}
              onClick={() => setSelectedPlan('monthly-daily-better')}
            >
              <NamePrice>
                <DailyBetter1>{dailyBetter}</DailyBetter1>
                <Frame286 />
              </NamePrice>
              <Frame3258
                popularOremIpsumDolorSitAmet={
                  frame32581Props.popularOremIpsumDolorSitAmet
                }
              />
              <Frame3253
                frame32511Props={frame32531Props.frame32511Props}
                frame32512Props={frame32531Props.frame32512Props}
                frame32513Props={frame32531Props.frame32513Props}
                frame32514Props={frame32531Props.frame32514Props}
                frame32515Props={frame32531Props.frame32515Props}
                frame32516Props={frame32531Props.frame32516Props}
              />
            </DailyBetter>
            <Premium
              selectedPlan={selectedPlan === 'monthly-premium'}
              onClick={() => setSelectedPlan('monthly-premium')}
            >
              <NamePrice>
                <DailyBetter1>{premium}</DailyBetter1>
                <Frame2862 />
              </NamePrice>
              <Frame3258
                popularOremIpsumDolorSitAmet={
                  frame32582Props.popularOremIpsumDolorSitAmet
                }
              />
              <Frame3253
                frame32511Props={frame32532Props.frame32511Props}
                frame32512Props={frame32532Props.frame32512Props}
                frame32513Props={frame32532Props.frame32513Props}
                frame32514Props={frame32532Props.frame32514Props}
                frame32515Props={frame32532Props.frame32515Props}
                frame32516Props={frame32532Props.frame32516Props}
              />
            </Premium>
          </InfoSubscriptions>
          {/* TODO: integrate API  */}
          <ButtonContinue />
        </OverlapGroup>
        <Title>{title}</Title>
        <TabsPayTime1 className={`tabs-pay-time ${className || ''}`}>
          <MonthlySelected className="monthly-selected">
            <Monthly className="monthly">Monthly</Monthly>
          </MonthlySelected>
          <WeeklyDisabled className="weekly-disabled">
            <Weekly className="weekly">Weekly</Weekly>
          </WeeklyDisabled>
          <WeeklyDisabled className="yearly-disabled">
            <Weekly className="yearly">Yearly</Weekly>
          </WeeklyDisabled>
        </TabsPayTime1>
      </Frame3245>
    </div>
  );
}

const TabsPayTime1 = styled.div`
  display: flex;
  width: fit-content;
  height: 44px;
  align-items: center;
  justify-content: center;
  padding: 12px 4px;
  position: absolute;
  top: 206px;
  left: 591px;
  background-color: var(--mine-shaft);
  border-radius: 8px;
  overflow: hidden;

  &.tabs-pay-time.tabs-pay-time-1 {
    position: relative;
    top: unset;
    left: unset;
  }

  &.tabs-pay-time.tabs-pay-time-2 {
    position: relative;
    top: unset;
    left: unset;
  }
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
  ${DesktopPoDashboardbody2Semibold}
  position: relative;
  width: fit-content;
  margin-top: -7px;
  margin-bottom: -5px;
  font-weight: 600;
  color: var(--outer-space-2);
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
  ${DesktopPoDashboardbody2Regular}
  position: relative;
  width: fit-content;
  margin-top: -7px;
  margin-bottom: -5px;
  font-weight: 400;
  color: var(--santas-gray);
  line-height: 24px;
  white-space: nowrap;
`;

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
  position: absolute;
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

const PexelsCottonbroCgStudio88175323 = styled.img`
  position: absolute;
  width: 690px;
  height: 504px;
  top: 978px;
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

const Logo = styled.img`
  position: absolute;
  width: 168px;
  height: 60px;
  top: 686px;
  left: 651px;
`;

const InfoSubscriptions = styled.div`
  display: flex;
  width: 762px;
  height: 374px;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  position: absolute;
  top: 912px;
  left: 910px;
`;

const DailyBetter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 20px 32px 28px;
  position: relative;
  flex: 1;
  align-self: stretch;
  background-color: var(--mine-shaft);
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid;
  border-color: ${(props) =>
    props.selectedPlan ? 'var(--mantis)' : 'var(--mine-shaft)'};
  box-shadow: ${(props) =>
    props.selectedPlan ? '2px 2px 25px #080b0b80' : 'none'};
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

const Premium = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 20px 32px 28px;
  position: relative;
  flex: 1;
  align-self: stretch;
  background-color: var(--mine-shaft);
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid;
  border-color: ${(props) =>
    props.selectedPlan ? 'var(--mantis)' : 'var(--mine-shaft)'};
  box-shadow: ${(props) =>
    props.selectedPlan ? '2px 2px 25px #080b0b80' : 'none'};
`;

const Title = styled.h1`
  ${InterBoldSnowDrift65px}
  position: absolute;
  top: 95px;
  left: 505px;
  text-align: center;
  letter-spacing: -1.3px;
  line-height: 78px;
  white-space: nowrap;
`;

export default DesktopSignUpSubscriptions;
