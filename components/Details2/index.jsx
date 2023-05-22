import React from "react";
import Frame31412 from "../Frame31412";
import styled from "styled-components";


function Details2(props) {
  const { frame314121Props, frame314122Props } = props;

  return (
    <Details>
      <Frame31412
        moneyAlert31Props={frame314121Props.moneyAlert31Props}
        moneyAlert32Props={frame314121Props.moneyAlert32Props}
        moneyAlert33Props={frame314121Props.moneyAlert33Props}
      />
      <Frame31412
        moneyAlert31Props={frame314122Props.moneyAlert31Props}
        moneyAlert32Props={frame314122Props.moneyAlert32Props}
        moneyAlert33Props={frame314122Props.moneyAlert33Props}
      />
    </Details>
  );
}

const Details = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

export default Details2;
