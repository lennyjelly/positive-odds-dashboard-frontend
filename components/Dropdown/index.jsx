import React from "react";
import styled from "styled-components";
import { DesktopPoDashboardbody2Regular } from "../../styledMixins";


function Dropdown(props) {
  const { icRoundKeyboardArrowRight } = props;

  return (
    <DropdownCountry>
      <DropdownText>US</DropdownText>
      <IcroundKeyboardArrowRight src={icRoundKeyboardArrowRight} alt="ic:round-keyboard-arrow-right" />
    </DropdownCountry>
  );
}

const DropdownCountry = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 14px;
  position: relative;
  align-self: stretch;
`;

const DropdownText = styled.div`
  ${DesktopPoDashboardbody2Regular}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--beryl-green);
  line-height: 24px;
  white-space: nowrap;
`;

const IcroundKeyboardArrowRight = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const DropdownCountry1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 14px;
  position: relative;
  align-self: stretch;
`;

const DropdownText1 = styled.div`
  ${DesktopPoDashboardbody2Regular}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--beryl-green);
  line-height: 24px;
  white-space: nowrap;
`;

const IcroundKeyboardArrowRight1 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const DropdownCountry2 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 14px;
  position: relative;
  align-self: stretch;
`;

const DropdownText2 = styled.div`
  ${DesktopPoDashboardbody2Regular}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--beryl-green);
  line-height: 24px;
  white-space: nowrap;
`;

const IcroundKeyboardArrowRight2 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default Dropdown;
