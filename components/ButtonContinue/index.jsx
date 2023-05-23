import React from 'react';
import styled from 'styled-components';
import { DesktopPoDashboardbody1Semibold } from '../../styledMixins';

function ButtonContinue(props) {
  const { className } = props;

  return (
    <ButtonContinue1 className={`button-continue ${className || ''}`}>
      <Continue className="continue">Continue</Continue>
      <IcroundKeyboardArrowRight
        className="icround-keyboard-arrow-right"
        src="/img/ic-round-keyboard-arrow-right-1@2x.png"
        alt="ic:round-keyboard-arrow-right"
      />
    </ButtonContinue1>
  );
}

const ButtonContinue1 = styled.div`
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
  cursor: pointer;
  &.button-continue.button-continue-1 {
    position: relative;
    top: unset;
    left: unset;
  }
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

export default ButtonContinue;
