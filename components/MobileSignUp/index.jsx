import React from "react";
import InputField from "../InputField";
import Dropdown from "../Dropdown";
import InputWithLabel2 from "../InputWithLabel2";
import Frame31392 from "../Frame31392";
import styled from "styled-components";
import {
  DesktopPoDashboardbody1Semibold,
  InterBoldSnowDrift49px,
  DesktopPoDashboardbody2Regular,
  DesktopPoDashboardeyebrowRegular,
} from "../../styledMixins";
import "./MobileSignUp.css";

function MobileSignUp(props) {
  const {
    pexelsCottonbroCgStudio88175321,
    pexelsCottonbroCgStudio88175322,
    logo,
    title,
    phoneNumber,
    text3,
    next,
    icRoundKeyboardArrowRight,
    inputField1Props,
    inputField2Props,
    dropdownProps,
  } = props;

  return (
    <div className="mobile-sign-up screen">
      <Frame3245>
        <OverlapGroup>
          <PexelsCottonbroCgStudio88175321
            src={pexelsCottonbroCgStudio88175321}
            alt="pexels-cottonbro-cg-studio-8817532 1"
          />
          <PexelsCottonbroCgStudio88175322
            src={pexelsCottonbroCgStudio88175322}
            alt="pexels-cottonbro-cg-studio-8817532 2"
          />
          <Ellipse2094></Ellipse2094>
          <Ellipse2095></Ellipse2095>
          <Logo src={logo} alt="Logo" />
          <ComponentSignUp>
            <Title>{title}</Title>
            <Fields>
              <InputField email={inputField1Props.email} hussainFinesseCom={inputField1Props.hussainFinesseCom} />
              <InputField email={inputField2Props.email} hussainFinesseCom={inputField2Props.hussainFinesseCom} />
              <InputNumber>
                <InputNumber>
                  <InputNumber>
                    <PhoneNumber>{phoneNumber}</PhoneNumber>
                    <FieldInput>
                      <Dropdown icRoundKeyboardArrowRight={dropdownProps.icRoundKeyboardArrowRight} />
                      <FieldInputNumber>
                        <Text3>{text3}</Text3>
                      </FieldInputNumber>
                    </FieldInput>
                  </InputNumber>
                </InputNumber>
              </InputNumber>
              <InputWithLabel2 />
            </Fields>
            <ButtonNext>
              <Next>{next}</Next>
              <IcroundKeyboardArrowRight src={icRoundKeyboardArrowRight} alt="ic:round-keyboard-arrow-right" />
            </ButtonNext>
            <Frame31392 />
          </ComponentSignUp>
        </OverlapGroup>
      </Frame3245>
    </div>
  );
}

const Frame3245 = styled.div`
  position: relative;
  flex: 1;
  align-self: stretch;
  min-width: 440px;
  height: 860px;
  background-color: var(--log-cabin);
  overflow: hidden;
`;

const OverlapGroup = styled.div`
  position: relative;
  width: 1071px;
  height: 1776px;
  top: -565px;
  left: -348px;
`;

const PexelsCottonbroCgStudio88175321 = styled.img`
  position: absolute;
  width: 600px;
  height: 765px;
  top: 0;
  left: 20px;
`;

const PexelsCottonbroCgStudio88175322 = styled.img`
  position: absolute;
  width: 600px;
  height: 412px;
  top: 1146px;
  left: 426px;
`;

const Ellipse2094 = styled.div`
  position: absolute;
  width: 610px;
  height: 610px;
  top: 166px;
  left: 461px;
  border-radius: 305px;
  filter: blur(10px);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(90.00000223517418, 197.0000034570694, 97.00000181794167, 0.4000000059604645) 0%,
    rgba(42.000001296401024, 54.00000058114529, 53.00000064074993, 0) 100%
  );
`;

const Ellipse2095 = styled.div`
  position: absolute;
  width: 610px;
  height: 610px;
  top: 1166px;
  left: 0;
  border-radius: 305px;
  filter: blur(10px);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(90.00000223517418, 197.0000034570694, 97.00000181794167, 0.4000000059604645) 0%,
    rgba(42.000001296401024, 54.00000058114529, 53.00000064074993, 0) 100%
  );
`;

const Logo = styled.img`
  position: absolute;
  width: 111px;
  height: 40px;
  top: 629px;
  left: 380px;
`;

const ComponentSignUp = styled.div`
  display: flex;
  flex-direction: column;
  width: 376px;
  align-items: flex-start;
  gap: 40px;
  position: absolute;
  top: 709px;
  left: 380px;
`;

const Title = styled.h1`
  ${InterBoldSnowDrift49px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -0.98px;
  line-height: 58.8px;
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

const InputNumber = styled.div`
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

const Text3 = styled.div`
  ${DesktopPoDashboardbody2Regular}
  position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 400;
  color: var(--santas-gray);
  line-height: 24px;
  white-space: nowrap;
`;

const ButtonNext = styled.div`
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

export default MobileSignUp;
