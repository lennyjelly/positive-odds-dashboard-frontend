import React from "react";
import InputField from "../InputField";
import InputWithLabel2 from "../InputWithLabel2";
import ButtonMedium from "../ButtonMedium";
import Frame313922 from "../Frame313922";
import styled from "styled-components";
import { InterBoldSnowDrift49px, DesktopPoDashboardeyebrowRegular } from "../../styledMixins";
import "./MobileLogin.css";

function MobileLogin(props) {
  const {
    pexelsCottonbroCgStudio88175321,
    pexelsCottonbroCgStudio88175322,
    logo,
    title,
    password,
    inputFieldProps,
  } = props;

  return (
    <div className="mobile-login screen">
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
          <ComponentLogin>
            <Title>{title}</Title>
            <Fields>
              <InputField email={inputFieldProps.email} hussainFinesseCom={inputFieldProps.hussainFinesseCom} />
              <InputPassword>
                <InputPassword>
                  <InputWithLabel2 />
                  <FrameForgotPass>
                    <TextButtonForgotPass>{password}</TextButtonForgotPass>
                  </FrameForgotPass>
                </InputPassword>
              </InputPassword>
            </Fields>
            <ButtonMedium />
            <Frame313922 />
          </ComponentLogin>
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
  height: 1610px;
  top: -399px;
  left: -348px;
`;

const PexelsCottonbroCgStudio88175321 = styled.img`
  position: absolute;
  width: 272px;
  height: 200px;
  top: 399px;
  left: 348px;
`;

const PexelsCottonbroCgStudio88175322 = styled.img`
  position: absolute;
  width: 362px;
  height: 279px;
  top: 980px;
  left: 426px;
`;

const Ellipse2094 = styled.div`
  position: absolute;
  width: 610px;
  height: 610px;
  top: 0;
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
  top: 1000px;
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
  top: 463px;
  left: 380px;
`;

const ComponentLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 376px;
  align-items: flex-start;
  gap: 48px;
  position: absolute;
  top: 551px;
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
  gap: 32px;
  position: relative;
  align-self: stretch;
`;

const InputPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const FrameForgotPass = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 0px 4px;
  position: relative;
  align-self: stretch;
`;

const TextButtonForgotPass = styled.div`
  ${DesktopPoDashboardeyebrowRegular}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--beryl-green);
  text-align: right;
  line-height: 20px;
  white-space: nowrap;
`;

export default MobileLogin;
