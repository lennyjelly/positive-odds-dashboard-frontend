import React from 'react';
import styled from 'styled-components';
import { DesktopPoDashboardeyebrowRegular } from '../../styledMixins';

function Frame3251(props) {
  const { inTheMoneyAlert, className } = props;

  return (
    <MoneyAlert className={`money-alert ${className || ''}`}>
      <IconThumbsUp
        className="icon-thumbs_up"
        src="/img/heroicons-solid-hand-thumb-up-8@2x.png"
        alt="icon-thumbs_up"
      />
      <InTheMoneyAlert className="in-the-money-alert">
        {inTheMoneyAlert}
      </InTheMoneyAlert>
    </MoneyAlert>
  );
}

const MoneyAlert = styled.div`
  display: flex;
  width: 288px;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const IconThumbsUp = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const InTheMoneyAlert = styled.div`
  ${DesktopPoDashboardeyebrowRegular}
  position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 400;
  color: var(--snow-drift);
  line-height: 16.8px;
  white-space: nowrap;
`;

export default Frame3251;
