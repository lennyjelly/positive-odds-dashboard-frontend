import React from 'react';
import styled from 'styled-components';
import './DesktopSignUp.css';
import {
  InterBoldSnowDrift65px,
  DesktopPoDashboardbody2Regular,
  DesktopPoDashboardeyebrowRegular,
  DesktopPoDashboardbody2Regular,
  DesktopPoDashboardeyebrowRegular,
  DesktopPoDashboardbody1Semibold,
  DesktopPoDashboardbody2Regular,
} from '../../styledMixins';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function DesktopSignUp(props) {
  const history = useHistory();
  const { overlapGroup1, logo, pexelsCottonbroCgStudio88175323, className } =
    props;

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    console.log(data);
    history.push('/sign-up/subscriptions');
  };

  return (
    <div className="desktop-sign-up screen">
      <Frame3245>
        <FlexCol>
          <OverlapGroup1 style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <Logo src={logo} alt="Logo" />
          </OverlapGroup1>
          <Ellipse2095></Ellipse2095>
        </FlexCol>
        <OverlapGroup2>
          <OverlapGroup>
            <PexelsCottonbroCgStudio88175323
              src={pexelsCottonbroCgStudio88175323}
              alt="pexels-cottonbro-cg-studio-8817532 3"
            />
            <ComponentSignUp1
              className={`component-sign-up ${className || ''}`}
            >
              <Title className="title-3">Sign up</Title>
              <Fields className="fields" onSubmit={handleSubmit(onSubmit)}>
                <InputEmail>
                  <Label>Email</Label>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <InputField
                        {...field}
                        type="text"
                        name="email"
                        placeholder="youremail@gmail.com"
                      />
                    )}
                  />
                </InputEmail>

                {/* Username */}

                <InputEmail>
                  <Label>Username</Label>
                  <Controller
                    name="username"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <InputField
                        {...field}
                        type="text"
                        name="username"
                        placeholder="username123das43"
                      ></InputField>
                    )}
                  />
                </InputEmail>

                {/* Phone Number */}

                <InputNumber1>
                  <Label>Phone number</Label>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <InputField
                        {...field}
                        type="text"
                        name="phoneNumber"
                        placeholder="+1 (555) 000-0000"
                      ></InputField>
                    )}
                  />
                </InputNumber1>

                {/* Password */}

                <InputPassword>
                  <Label>Password</Label>
                  <PasswordContainer>
                    <Controller
                      name="password"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => (
                        <PasswordInputField
                          {...field}
                          type="password"
                        ></PasswordInputField>
                      )}
                    />

                    <EyeIconContainer>
                      <IconEye
                        src="/img/ic-baseline-remove-red-eye-3@2x.png"
                        alt="icon-eye"
                      />
                    </EyeIconContainer>
                  </PasswordContainer>
                </InputPassword>

                <ButtonLogin type="submit" disabled={!isValid}>
                  Next
                </ButtonLogin>
                {/* <Frame31392 /> */}
                <CTABlock>
                  <HintText>Already have an account?</HintText>
                  <TextButtonLogin onClick={() => history.replace('/login')}>
                    Login now
                  </TextButtonLogin>
                </CTABlock>

                {process.env.NODE_ENV === 'development' ? (
                  <pre>{JSON.stringify(watch(), null, 2)}</pre>
                ) : null}
              </Fields>
            </ComponentSignUp1>
          </OverlapGroup>
          <Ellipse2094></Ellipse2094>
        </OverlapGroup2>
      </Frame3245>
    </div>
  );
}

const CTABlock = styled.div`
  ${DesktopPoDashboardbody2Regular}
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
  font-weight: 400;
  color: var(--snow-drift);
  text-align: right;
  line-height: 24px;
  white-space: nowrap;
`;

const TextButtonLogin = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--mantis);
  text-align: right;
  line-height: 24px;
  text-decoration: underline;
  white-space: nowrap;
  cursor: pointer;
`;

const ButtonLogin = styled.button`
  ${DesktopPoDashboardbody1Semibold}
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 32px;
  position: relative;
  align-self: stretch;
  background-color: var(--mantis);
  border-radius: 6px;
  overflow: hidden;
  color: var(--outer-space-2);
  line-height: 24.7px;
  white-space: nowrap;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
`;

const PasswordInputField = styled.input`
  ${DesktopPoDashboardbody2Regular}
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
  color: var(--santas-gray);
  outline: none;
  border: none;
  padding-right: 30px;
  width: 100%;
`;

const EyeIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InputPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const IconEye = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const InputNumber1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const InputEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Label = styled.div`
  ${DesktopPoDashboardeyebrowRegular}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--snow-drift);
  line-height: 16.8px;
  white-space: nowrap;
`;

const InputField = styled.input`
  ${DesktopPoDashboardbody2Regular}
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
  color: var(--santas-gray);
  outline: none;
  border: none;
`;

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

const Fields = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

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
    rgba(
        90.00000223517418,
        197.0000034570694,
        97.00000181794167,
        0.4000000059604645
      )
      0%,
    rgba(42.000001296401024, 54.00000058114529, 53.00000064074993, 0) 100%
  );
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 1391px;
  height: 1482px;
  top: -622px;
  left: 510px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 930px;
  height: 772px;
  top: 710px;
  left: 0;
`;

const PexelsCottonbroCgStudio88175323 = styled.img`
  position: absolute;
  width: 690px;
  height: 504px;
  top: 268px;
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
    rgba(
        90.00000223517418,
        197.0000034570694,
        97.00000181794167,
        0.4000000059604645
      )
      0%,
    rgba(42.000001296401024, 54.00000058114529, 53.00000064074993, 0) 100%
  );
`;

export default DesktopSignUp;
