import React from "react";
import styled from "styled-components";
import {
  InterNormalTurquoisePearl12px,
  InterNormalSantasGray12px,
  InterBoldTurquoisePearl39px,
  ValignTextMiddle,
  ValignTextBottom,
} from "../../styledMixins";


function Frame286() {
  return (
    <Frame2861>
      <Frame287>
        <Price>$</Price>
        <Number>350</Number>
      </Frame287>
      <Mo>/mo</Mo>
    </Frame2861>
  );
}

const Frame2861 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 4px;
  position: relative;
`;

const Frame287 = styled.div`
  display: flex;
  width: fit-content;
  height: 40px;
  align-items: flex-start;
  position: relative;
`;

const Price = styled.div`
  ${ValignTextMiddle}
  ${InterNormalTurquoisePearl12px}
            position: relative;
  width: 8px;
  height: 26px;
  margin-top: -0.95px;
  letter-spacing: 0;
  line-height: 15.4px;
`;

const Number = styled.div`
  ${ValignTextBottom}
  ${InterBoldTurquoisePearl39px}
            position: relative;
  width: fit-content;
  margin-top: -0.95px;
  margin-bottom: -6.05px;
  letter-spacing: -0.78px;
  line-height: 46.8px;
  white-space: nowrap;
`;

const Mo = styled.div`
  ${InterNormalSantasGray12px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame2862 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 4px;
  position: relative;
`;

const Frame2871 = styled.div`
  display: flex;
  width: fit-content;
  height: 40px;
  align-items: flex-start;
  position: relative;
`;

const Price1 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalTurquoisePearl12px}
            position: relative;
  width: 8px;
  height: 26px;
  margin-top: -0.95px;
  letter-spacing: 0;
  line-height: 15.4px;
`;

const Number1 = styled.div`
  ${ValignTextBottom}
  ${InterBoldTurquoisePearl39px}
            position: relative;
  width: fit-content;
  margin-top: -0.95px;
  margin-bottom: -6.05px;
  letter-spacing: -0.78px;
  line-height: 46.8px;
  white-space: nowrap;
`;

const Mo1 = styled.div`
  ${InterNormalSantasGray12px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame286;
