import React from "react";
import styled from "styled-components";
import { DesktopPoDashboardbody2Regular } from "../../styledMixins";


function Description3(props) {
  const { popularOremIpsumDolorSitAmet } = props;

  return (
    <Description>
      <Vector43 src="/img/vector-43-2.png" alt="Vector 43" />
      <PopularOremIpsumDolorSitAmet>{popularOremIpsumDolorSitAmet}</PopularOremIpsumDolorSitAmet>
      <Vector44 src="/img/vector-43-2.png" alt="Vector 44" />
    </Description>
  );
}

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const Vector43 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 602px;
  height: 1px;
`;

const PopularOremIpsumDolorSitAmet = styled.p`
  ${DesktopPoDashboardbody2Regular}
  position: relative;
  align-self: stretch;
  font-weight: 400;
  color: var(--white);
  line-height: 24px;
  white-space: nowrap;
`;

const Vector44 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 602px;
  height: 1px;
  margin-bottom: -1px;
`;

export default Description3;
