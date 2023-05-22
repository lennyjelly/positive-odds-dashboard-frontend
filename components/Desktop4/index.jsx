import React from "react";
import SearchInput from "../SearchInput";
import Frame3235 from "../Frame3235";
import ButtonMedium from "../ButtonMedium";
import X8 from "../X8";
import Frame31372 from "../Frame31372";
import User2 from "../User2";
import Item from "../Item";
import styled from "styled-components";
import {
  InterBoldHunterGreen39px,
  InterMediumRockBlue18px,
  ValignTextMiddle,
  InterNormalCapeCod18px,
  InterBoldCapeCod20px,
  InterSemiBoldHunterGreen18px,
  InterNormalCapeCod16px,
  InterNormalHunterGreen39px,
  InterSemiBoldMantis14px,
  InterSemiBoldHunterGreen16px,
  InterNormalCapeCod14px,
  InterSemiBoldWhite18px,
} from "../../styledMixins";


function Desktop4(props) {
  const {
    dashboard,
    expenses1,
    expenses2,
    expenses3,
    expenses4,
    positivePerformance,
    banner11,
    text1,
    plays,
    banner12,
    text2,
    linesWatched,
    banner13,
    spanText1,
    spanText2,
    positiveUnits,
    liveGames,
    line3,
    signals,
    expenses5,
    above,
    below,
    place,
    number1,
    posted,
    number2,
    avatar,
    image11,
    name,
    percent1,
    percent2,
    searchInputProps,
    frame32351Props,
    frame32352Props,
    buttonMediumProps,
    x81Props,
    x82Props,
    x83Props,
    frame313721Props,
    user21Props,
    user22Props,
    user23Props,
    user24Props,
    frame313722Props,
    item1Props,
    item2Props,
  } = props;

  return (
    <Desktop41>
      <Frame3137>
        <Topbar>
          <LeftContent>
            <LeftContent>
              <Frame37>
                <Dashboard>{dashboard}</Dashboard>
              </Frame37>
            </LeftContent>
          </LeftContent>
          <RightContent>
            <PhbellSimpleRingingFill>
              <OverlapGroup>
                <IconNotifications src="/img/subtract.svg" alt="icon-notifications" />
                <Ellipse2092></Ellipse2092>
              </OverlapGroup>
            </PhbellSimpleRingingFill>
            <SearchInput tryMiamiBeachhouse={searchInputProps.tryMiamiBeachhouse} search={searchInputProps.search} />
          </RightContent>
        </Topbar>
        <Frame125>
          <Frame121>
            <MaterialSymbolsinfoRounded
              src="/img/material-symbols-info-rounded.svg"
              alt="material-symbols:info-rounded"
            />
            <Frame1211>
              <Expenses>{expenses1}</Expenses>
              <Expenses>{expenses2}</Expenses>
              <Expenses1>{expenses3}</Expenses1>
            </Frame1211>
          </Frame121>
          <ButtonSecondary>
            <Expenses2>{expenses4}</Expenses2>
            <IcroundKeyboardArrowRight
              src="/img/ic-round-keyboard-arrow-right.svg"
              alt="ic:round-keyboard-arrow-right"
            />
          </ButtonSecondary>
        </Frame125>
      </Frame3137>
      <Dashboard1>
        <Frame3138>
          <PositivePerformance>{positivePerformance}</PositivePerformance>
          <Metrics>
            <Banner1 style={{ backgroundImage: `url(${banner11})` }}>
              <Frame31371>
                <Text3>{text1}</Text3>
                <Plays>{plays}</Plays>
              </Frame31371>
            </Banner1>
            <Banner1 style={{ backgroundImage: `url(${banner12})` }}>
              <Frame31371>
                <Text3>{text2}</Text3>
                <Plays>{linesWatched}</Plays>
              </Frame31371>
            </Banner1>
            <Banner1 style={{ backgroundImage: `url(${banner13})` }}>
              <Frame31373>
                <Text5>
                  <span className="inter-normal-hunter-green-39px">{spanText1}</span>
                  <span className="inter-bold-hunter-green-39px">{spanText2}</span>
                </Text5>
                <PositiveUnits>{positiveUnits}</PositiveUnits>
              </Frame31373>
              <IsolationMode src="/img/isolation-mode.svg" alt="Isolation_Mode" />
            </Banner1>
          </Metrics>
        </Frame3138>
        <Metrics>
          <Frame3139>
            <FlexCol>
              <Frame31374>
                <LiveGames>{liveGames}</LiveGames>
              </Frame31374>
              <OverlapGroup1>
                <Metrics1>
                  <Frame3235 {...frame32351Props} />
                  <Frame3235 {...frame32352Props} />
                </Metrics1>
                <Line3 src={line3} alt="Line 3" />
              </OverlapGroup1>
              <ButtonMedium>{buttonMediumProps.children}</ButtonMedium>
            </FlexCol>
          </Frame3139>
          <Frame3140>
            <Frame31375>
              <Frame3244>
                <LiveGames>{signals}</LiveGames>
                <ButtonSecondary>
                  <Expenses2>{expenses5}</Expenses2>
                  <IcroundKeyboardArrowRight
                    src="/img/ic-round-keyboard-arrow-right-1.svg"
                    alt="ic:round-keyboard-arrow-right"
                  />
                </ButtonSecondary>
              </Frame3244>
              <Frame3243>
                <Chart>
                  <OverlapGroup2>
                    <Above src={above} alt="above" />
                    <Below src={below} alt="below" />
                  </OverlapGroup2>
                </Chart>
                <List>
                  <X01>
                    <Place>{place}</Place>
                    <Number>{number1}</Number>
                  </X01>
                  <X8 tweeted={x81Props.tweeted} number={x81Props.number} />
                  <X01>
                    <Place>{posted}</Place>
                    <Number1>{number2}</Number1>
                  </X01>
                  <X8 tweeted={x82Props.tweeted} number={x82Props.number} />
                  <X8 tweeted={x83Props.tweeted} number={x83Props.number} />
                </List>
              </Frame3243>
            </Frame31375>
            <Frame31376>
              <Frame31375>
                <Frame31372
                  injuredPlayers={frame313721Props.injuredPlayers}
                  expenses={frame313721Props.expenses}
                  icRoundKeyboardArrowRight={frame313721Props.icRoundKeyboardArrowRight}
                />
                <Team>
                  <Content>
                    <Users>
                      <User2 avatar={user21Props.avatar} name={user21Props.name} />
                      <User2 avatar={user22Props.avatar} name={user22Props.name} className={user22Props.className} />
                      <User2 avatar={user23Props.avatar} name={user23Props.name} className={user23Props.className} />
                      <User4>
                        <Avatar style={{ backgroundImage: `url(${avatar})` }}>
                          <Image11 src={image11} alt="image 11" />
                        </Avatar>
                        <Name>{name}</Name>
                      </User4>
                      <User2 avatar={user24Props.avatar} name={user24Props.name} className={user24Props.className} />
                    </Users>
                  </Content>
                </Team>
              </Frame31375>
              <Frame31375>
                <Frame31372
                  injuredPlayers={frame313722Props.injuredPlayers}
                  expenses={frame313722Props.expenses}
                  icRoundKeyboardArrowRight={frame313722Props.icRoundKeyboardArrowRight}
                />
                <Team>
                  <Content1>
                    <Group3137>
                      <Circle>
                        <OverlapGroup3>
                          <Percent>{percent1}</Percent>
                          <Gray src="/img/gray.svg" alt="Gray" />
                          <Red src="/img/red.svg" alt="Red" />
                        </OverlapGroup3>
                      </Circle>
                      <Item price={item1Props.price} signalStats={item1Props.signalStats} />
                    </Group3137>
                  </Content1>
                </Team>
                <Team>
                  <Content1>
                    <Group3137>
                      <Circle>
                        <OverlapGroup4>
                          <Percent>{percent2}</Percent>
                          <Gray src="/img/gray.svg" alt="Gray" />
                          <Red1 src="/img/red-1.svg" alt="Red" />
                        </OverlapGroup4>
                      </Circle>
                      <Item price={item2Props.price} signalStats={item2Props.signalStats} />
                    </Group3137>
                  </Content1>
                </Team>
              </Frame31375>
            </Frame31376>
          </Frame3140>
        </Metrics>
      </Dashboard1>
    </Desktop41>
  );
}

