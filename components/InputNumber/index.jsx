import React from "react";
import Dropdown from "../Dropdown";
import styled from "styled-components";
import { DesktopPoDashboardbody2Regular, DesktopPoDashboardeyebrowRegular } from "../../styledMixins";


function InputNumber(props) {
  const { dropdownProps } = props;

  return (
    <InputNumber1>
      <InputNumber1>
        <InputNumber1>
          <PhoneNumber>Phone number</PhoneNumber>
          <FieldInput>
            <Dropdown icRoundKeyboardArrowRight={dropdownProps.icRoundKeyboardArrowRight} />
            <FieldInputNumber>
              <Text1>+1 (555) 000-0000</Text1>
            </FieldInputNumber>
          </FieldInput>
        </InputNumber1>
      </InputNumber1>
    </InputNumber1>
  );
}

const InputNumber1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const PhoneNumber = styled.div`
  ${DesktopPoDashboardeyebrowRegular}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--snow-drift);
  line-height: 16.8px;
  white-space: nowrap;
`;

const FieldInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0px 14px 0px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--outer-space);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 1px 1px #0000001f, 0px 0px 0px 1px #676e7629, 0px 2px 5px #676e7614;
`;

const FieldInputNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Text1 = styled.div`
  ${DesktopPoDashboardbody2Regular}
  position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 400;
  color: var(--santas-gray);
  line-height: 24px;
  white-space: nowrap;
`;

const InputNumber2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const PhoneNumber1 = styled.div`
  ${DesktopPoDashboardeyebrowRegular}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--snow-drift);
  line-height: 16.8px;
  white-space: nowrap;
`;

const FieldInput1 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0px 14px 0px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--outer-space);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 1px 1px #0000001f, 0px 0px 0px 1px #676e7629, 0px 2px 5px #676e7614;
`;

const FieldInputNumber1 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Text5 = styled.div`
  ${DesktopPoDashboardbody2Regular}
  position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 400;
  color: var(--santas-gray);
  line-height: 24px;
  white-space: nowrap;
`;

export default InputNumber;
