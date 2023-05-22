import React from 'react';
import styled from 'styled-components';
import { DesktopPoDashboardbody1Semibold } from '../../styledMixins';

function ButtonNext(props) {
  const { icRoundKeyboardArrowRight } = props;

  return (
    <ButtonNext1>
      <Next>Next</Next>
      <IcroundKeyboardArrowRight
        src={icRoundKeyboardArrowRight}
        alt="ic:round-keyboard-arrow-right"
      />
    </ButtonNext1>
  );
}

const ButtonNext1 = styled.div`
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

const Next = styled.div`
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

const ButtonNext2 = styled.div`
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

const Next1 = styled.div`
  ${DesktopPoDashboardbody1Semibold}
  position: relative;
  width: fit-content;
  margin-top: -1.5px;
  font-weight: 600;
  color: var(--outer-space-2);
  line-height: 24.7px;
  white-space: nowrap;
`;

const IcroundKeyboardArrowRight1 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default ButtonNext;
