import React from "react";
import Menu from "../Menu";
import Menu2 from "../Menu2";
import Menu3 from "../Menu3";
import Desktop4 from "../Desktop4";
import styled from "styled-components";
import {
  InterSemiBoldSnowDrift16px,
  InterSemiBoldMantis16px,
  ValignTextMiddle,
  InterNormalCapeCod16px,
} from "../../styledMixins";
import "./GamesLive.css";

function GamesLive(props) {
  const {
    above2,
    inProgress,
    number1,
    line32,
    below2,
    expenses1,
    expenses2,
    menuProps,
    menu21Props,
    menu31Props,
    menu32Props,
    menu22Props,
    menu23Props,
    menu24Props,
    menuProps2,
  } = props;

  return (
    <div className="games-live screen">
      <FixedSideBar>
        <TopMenuContainer>
          <WelcomeMessage src={above2} alt="Welcome-Message" />
          <Menu1>
            <Menu addTask={menuProps.addTask} />
            <Frame122>
              <Menu2 addTask={menu21Props.addTask} />
              <Menu4>
                <InProgress>{inProgress}</InProgress>
                <Frame3137>
                  <Number>{number1}</Number>
                </Frame3137>
              </Menu4>
              <Menu3>{menu31Props.children}</Menu3>
              <Menu3>{menu32Props.children}</Menu3>
            </Frame122>
            <Menu2 addTask={menu22Props.addTask} />
            <Line1 src={line32} alt="Line 1" />
            <Menu2 addTask={menu23Props.addTask} />
            <Menu2 addTask={menu24Props.addTask} />
          </Menu1>
        </TopMenuContainer>
        <MenuAccount>
          <CTA>
            <Frame121>
              <Frame1211 src={below2} alt="Frame 121" />
              <Frame1212>
                <Expenses>{expenses1}</Expenses>
                <Expenses1>{expenses2}</Expenses1>
              </Frame1212>
            </Frame121>
          </CTA>
        </MenuAccount>
      </FixedSideBar>
      <Desktop4 {...menuProps2} />
    </div>
  );
}

const FixedSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 272px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px 32px 40px;
  position: relative;
  align-self: stretch;
  background-color: var(--outer-space);
`;

const TopMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const WelcomeMessage = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 208px;
  height: 84.28987121582031px;
`;

const Menu1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  padding: 0px 8px;
  position: relative;
  align-self: stretch;
`;

const Frame122 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Menu4 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0px 0px 0px 48px;
  position: relative;
  align-self: stretch;
  opacity: 0.8;
`;

const InProgress = styled.div`
  ${InterSemiBoldSnowDrift16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame3137 = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  background-color: var(--cape-cod);
  border-radius: 4px;
`;

const Number = styled.div`
  ${InterSemiBoldMantis16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Line1 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 192px;
  height: 1px;
  object-fit: cover;
`;

const MenuAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--beryl-green);
  border-radius: 8px;
`;

const Frame121 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Frame1211 = styled.img`
  position: relative;
  min-width: 40px;
  height: 40px;
`;

const Frame1212 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
  position: relative;
  flex: 1;
`;

const Expenses = styled.div`
  ${ValignTextMiddle}
  ${InterNormalCapeCod16px}
            position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Expenses1 = styled.div`
  position: relative;
  align-self: stretch;
  opacity: 0.6;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--cape-cod);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 16.8px;
  white-space: nowrap;
`;

export default GamesLive;
