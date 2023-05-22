import React from "react";
import InputField from "../InputField";
import InputNumber from "../InputNumber";
import InputWithLabel from "../InputWithLabel";
import ButtonNext from "../ButtonNext";
import Frame31392 from "../Frame31392";
import styled from "styled-components";
import { InterBoldSnowDrift65px } from "../../styledMixins";


function ComponentSignUp(props) {
  const { className, inputField1Props, inputField2Props, inputNumberProps, buttonNextProps } = props;

  return (
    <ComponentSignUp1 className={`component-sign-up ${className || ""}`}>
      <Title className="title-3">Sign up</Title>
      <Fields className="fields">
        <InputField email={inputField1Props.email} hussainFinesseCom={inputField1Props.hussainFinesseCom} />
        <InputField email={inputField2Props.email} hussainFinesseCom={inputField2Props.hussainFinesseCom} />
        <InputNumber dropdownProps={inputNumberProps.dropdownProps} />
        <InputWithLabel />
      </Fields>
      <ButtonNext icRoundKeyboardArrowRight={buttonNextProps.icRoundKeyboardArrowRight} />
      <Frame31392 />
    </ComponentSignUp1>
  );
}

const ComponentSignUp1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  align-items: flex-start;
  gap: 40px;
  position: absolute;
  top: 0;
  left: 0;

  &.component-sign-up.component-sign-up-1 {
    top: 1178px;
    left: 881px;
  }
`;

const Title = styled.h1`
  ${InterBoldSnowDrift65px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -1.3px;
  line-height: 78px;
  white-space: nowrap;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  position: relative;
  align-self: stretch;
`;

export default ComponentSignUp;