const Desktop41 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  position: relative;
  flex: 1;
  background-color: #fcfbfc;
`;

const Frame3137 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-self: stretch;
`;

const Topbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 64px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  box-shadow: inset 0px -1px 0px #f1f1f1;
`;

const LeftContent = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

const Frame37 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const Dashboard = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: #242c35;
  font-size: 31px;
  letter-spacing: -0.47px;
  line-height: 37.2px;
  white-space: nowrap;
`;

const RightContent = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 32px;
  position: relative;
`;

const PhbellSimpleRingingFill = styled.div`
  position: relative;
  min-width: 32px;
  height: 32px;
`;

const OverlapGroup = styled.div`
  position: relative;
  width: 24px;
  height: 27px;
  top: 2px;
  left: 4px;
`;

const IconNotifications = styled.img`
  position: absolute;
  width: 24px;
  height: 25px;
  top: 2px;
  left: 0;
`;

const Ellipse2092 = styled.div`
  position: absolute;
  width: 9px;
  height: 9px;
  top: 0;
  left: 14px;
  background-color: var(--turquoise-pearl);
  border-radius: 4.5px;
`;

const Frame125 = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 16px 64px;
  position: relative;
  align-self: stretch;
  background-color: var(--snow-drift);
  border: 1px solid;
  border-color: var(--cararra);
`;

