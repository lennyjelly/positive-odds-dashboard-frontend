import React from "react";
import MoneyAlert3 from "../MoneyAlert3";
import styled from "styled-components";


function Frame31412(props) {
  const { moneyAlert31Props, moneyAlert32Props, moneyAlert33Props } = props;

  return (
    <Frame3141>
      <MoneyAlert3
        iconThumbs_Up={moneyAlert31Props.iconThumbs_Up}
        inTheMoneyAlert={moneyAlert31Props.inTheMoneyAlert}
      />
      <MoneyAlert3
        iconThumbs_Up={moneyAlert32Props.iconThumbs_Up}
        inTheMoneyAlert={moneyAlert32Props.inTheMoneyAlert}
        className={moneyAlert32Props.className}
      />
      <MoneyAlert3
        iconThumbs_Up={moneyAlert33Props.iconThumbs_Up}
        inTheMoneyAlert={moneyAlert33Props.inTheMoneyAlert}
      />
    </Frame3141>
  );
}

const Frame3141 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  flex: 1;
`;

export default Frame31412;
