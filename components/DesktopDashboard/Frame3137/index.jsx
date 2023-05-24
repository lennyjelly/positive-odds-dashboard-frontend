import React from 'react';
import styled from 'styled-components';
import {
  InterBoldSnowDrift19px,
  DesktopPoDashboardeyebrowRegular2,
} from '../../../styledMixins';

function Frame3137(props) {
  const { sac, away } = props;

  return (
    <Frame31371>
      <SAC>{sac}</SAC>
      <Away>{away}</Away>
    </Frame31371>
  );
}

const Frame31371 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 4px;
  position: relative;
`;

const SAC = styled.div`
  ${InterBoldSnowDrift19px}
  position: relative;
  width: 92px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24.7px;
  white-space: nowrap;
`;

const Away = styled.div`
  ${DesktopPoDashboardeyebrowRegular2}
  position: relative;
  width: 92px;
  font-weight: 400;
  color: var(--beryl-green);
  text-align: center;
  line-height: 16.8px;
  white-space: nowrap;
`;

export default Frame3137;
