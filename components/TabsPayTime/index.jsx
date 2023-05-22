import React from "react";
import styled from "styled-components";
import { DesktopPoDashboardbody2Semibold, DesktopPoDashboardbody2Regular } from "../../styledMixins";


function TabsPayTime(props) {
  const { className } = props;

  return (
    <TabsPayTime1 className={`tabs-pay-time ${className || ""}`}>
      <MonthlySelected className="monthly-selected">
        <Monthly className="monthly">Monthly</Monthly>
      </MonthlySelected>
      <WeeklyDisabled className="weekly-disabled">
        <Weekly className="weekly">Weekly</Weekly>
      </WeeklyDisabled>
      <WeeklyDisabled className="yearly-disabled">
        <Weekly className="yearly">Yearly</Weekly>
      </WeeklyDisabled>
    </TabsPayTime1>
  );
}

const TabsPayTime1 = styled.div`
  display: flex;
  width: fit-content;
  height: 44px;
  align-items: center;
  justify-content: center;
  padding: 12px 4px;
  position: absolute;
  top: 206px;
  left: 591px;
  background-color: var(--mine-shaft);
  border-radius: 8px;
  overflow: hidden;

  &.tabs-pay-time.tabs-pay-time-1 {
    position: relative;
    top: unset;
    left: unset;
  }

  &.tabs-pay-time.tabs-pay-time-2 {
    position: relative;
    top: unset;
    left: unset;
  }
`;

const MonthlySelected = styled.div`
  display: flex;
  width: fit-content;
  height: 36px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 14px;
  position: relative;
  margin-top: -8px;
  margin-bottom: -8px;
  background-color: var(--mantis);
  border-radius: 6px;
  overflow: hidden;
`;

const Monthly = styled.div`
  ${DesktopPoDashboardbody2Semibold}
  position: relative;
  width: fit-content;
  margin-top: -7px;
  margin-bottom: -5px;
  font-weight: 600;
  color: var(--outer-space-2);
  line-height: 24px;
  white-space: nowrap;
`;

const WeeklyDisabled = styled.div`
  display: flex;
  width: fit-content;
  height: 36px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 14px;
  position: relative;
  margin-top: -8px;
  margin-bottom: -8px;
  border-radius: 6px;
  overflow: hidden;
`;

const Weekly = styled.div`
  ${DesktopPoDashboardbody2Regular}
  position: relative;
  width: fit-content;
  margin-top: -7px;
  margin-bottom: -5px;
  font-weight: 400;
  color: var(--santas-gray);
  line-height: 24px;
  white-space: nowrap;
`;

export default TabsPayTime;
