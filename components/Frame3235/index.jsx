import React from "react";
import Frame3137 from "../Frame3137";
import styled from "styled-components";
import {
  InterBoldHunterGreen25px2,
  InterNormalHunterGreen25px,
  InterSemiBoldMantis14px,
  InterBoldHunterGreen25px,
  ValignTextMiddle,
} from "../../styledMixins";


function Frame3235(props) {
  const {
    clevelandCavaliers_416X416RemovebgP,
    live,
    new_York_Knicks_Logo1,
    number1,
    text4,
    number2,
    frame31371Props,
    frame31372Props,
  } = props;

  return (
    <Frame32351>
      <Frame31371>
        <Frame3240>
          <Categoryactive2>
            <Frame3236>
              <ClevelandCavaliers416x416RemovebgPr
                src={clevelandCavaliers_416X416RemovebgP}
                alt="cleveland-cavaliers_416x416-removebg-preview 1"
              />
            </Frame3236>
            <Frame3137 sac={frame31371Props.sac} away={frame31371Props.away} />
          </Categoryactive2>
          <Frame3146>
            <Ellipse2092></Ellipse2092>
            <LIVE>{live}</LIVE>
          </Frame3146>
          <Categoryactive2>
            <Frame32361>
              <NewYorkKnicksLogo1 src={new_York_Knicks_Logo1} alt="New_York_Knicks_logo 1" />
            </Frame32361>
            <Frame3137 sac={frame31372Props.sac} away={frame31372Props.away} />
          </Categoryactive2>
        </Frame3240>
        <Frame3242>
          <Categoryactive21>
            <Number>{number1}</Number>
          </Categoryactive21>
          <Text6>{text4}</Text6>
          <Number1>{number2}</Number1>
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
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: -1px 2px 20px #f4f4f4;
`;

const Frame31371 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Frame3240 = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  align-self: stretch;
`;

const Categoryactive2 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
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
  padding: 0px 8px;
  position: relative;
  background-color: var(--cararra);
  border-radius: 4px;
`;

const Ellipse2092 = styled.div`
  position: relative;
  min-width: 8px;
  height: 8px;
  background-color: var(--mantis);
  border-radius: 4px;
`;

const LIVE = styled.div`
  ${InterSemiBoldMantis14px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: 16.8px;
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
  background-color: var(--snow-drift-2);
  border-radius: 4px;
`;

const Categoryactive21 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Number = styled.div`
  ${ValignTextMiddle}
  ${InterBoldHunterGreen25px}
            position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: 30px;
  white-space: nowrap;
`;

const Text6 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalHunterGreen25px}
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
  ${InterBoldHunterGreen25px2}
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