const Frame121 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  flex: 1;
`;

const MaterialSymbolsinfoRounded = styled.img`
  position: relative;
  min-width: 24px;
  height: 28px;
`;

const Frame1211 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  flex: 1;
`;

const Expenses = styled.div`
  ${InterSemiBoldHunterGreen16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Expenses1 = styled.p`
  ${InterNormalCapeCod16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const ButtonSecondary = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 2px;
  padding: 0px 4px 0px 12px;
  position: relative;
  border-radius: 4px;
`;

const Expenses2 = styled.div`
  ${InterSemiBoldMantis14px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: 22.4px;
  white-space: nowrap;
`;

const IcroundKeyboardArrowRight = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Dashboard1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  padding: 0px 64px 48px;
  position: relative;
  align-self: stretch;
`;

const Frame3138 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const PositivePerformance = styled.div`
  ${InterBoldCapeCod20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: -0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Metrics = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
`;

const Banner1 = styled.div`
  position: relative;
  min-width: 325px;
  height: 177px;
  background-size: 100% 100%;
`;

const Frame31371 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  top: 40px;
  left: 24px;
`;

const Text3 = styled.h1`
  ${InterBoldHunterGreen39px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -0.78px;
  line-height: 46.8px;
  white-space: nowrap;
`;

const Text5 = styled.div`
  ${InterNormalHunterGreen39px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -0.78px;
  line-height: 46.8px;
  white-space: nowrap;
`;

const Plays = styled.div`
  ${InterNormalCapeCod14px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: 16.8px;
  white-space: nowrap;
`;

const Frame31373 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 16px;
  position: absolute;
  top: 40px;
  left: 24px;
`;

const PositiveUnits = styled.div`
  ${InterNormalCapeCod14px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: 16.8px;
  white-space: nowrap;
`;

const IsolationMode = styled.img`
  position: absolute;
  width: 176px;
  height: 177px;
  top: 0;
  left: 137px;
`;

const Frame3139 = styled.div`
  position: relative;
  min-width: 325px;
  height: 692px;
`;

const FlexCol = styled.div`
  position: relative;
  width: 436px;
  left: -111px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 692px;
`;

const Frame31374 = styled.div`
  display: flex;
  position: relative;
  align-self: center;
  margin-right: 93px;
  width: fit-content;
  align-items: center;
  gap: 8px;
`;

const LiveGames = styled.div`
  ${InterBoldCapeCod20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  width: 436px;
  height: 560px;
  position: relative;
  margin-top: 20px;
`;

const Metrics1 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 24px;
  position: absolute;
  top: 0;
  left: 111px;
`;

const Line3 = styled.img`
  position: absolute;
  width: 325px;
  height: 1px;
  top: 494px;
  left: 0;
  object-fit: cover;
`;

const Frame3140 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  flex: 1;
`;

const Frame31375 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Frame3244 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 0px 0px 4px;
  position: relative;
  align-self: stretch;
`;

const Frame3243 = styled.div`
  position: relative;
  min-width: 683px;
  height: 268px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: -1px 2px 20px #f4f4f4;
`;

const Chart = styled.div`
  position: absolute;
  height: 209px;
  top: 32px;
  left: 32px;
  display: flex;
  align-items: flex-end;
  min-width: 363px;
`;

const OverlapGroup2 = styled.div`
  width: 363px;
  height: 209px;
  position: relative;
  margin-bottom: 0;
`;

const Above = styled.img`
  position: absolute;
  width: 363px;
  height: 140px;
  top: 0;
  left: 0;
`;

const Below = styled.img`
  position: absolute;
  width: 363px;
  height: 209px;
  top: 0;
  left: 0;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
  align-items: flex-start;
  gap: 24px;
  position: absolute;
  top: 32px;
  left: 427px;
`;

const X01 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  align-self: stretch;
`;

const Place = styled.div`
  ${InterNormalCapeCod18px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Number = styled.div`
  ${InterSemiBoldHunterGreen18px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const Number1 = styled.div`
  ${InterSemiBoldHunterGreen18px}
  position: relative;
  width: 47px;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame31376 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 32px;
  position: relative;
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  position: relative;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 4px 10px #4f4f4f0d;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  align-self: stretch;
`;

const Users = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const User4 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 277px;
  height: 40px;
`;

const Avatar = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 3px;
  left: 0;
  display: flex;
  align-items: flex-start;
  border-radius: 200px;
  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
`;

const Image11 = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  ${InterMediumRockBlue18px}
            position: absolute;
  height: 22px;
  top: 8px;
  left: 50px;
  letter-spacing: 0;
  line-height: normal;
`;

const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  align-self: stretch;
`;

const Group3137 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 277px;
  height: 108px;
`;

const Circle = styled.div`
  position: absolute;
  height: 100px;
  top: 8px;
  left: 179px;
  display: flex;
  padding: 0 0px;
  align-items: flex-start;
  min-width: 100px;
`;

const OverlapGroup3 = styled.div`
  width: 98px;
  height: 100px;
  position: relative;
  margin-top: 0;
`;

const Percent = styled.div`
  ${InterSemiBoldWhite18px}
  position: absolute;
  width: 36px;
  top: 39px;
  left: 31px;
  letter-spacing: 0;
  line-height: normal;
`;

const Gray = styled.img`
  position: absolute;
  width: 98px;
  height: 100px;
  top: 0;
  left: 0;
`;

const Red = styled.img`
  position: absolute;
  width: 97px;
  height: 99px;
  top: 0;
  left: 0;
`;

const OverlapGroup4 = styled.div`
  width: 98px;
  height: 100px;
  position: relative;
`;

const Red1 = styled.img`
  position: absolute;
  width: 49px;
  height: 99px;
  top: 1px;
  left: 0;
`;

export default Desktop4;
