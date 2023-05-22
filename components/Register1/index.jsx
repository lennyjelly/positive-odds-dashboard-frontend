import React from "react";
import InputField from "../InputField";
import styled from "styled-components";
import {
  InterNormalSantasGray16px,
  InterNormalSnowDrift14px,
  InterBoldSnowDrift65px,
  ValignTextMiddle,
  InterSemiBoldOuterSpace19px,
} from "../../styledMixins";
import "./Register1.css";

function Register1(props) {
  const {
    overlapGroup1,
    pexelsCottonbroCgStudio88175322,
    title,
    phoneNumber,
    dropdownText,
    text1,
    password,
    text2,
    next,
    hintText1,
    hintText2,
    inputField1Props,
    inputField2Props,
  } = props;

  return (
    <div className="register-1 screen">
      <Frame3245>
        <FlexCol>
          <OverlapGroup1 style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <Logo src="/img/logo.svg" alt="Logo" />
          </OverlapGroup1>
          <Ellipse2095></Ellipse2095>
        </FlexCol>
        <OverlapGroup>
          <PexelsCottonbroCgStudio88175322
            src={pexelsCottonbroCgStudio88175322}
            alt="pexels-cottonbro-cg-studio-8817532 2"
          />
          <Ellipse2094></Ellipse2094>
          <Frame3139>
            <Title>{title}</Title>
            <Frame31391>
              <InputField email={inputField1Props.email} hussainFinesseCom={inputField1Props.hussainFinesseCom} />
              <InputField email={inputField2Props.email} hussainFinesseCom={inputField2Props.hussainFinesseCom} />
              <InputField1>
                <InputField1>
                  <InputField1>
                    <PhoneNumber>{phoneNumber}</PhoneNumber>
                    <InputLayer>
                      <Dropdown>
                        <DropdownText>{dropdownText}</DropdownText>
                        <IcroundKeyboardArrowRight
                          src="/img/ic-round-keyboard-arrow-right.svg"
                          alt="ic:round-keyboard-arrow-right"
                        />
                      </Dropdown>
                      <Input>
                        <Text1>{text1}</Text1>
                      </Input>
                    </InputLayer>
                  </InputField1>
                </InputField1>
              </InputField1>
              <InputField1>
                <InputField1>
                  <InputField1>
                    <PhoneNumber>{password}</PhoneNumber>
                    <InputLayer1>
                      <Input>
                        <Text2>{text2}</Text2>
                      </Input>
                      <IconEye src="/img/ic-baseline-remove-red-eye.svg" alt="icon-eye" />
                    </InputLayer1>
                  </InputField1>
                </InputField1>
              </InputField1>
            </Frame31391>
            <ButtonMedium>
              <Next>{next}</Next>
              <IcroundKeyboardArrowRight
                src="/img/ic-round-keyboard-arrow-right-1.svg"
                alt="ic:round-keyboard-arrow-right"
              />
            </ButtonMedium>
            <Frame31392>
              <HintText>{hintText1}</HintText>
              <HintText1>{hintText2}</HintText1>
            </Frame31392>
          </Frame3139>
        </OverlapGroup>
      </Frame3245>
    </div>
  );
}

const Frame3245 = styled.div`
  position: relative;
  flex: 1;
  align-self: stretch;
  min-width: 1440px;
  height: 860px;
  background-color: var(--log-cabin);
  overflow: hidden;
`;

const FlexCol = styled.div`
  position: absolute;
  width: 1056px;
  top: 0;
  left: -571px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1434px;
  gap: 102px;
`;

const OverlapGroup1 = styled.div`
  height: 385px;
  align-self: flex-end;
  display: flex;
  padding: 64px 80px;
  align-items: flex-start;
  min-width: 485px;
  background-size: 100% 100%;
`;

const Logo = styled.img`
  width: 168px;
  height: 60px;
`;

const Ellipse2095 = styled.div`
  width: 947px;
  height: 947px;
  border-radius: 473.5px;
  filter: blur(10px);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(90.00000223517418, 197.0000034570694, 97.00000181794167, 0.4000000059604645) 0%,
    rgba(42.000001296401024, 54.00000058114529, 53.00000064074993, 0) 100%
  );
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 1391px;
  height: 1482px;
  top: -622px;
  left: 510px;
`;

const PexelsCottonbroCgStudio88175322 = styled.img`
  position: absolute;
  width: 690px;
  height: 860px;
  top: 622px;
  left: 240px;
`;

const Ellipse2094 = styled.div`
  position: absolute;
  width: 947px;
  height: 947px;
  top: 0;
  left: 444px;
  border-radius: 473.5px;
  filter: blur(10px);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(90.00000223517418, 197.0000034570694, 97.00000181794167, 0.4000000059604645) 0%,
    rgba(42.000001296401024, 54.00000058114529, 53.00000064074993, 0) 100%
  );
`;

const Frame3139 = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  align-items: flex-start;
  gap: 40px;
  position: absolute;
  top: 710px;
  left: 0;
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

const Frame31391 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  position: relative;
  align-self: stretch;
`;

const InputField1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const PhoneNumber = styled.div`
  ${InterNormalSnowDrift14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 16.8px;
  white-space: nowrap;
`;

const InputLayer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0px 14px 0px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--outer-space-2);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 1px 1px #0000001f, 0px 0px 0px 1px #676e7629, 0px 2px 5px #676e7614;
`;

const Dropdown = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 14px;
  position: relative;
  align-self: stretch;
`;

const DropdownText = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: var(--beryl-green);
  font-size: var(--font-size-l);
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const IcroundKeyboardArrowRight = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Text1 = styled.div`
  ${InterNormalSantasGray16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Text2 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalSantasGray16px}
            position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const InputLayer1 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 20px 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--outer-space-2);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: -1px 2px 20px #1e202066;
`;

const IconEye = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const ButtonMedium = styled.div`
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
  ${InterSemiBoldOuterSpace19px}
  position: relative;
  width: fit-content;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 24.7px;
  white-space: nowrap;
`;

const Frame31392 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

const HintText = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: var(--snow-drift);
  font-size: var(--font-size-l);
  text-align: right;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const HintText1 = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: var(--mantis);
  font-size: var(--font-size-l);
  text-align: right;
  letter-spacing: 0;
  line-height: 24px;
  text-decoration: underline;
  white-space: nowrap;
`;

export default Register1;
