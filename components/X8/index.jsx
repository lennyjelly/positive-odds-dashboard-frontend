import React from "react";
import styled from "styled-components";
import { InterSemiBoldHunterGreen18px, InterNormalCapeCod18px } from "../../styledMixins";


function X8(props) {
  const { tweeted, number } = props;

  return (
    <X81>
      <Tweeted>{tweeted}</Tweeted>
      <Number>{number}</Number>
    </X81>
  );
}

const X81 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  align-self: stretch;
`;

const Tweeted = styled.div`
  ${InterNormalCapeCod18px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Number = styled.div`
  ${InterSemiBoldHunterGreen18px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

export default X8;
