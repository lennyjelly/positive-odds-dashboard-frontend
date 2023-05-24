import React from 'react';
import Frame3137 from '../../Frame3137';
import styled from 'styled-components';
import {
  InterNormalForestGreen12px,
  InterBoldMantis25px,
  InterBoldSnowDrift25px2,
  ValignTextMiddle,
  InterNormalSnowDrift25px,
} from '../../../styledMixins';

function Frame3235(props) {
  const { className, frame31371Props, frame31372Props } = props;

  return (
    <Frame32351 className={`frame-3235 ${className || ''}`}>
      <Frame31371 className="frame-3137-7">
        <Frame3243 className="frame-3243-1">
          <Categoryactive2 className="categoryactive2">
            <Frame3236 className="frame-3236">
              <ClevelandCavaliers416x416RemovebgPr
                className="cleveland-cavaliers_"
                src="/img/cleveland-cavaliers-416x416-removebg-preview-1@2x.png"
                alt="cleveland-cavaliers_416x416-removebg-preview 1"
              />
            </Frame3236>
            <Frame3137 sac={frame31371Props.sac} away={frame31371Props.away} />
          </Categoryactive2>
          <Frame3146 className="frame-3146-1">
            <InProgress className="in-progress-1">In Progress</InProgress>
          </Frame3146>
          <Categoryactive2 className="categoryactive2-1">
            <Frame32361 className="frame-3236-1">
              <NewYorkKnicksLogo1
                className="new_-york_-knicks_logo-1"
                src="/img/new-york-knicks-logo-1@2x.png"
                alt="New_York_Knicks_logo 1"
              />
            </Frame32361>
            <Frame3137 sac={frame31372Props.sac} away={frame31372Props.away} />
          </Categoryactive2>
        </Frame3243>
        <Frame3242 className="frame-3242">
          <Categoryactive2 className="categoryactive2-2">
            <Number className="number-3">100</Number>
          </Categoryactive2>
          <Text4 className="text-4">-</Text4>
          <Number1 className="number-4">120</Number1>
        </Frame3242>
      </Frame31371>
    </Frame32351>
  );
}

const Frame32351 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-end;
  gap: 32px;
  padding: 32px;
  position: relative;
  background-color: #2d3332;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: -1px 2px 20px #1e202066;

  &.frame-3235.frame-3236-2 {
    background-color: var(--mine-shaft);
    box-shadow: unset;
  }
`;

const Frame31371 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Frame3243 = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  align-self: stretch;
`;

const Categoryactive2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Frame3236 = styled.div`
  position: relative;
  min-width: 92px;
  height: 92px;
  border-radius: 46px;
  background: linear-gradient(
    180deg,
    rgb(126.33215546607971, 85.6640625, 159.375) 0%,
    rgb(91.00000217556953, 43.00000123679638, 130.0000074505806) 100%
  );
`;

const ClevelandCavaliers416x416RemovebgPr = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  top: 24px;
  left: 22px;
`;

const Frame3146 = styled.div`
  display: flex;
  width: fit-content;
  height: 24px;
  align-items: center;
  gap: 8px;
  padding: 0px 6px;
  position: relative;
  background-color: var(--beryl-green);
  border-radius: 4px;
`;

const InProgress = styled.div`
  ${InterNormalForestGreen12px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: 14.4px;
  white-space: nowrap;
`;

const Frame32361 = styled.div`
  position: relative;
  min-width: 92px;
  height: 92px;
  border-radius: 46px;
  background: linear-gradient(
    180deg,
    rgb(255, 216.92297279834747, 132.8125101327896) 0%,
    rgb(253.0000001192093, 186.0000041127205, 38.0000015348196) 100%
  );
`;

const NewYorkKnicksLogo1 = styled.img`
  position: absolute;
  width: 52px;
  height: 52px;
  top: 20px;
  left: 20px;
  object-fit: cover;
`;

const Frame3242 = styled.div`
  display: flex;
  width: 261px;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 6px;
  padding: 4px 0px;
  position: relative;
  background-color: var(--cape-cod-2);
  border-radius: 4px;
`;

const Number = styled.div`
  ${ValignTextMiddle}
  ${InterBoldSnowDrift25px2}
            position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: 30px;
  white-space: nowrap;
`;

const Text4 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalSnowDrift25px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: 30px;
  white-space: nowrap;
`;

const Number1 = styled.div`
  ${ValignTextMiddle}
  ${InterBoldMantis25px}
            position: relative;
  flex: 1;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: 30px;
  white-space: nowrap;
`;

export default Frame3235;
