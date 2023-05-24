import React from 'react';
import styled from 'styled-components';
import {
  InterBoldSnowDrift36px,
  InterSemiBoldWhite18px,
  InterNormalCararra18px,
} from '../../../styledMixins';

function Team() {
  return (
    <Team1>
      <Content>
        <Group3137>
          <Item>
            <Price>$00,000</Price>
            <Group3138>
              <SignalStats>Signal stats</SignalStats>
            </Group3138>
          </Item>
          <Circle>
            <OverlapGroup>
              <Percent>75%</Percent>
              <Gray src="/img/gray@2x.png" alt="Gray" />
              <Red src="/img/red@2x.png" alt="Red" />
            </OverlapGroup>
          </Circle>
        </Group3137>
      </Content>
    </Team1>
  );
}

const Team1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  align-items: flex-start;
  gap: 24px;
  padding: 16px 24px;
  position: relative;
  background-color: var(--mine-shaft);
  border-radius: 20px;
  box-shadow: 0px 4px 10px #4f4f4f0d;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  align-self: stretch;
`;

const Group3137 = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  min-width: 277px;
  height: 108px;
`;

const Item = styled.div`
  display: flex;
  height: 108px;
  width: 173.31922912597656px;
  align-self: center;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Price = styled.div`
  ${InterBoldSnowDrift36px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

const Group3138 = styled.div`
  position: relative;
  display: flex;
  min-width: 179px;
  height: 22px;
  margin-right: -5.68px;
`;

const SignalStats = styled.div`
  ${InterNormalCararra18px}
  width: 177px;
  height: 22px;
  letter-spacing: 0;
  line-height: normal;
`;

const Circle = styled.div`
  margin-top: 8px;
  margin-right: -2px;
  display: flex;
  padding: 0 0px;
  align-items: flex-start;
  min-width: 99.92047119140625px;
`;

const OverlapGroup = styled.div`
  width: 98px;
  height: 100px;
  position: relative;
`;

const Percent = styled.div`
  ${InterSemiBoldWhite18px}
  position: absolute;
  top: 39px;
  left: 31px;
  letter-spacing: 0;
  line-height: normal;
`;

const Gray = styled.img`
  position: absolute;
  width: 98px;
  height: 100px;
  top: 0;
  left: 0;
`;

const Red = styled.img`
  position: absolute;
  width: 97px;
  height: 99px;
  top: 0;
  left: 0;
`;

export default Team;
