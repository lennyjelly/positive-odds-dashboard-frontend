import React from 'react';
import styled from 'styled-components';
import { DesktopPoDashboardbody2Semibold2 } from '../../../styledMixins';

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
  ${DesktopPoDashboardbody2Semibold2}
  position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 600;
  color: var(--snow-drift);
  line-height: 24px;
  white-space: nowrap;
`;

export default Menu3;
