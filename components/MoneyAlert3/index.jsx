import React from "react";
import styled from "styled-components";
import { DesktopPoDashboardeyebrowRegular } from "../../styledMixins";


function MoneyAlert3(props) {
  const { iconThumbs_Up, inTheMoneyAlert, className } = props;

  return (
    <MoneyAlert className={`money-alert-2 ${className || ""}`}>
      <IconThumbsUp className="icon-thumbs_up-2" src={iconThumbs_Up} alt="icon-thumbs_up" />
      <InTheMoneyAlert className="in-the-money-alert-2">{inTheMoneyAlert}</InTheMoneyAlert>
    </MoneyAlert>
  );
}

const MoneyAlert = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
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

export default MoneyAlert3;
