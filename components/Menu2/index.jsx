import React from "react";
import styled from "styled-components";
import { InterSemiBoldWhite16px } from "../../styledMixins";


function Menu2(props) {
  const { addTask } = props;

  return (
    <Menu>
      <Icon src="/img/icon-1.svg" alt="Icon" />
      <AddTask>{addTask}</AddTask>
    </Menu>
  );
}

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Icon = styled.img`
  position: relative;
  min-width: 18px;
  height: 18px;
`;

const AddTask = styled.div`
  ${InterSemiBoldWhite16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default Menu2;
