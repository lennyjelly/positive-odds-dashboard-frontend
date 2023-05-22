import React from "react";
import styled from "styled-components";
import { InterSemiBoldMantis16px } from "../../styledMixins";


function Menu(props) {
  const { addTask } = props;

  return (
    <Menu1>
      <Icon src="/img/icon.svg" alt="Icon" />
      <AddTask>{addTask}</AddTask>
    </Menu1>
  );
}

const Menu1 = styled.div`
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
  ${InterSemiBoldMantis16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default Menu;
