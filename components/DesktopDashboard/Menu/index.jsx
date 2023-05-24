import React from 'react';
import styled from 'styled-components';
import { DesktopPoDashboardbody2Semibold2 } from '../../../styledMixins';

function Menu(props) {
  const { addTask, className } = props;

  return (
    <Menu1 className={`menu-2 ${className || ''}`}>
      <Icon className="icon" src="/img/icon@2x.png" alt="Icon" />
      <AddTask className="add-task">{addTask}</AddTask>
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
  ${DesktopPoDashboardbody2Semibold2}
  position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 600;
  color: var(--mantis);
  line-height: 24px;
  white-space: nowrap;
`;

const AddTask1 = styled.div`
  ${DesktopPoDashboardbody2Semibold2}

  .menu-2.menu-3  & {
    color: var(--white);
  }
`;

const AddTask2 = styled.div`
  ${DesktopPoDashboardbody2Semibold2}

  .menu-2.menu-4  & {
    color: var(--white);
  }
`;

const AddTask3 = styled.div`
  ${DesktopPoDashboardbody2Semibold2}

  .menu-2.menu-5  & {
    color: var(--white);
  }
`;

const AddTask4 = styled.div`
  ${DesktopPoDashboardbody2Semibold2}

  .menu-2.menu-6  & {
    color: var(--white);
  }
`;

export default Menu;
