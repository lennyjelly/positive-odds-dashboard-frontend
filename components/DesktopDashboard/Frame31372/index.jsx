import React from 'react';
import styled from 'styled-components';
import {
  DesktopPoDashboardeyebrowSemibold,
  InterBoldSnowDrift20px2,
} from '../../../styledMixins';

function Frame31372(props) {
  const { injuredPlayers } = props;

  return (
    <Frame3137>
      <InjuredPlayers>{injuredPlayers}</InjuredPlayers>
      <ButtonSecondary>
        <Expenses>View all</Expenses>
        <IcroundKeyboardArrowRight
          src="/img/ic-round-keyboard-arrow-right@2x.png"
          alt="ic:round-keyboard-arrow-right"
        />
      </ButtonSecondary>
    </Frame3137>
  );
}

const Frame3137 = styled.div`
  display: flex;
  width: 325px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 0px 0px 2px;
  position: relative;
`;

const InjuredPlayers = styled.div`
  ${InterBoldSnowDrift20px2}
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
  ${DesktopPoDashboardeyebrowSemibold}
  position: relative;
  width: fit-content;
  font-weight: 600;
  color: var(--mantis);
  line-height: 22.4px;
  white-space: nowrap;
`;

const IcroundKeyboardArrowRight = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default Frame31372;
