import React from "react";
import styled from "styled-components";
import { ValignTextMiddle, DesktopPoDashboardbody2Regular, DesktopPoDashboardeyebrowRegular } from "../../styledMixins";


function InputWithLabel() {
  return (
    <InputPassword>
      <Password>Password</Password>
      <FieldInput>
        <FieldInputText>
          <Text2>********</Text2>
        </FieldInputText>
        <IconEye src="/img/ic-baseline-remove-red-eye-3@2x.png" alt="icon-eye" />
      </FieldInput>
    </InputPassword>
  );
}

const InputPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Password = styled.div`
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
  padding: 15px 20px 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--outer-space);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: -1px 2px 20px #1e202066;
`;

const FieldInputText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Text2 = styled.div`
  ${ValignTextMiddle}
  ${DesktopPoDashboardbody2Regular}
            position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 400;
  color: var(--santas-gray);
  line-height: 24px;
  white-space: nowrap;
`;

const IconEye = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const InputPassword1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Password1 = styled.div`
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
  padding: 15px 20px 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--outer-space);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: -1px 2px 20px #1e202066;
`;

const FieldInputText1 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Text6 = styled.div`
  ${ValignTextMiddle}
  ${DesktopPoDashboardbody2Regular}
            position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 400;
  color: var(--santas-gray);
  line-height: 24px;
  white-space: nowrap;
`;

const IconEye1 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const InputPassword2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Password2 = styled.div`
  ${DesktopPoDashboardeyebrowRegular}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--snow-drift);
  line-height: 16.8px;
  white-space: nowrap;
`;

const FieldInput2 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 20px 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--outer-space);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: -1px 2px 20px #1e202066;
`;

const FieldInputText2 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Text7 = styled.div`
  ${ValignTextMiddle}
  ${DesktopPoDashboardbody2Regular}
            position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 400;
  color: var(--santas-gray);
  line-height: 24px;
  white-space: nowrap;
`;

const IconEye2 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const InputPassword3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Password3 = styled.div`
  ${DesktopPoDashboardeyebrowRegular}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--snow-drift);
  line-height: 16.8px;
  white-space: nowrap;
`;

const FieldInput3 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 20px 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--outer-space);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: -1px 2px 20px #1e202066;
`;

const FieldInputText3 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Text9 = styled.div`
  ${ValignTextMiddle}
  ${DesktopPoDashboardbody2Regular}
            position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 400;
  color: var(--santas-gray);
  line-height: 24px;
  white-space: nowrap;
`;

const IconEye3 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

export default InputWithLabel;
