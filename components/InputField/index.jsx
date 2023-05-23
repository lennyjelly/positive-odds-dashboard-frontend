import React from 'react';
import styled from 'styled-components';
import {
  DesktopPoDashboardbody2Regular,
  DesktopPoDashboardeyebrowRegular,
} from '../../styledMixins';

function InputField(props) {
  const { email, hussainFinesseCom } = props;

  return (
    <InputEmail>
      <InputEmail>
        <InputEmail>
          <Email>{email}</Email>
          <FieldInput>
            <FieldInputText>
              <Hussainfinessecom>{hussainFinesseCom}</Hussainfinessecom>
            </FieldInputText>
          </FieldInput>
        </InputEmail>
      </InputEmail>
    </InputEmail>
  );
}

const InputEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Email = styled.div`
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

const Hussainfinessecom = styled.div`
  ${DesktopPoDashboardbody2Regular}
  position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 400;
  color: var(--santas-gray);
  line-height: 24px;
  white-space: nowrap;
`;

export default InputField;
