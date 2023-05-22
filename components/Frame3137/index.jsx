import React from "react";
import styled from "styled-components";
import { InterNormalGreenSpring14px, InterBoldHunterGreen19px } from "../../styledMixins";


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
  ${InterBoldHunterGreen19px}
  position: relative;
  width: 92px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24.7px;
  white-space: nowrap;
`;

const Away = styled.div`
  ${InterNormalGreenSpring14px}
  position: relative;
  width: 92px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16.8px;
  white-space: nowrap;
`;

export default Frame3137;
