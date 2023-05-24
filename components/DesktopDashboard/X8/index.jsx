import React from 'react';
import styled from 'styled-components';
import {
  InterSemiBoldSnowDrift18px,
  InterNormalCararra18px,
} from '../../../styledMixins';

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
  ${InterNormalCararra18px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Number = styled.div`
  ${InterSemiBoldSnowDrift18px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

export default X8;
