import React from "react";
import styled from "styled-components";
import { InterNormalCapeCod18px, InterBoldHunterGreen36px } from "../../styledMixins";


function Item(props) {
  const { price, signalStats } = props;

  return (
    <Item1>
      <Price>{price}</Price>
      <Group3138>
        <SignalStats>{signalStats}</SignalStats>
      </Group3138>
    </Item1>
  );
}

const Item1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 173px;
  height: 108px;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Price = styled.div`
  ${InterBoldHunterGreen36px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

const Group3138 = styled.div`
  position: relative;
  min-width: 179px;
  height: 22px;
  margin-right: -5.68px;
`;

const SignalStats = styled.div`
  ${InterNormalCapeCod18px}
  position: absolute;
  width: 177px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
`;

export default Item;
