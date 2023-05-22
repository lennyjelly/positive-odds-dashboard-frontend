import React from "react";
import styled from "styled-components";
import { InterBoldCapeCod20px, InterSemiBoldMantis14px } from "../../styledMixins";


function Frame31372(props) {
  const { injuredPlayers, expenses, icRoundKeyboardArrowRight } = props;

  return (
    <Frame3137>
      <InjuredPlayers>{injuredPlayers}</InjuredPlayers>
      <ButtonSecondary>
        <Expenses>{expenses}</Expenses>
        <IcroundKeyboardArrowRight src={icRoundKeyboardArrowRight} alt="ic:round-keyboard-arrow-right" />
      </ButtonSecondary>
    </Frame3137>
  );
}

const Frame3137 = styled.div`
  display: flex;
  width: 325px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 0px 0px 4px;
  position: relative;
`;

const InjuredPlayers = styled.div`
  ${InterBoldCapeCod20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const ButtonSecondary = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 2px;
  padding: 0px 4px 0px 12px;
  position: relative;
  border-radius: 4px;
`;

const Expenses = styled.div`
  ${InterSemiBoldMantis14px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: 22.4px;
  white-space: nowrap;
`;

const IcroundKeyboardArrowRight = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default Frame31372;
