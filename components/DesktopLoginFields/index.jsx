import React from 'react';
import styled from 'styled-components';
import {
  DesktopPoDashboardeyebrowRegular,
  DesktopPoDashboardbody2Regular,
  DesktopPoDashboardeyebrowRegular,
  DesktopPoDashboardbody2Regular,
  DesktopPoDashboardeyebrowRegular,
  DesktopPoDashboardbody1Semibold,
} from '../../styledMixins';
import { useForm, Controller } from 'react-hook-form';

function DesktopLoginFields() {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Fields onSubmit={handleSubmit(onSubmit)}>
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
            ></InputField>
          )}
        />
      </InputEmail>

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
      <FrameForgotPass>
        <TextButtonForgotPass>Forgot your password?</TextButtonForgotPass>
      </FrameForgotPass>

      <ButtonLogin type="submit" disabled={!isValid}>
        Login
      </ButtonLogin>
      {process.env.NODE_ENV === 'development' ? (
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      ) : null}
    </Fields>
  );
}

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
  /* border: none; */
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

const InputEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
  width: auto;
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

const Fields = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
  width: 100%;
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

export default DesktopLoginFields;
