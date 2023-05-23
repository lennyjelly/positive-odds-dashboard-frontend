import React from 'react';
import styled from 'styled-components';
import { DesktopPoDashboardbody2Regular } from '../../styledMixins';
import { useHistory } from 'react-router-dom';

function Frame313922() {
  const history = useHistory();
  return (
    <CTABlock>
      <HintText>Don’t have an account yet?</HintText>
      <HintText1 onClick={() => history.replace('/sign-up')}>
        Sign up now
      </HintText1>
    </CTABlock>
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

const HintText = styled.p`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--snow-drift);
  text-align: right;
  line-height: 24px;
  white-space: nowrap;
`;

const HintText1 = styled.div`
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

const CTABlock1 = styled.div`
  ${DesktopPoDashboardbody2Regular}
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

const HintText2 = styled.p`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--snow-drift);
  text-align: right;
  line-height: 24px;
  white-space: nowrap;
`;

const HintText3 = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--mantis);
  text-align: right;
  line-height: 24px;
  text-decoration: underline;
  white-space: nowrap;
`;

const CTABlock2 = styled.div`
  ${DesktopPoDashboardbody2Regular}
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

const HintText4 = styled.p`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--snow-drift);
  text-align: right;
  line-height: 24px;
  white-space: nowrap;
`;

const HintText5 = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--mantis);
  text-align: right;
  line-height: 24px;
  text-decoration: underline;
  white-space: nowrap;
`;

export default Frame313922;
