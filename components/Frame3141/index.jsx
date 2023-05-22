import React from "react";
import MoneyAlert2 from "../MoneyAlert2";
import styled from "styled-components";


function Frame3141(props) {
  const { moneyAlert21Props, moneyAlert22Props, moneyAlert23Props } = props;

  return (
    <Frame31411>
      <MoneyAlert2
        iconThumbs_Up={moneyAlert21Props.iconThumbs_Up}
        inTheMoneyAlert={moneyAlert21Props.inTheMoneyAlert}
      />
      <MoneyAlert2
        iconThumbs_Up={moneyAlert22Props.iconThumbs_Up}
        inTheMoneyAlert={moneyAlert22Props.inTheMoneyAlert}
      />
      <MoneyAlert2
        iconThumbs_Up={moneyAlert23Props.iconThumbs_Up}
        inTheMoneyAlert={moneyAlert23Props.inTheMoneyAlert}
        className={moneyAlert23Props.className}
      />
    </Frame31411>
  );
}

const Frame31411 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  flex: 1;
`;

export default Frame3141;
