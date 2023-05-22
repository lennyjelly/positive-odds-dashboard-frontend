import React from 'react';
import Frame3251 from '../Frame3251';
import styled from 'styled-components';

function Frame3253(props) {
  const {
    frame32511Props,
    frame32512Props,
    frame32513Props,
    frame32514Props,
    frame32515Props,
    frame32516Props,
  } = props;

  return (
    <Details>
      <Frame3251 inTheMoneyAlert={frame32511Props.inTheMoneyAlert} />
      <Frame3251
        inTheMoneyAlert={frame32512Props.inTheMoneyAlert}
        className={frame32512Props.className}
      />
      <Frame3251 inTheMoneyAlert={frame32513Props.inTheMoneyAlert} />
      <Frame3251 inTheMoneyAlert={frame32514Props.inTheMoneyAlert} />
      <Frame3251 inTheMoneyAlert={frame32515Props.inTheMoneyAlert} />
      <Frame3251 inTheMoneyAlert={frame32516Props.inTheMoneyAlert} />
    </Details>
  );
}

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

export default Frame3253;
