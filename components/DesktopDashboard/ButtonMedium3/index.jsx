import React from 'react';
import styled from 'styled-components';
import { DesktopPoDashboardbody1Semibold } from '../../../styledMixins';

function ButtonMedium3(props) {
  const { children } = props;

  return (
    <ButtonMedium>
      <NewEntry>{children}</NewEntry>
    </ButtonMedium>
  );
}

const ButtonMedium = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--mantis);
  border-radius: 6px;
  overflow: hidden;
`;

const NewEntry = styled.div`
  ${DesktopPoDashboardbody1Semibold}
  position: relative;
  width: fit-content;
  margin-top: -2.5px;
  margin-bottom: -0.5px;
  font-weight: 600;
  color: var(--outer-space);
  line-height: 24.7px;
  white-space: nowrap;
`;

export default ButtonMedium3;
