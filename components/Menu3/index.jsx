import React from "react";
import styled from "styled-components";
import { InterSemiBoldSnowDrift16px } from "../../styledMixins";


function Menu3(props) {
  const { children } = props;

  return (
    <Menu>
      <AddTask>{children}</AddTask>
    </Menu>
  );
}

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0px 0px 0px 48px;
  position: relative;
  align-self: stretch;
  opacity: 0.8;
`;

const AddTask = styled.div`
  ${InterSemiBoldSnowDrift16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default Menu3;
