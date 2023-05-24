import React from 'react';
import Menu from './Menu';
import Menu3 from './Menu3';
import SearchInput from './SearchInput';
import Frame3235 from './Frame3235';
import ButtonMedium3 from './ButtonMedium3';
import X8 from './X8';
import Frame31372 from './Frame31372';
import User2 from './User2';
import Team from './Team';
import styled from 'styled-components';
import {
  InterBoldHunterGreen39px,
  InterBoldSnowDrift20px2,
  ValignTextMiddle,
  InterNormalCararra18px,
  InterMediumSnowDrift18px,
  DesktopPoDashboardbody2Semibold2,
  InterSemiBoldSnowDrift18px,
  InterNormalHunterGreen39px,
  DesktopPoDashboardeyebrowSemibold,
  DesktopPoDashboardbody2Regular2,
  DesktopPoDashboardeyebrowRegular2,
} from '../../styledMixins';
import './DesktopDashboard.css';

function DesktopDashboard(props) {
  const {
    welcomeMessage,
    inProgress,
    number1,
    line1,
    frame121,
    expenses1,
    expenses2,
    dashboard,
    subtract,
    materialSymbolsInfoRounded,
    expenses3,
    expenses4,
    expenses5,
    expenses6,
    icRoundKeyboardArrowRight1,
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
    isolation_Mode,
    games,
    live,
    line3,
    signals,
    expenses7,
    icRoundKeyboardArrowRight2,
    above,
    below,
    place,
    number2,
    posted,
    number3,
    avatar,
    image11,
    name,
    menu1Props,
    menu2Props,
    menu31Props,
    menu32Props,
    menu3Props,
    menu4Props,
    menu5Props,
    searchInputProps,
    frame32351Props,
    frame32352Props,
    buttonMedium3Props,
    x81Props,
    x82Props,
    x83Props,
    frame313721Props,
    user21Props,
    user22Props,
    user23Props,
    user24Props,
    frame313722Props,
  } = props;

  return (
    <div className="desktop-dashboard screen">
      <FixedSideBar>
        <TopMenuContainer>
          <CompanyLogo src={welcomeMessage} alt="company-logo" />
          {/* Side Navigator */}
          <Menu1>
            <Menu addTask={menu1Props.addTask} />
            <Frame122>
              <Menu
                addTask={menu2Props.addTask}
                className={menu2Props.className}
              />
              <Menu2>
                <InProgress>{inProgress}</InProgress>
                <Frame3137>
                  <Number>{number1}</Number>
                </Frame3137>
              </Menu2>
              <Menu3>{menu31Props.children}</Menu3>
              <Menu3>{menu32Props.children}</Menu3>
            </Frame122>
            <Menu
              addTask={menu3Props.addTask}
              className={menu3Props.className}
            />
            <Line1 src={line1} alt="Line 1" />
            <Menu
              addTask={menu4Props.addTask}
              className={menu4Props.className}
            />
            <Menu
              addTask={menu5Props.addTask}
              className={menu5Props.className}
            />
          </Menu1>
        </TopMenuContainer>
        <ActiveUser>
          <CTA>
            <Frame121>
              <Frame1211 src={frame121} alt="Frame 121" />
              <Frame1212>
                <Expenses>{expenses1}</Expenses>
                <Expenses1>{expenses2}</Expenses1>
              </Frame1212>
            </Frame121>
          </CTA>
        </ActiveUser>
      </FixedSideBar>

      {/*  */}
      <Dashboard>
        <TopNavigation>
          <Topbar>
            <PageTitle>{dashboard}</PageTitle>
            <RightContent>
              <PhbellSimpleRingingFill>
                <OverlapGroup>
                  <Subtract src={subtract} alt="Subtract" />
                  <Ellipse2092></Ellipse2092>
                </OverlapGroup>
              </PhbellSimpleRingingFill>
              {/* TODO: Fix search input */}
              <SearchInput1>
                <TryMiamiBeachhouse>
                  {searchInputProps.tryMiamiBeachhouse}
                </TryMiamiBeachhouse>
                <IconSearch src="/img/search-1@2x.png" alt="icon-search" />
              </SearchInput1>
            </RightContent>
          </Topbar>
          {/* TODO: Separate announcement banner component */}
          <Announcement>
            <AnnouncementText>
              <MaterialSymbolsinfoRounded
                src={materialSymbolsInfoRounded}
                alt="material-symbols:info-rounded"
              />
              <Frame1213>
                <InProgress>{expenses3}</InProgress>
                <InProgress>{expenses4}</InProgress>
                <Expenses2>{expenses5}</Expenses2>
              </Frame1213>
            </AnnouncementText>
            <ButtonSecondary>
              <Expenses3>{expenses6}</Expenses3>
              <IcroundKeyboardArrowRight
                src={icRoundKeyboardArrowRight1}
                alt="ic:round-keyboard-arrow-right"
              />
            </ButtonSecondary>
          </Announcement>
        </TopNavigation>

        <Dashboard2>
          {/* TODO: Update data displayed in Positive Performance component */}
          <PositivePerformance>
            <PositivePerformance1>{positivePerformance}</PositivePerformance1>
            <Metrics>
              <Banner1 style={{ backgroundImage: `url(${banner11})` }}>
                <Frame31371>
                  <Text1>{text1}</Text1>
                  <Plays>{plays}</Plays>
                </Frame31371>
              </Banner1>
              <Banner1 style={{ backgroundImage: `url(${banner12})` }}>
                <Frame31373>
                  <Text1>{text2}</Text1>
                  <Plays>{linesWatched}</Plays>
                </Frame31373>
              </Banner1>
              <Banner11 style={{ backgroundImage: `url(${banner13})` }}>
                <Frame31374>
                  <Text1>
                    <span className="inter-normal-hunter-green-39px">
                      {spanText1}
                    </span>
                    <span className="inter-bold-hunter-green-39px">
                      {spanText2}
                    </span>
                  </Text1>
                  <PositiveUnits>{positiveUnits}</PositiveUnits>
                </Frame31374>
                <IsolationMode src={isolation_Mode} alt="Isolation_Mode" />
              </Banner11>
            </Metrics>
          </PositivePerformance>
          <Metrics>
            {/* TODO: Separate LiveGames component */}
            <LiveGames>
              <Frame31375>
                <Frame37>
                  <Games>{games}</Games>
                  <Frame3146>
                    <Ellipse20921></Ellipse20921>
                    <LIVE>{live}</LIVE>
                  </Frame3146>
                </Frame37>
              </Frame31375>
              <Metrics1>
                <Frame3235
                  frame31371Props={frame32351Props.frame31371Props}
                  frame31372Props={frame32351Props.frame31372Props}
                />
                <Frame3235
                  className={frame32352Props.className}
                  frame31371Props={frame32352Props.frame31371Props}
                  frame31372Props={frame32352Props.frame31372Props}
                />
              </Metrics1>
              <Line3 src={line3} alt="Line 3" />
              <ButtonMedium3>{buttonMedium3Props.children}</ButtonMedium3>
            </LiveGames>
            <SignalsAndPlayers>
              <Signals>
                <Frame3244>
                  <Games>{signals}</Games>
                  <ButtonSecondary>
                    <Expenses3>{expenses7}</Expenses3>
                    <IcroundKeyboardArrowRight
                      src={icRoundKeyboardArrowRight2}
                      alt="ic:round-keyboard-arrow-right"
                    />
                  </ButtonSecondary>
                </Frame3244>
                <Frame3243>
                  <OverlapGroup1>
                    <OverlapGroup2>
                      <Above src={above} alt="above" />
                      <Below src={below} alt="below" />
                    </OverlapGroup2>
                    <List>
                      <X01>
                        <Place>{place}</Place>
                        <Number1>{number2}</Number1>
                      </X01>
                      <X8 tweeted={x81Props.tweeted} number={x81Props.number} />
                      <X01>
                        <Place>{posted}</Place>
                        <Number2>{number3}</Number2>
                      </X01>
                      <X8 tweeted={x82Props.tweeted} number={x82Props.number} />
                      <X8 tweeted={x83Props.tweeted} number={x83Props.number} />
                    </List>
                  </OverlapGroup1>
                </Frame3243>
              </Signals>
              <Players>
                {/* TODO: Separate Injured players component preview */}
                <Signals>
                  <Frame31372
                    injuredPlayers={frame313721Props.injuredPlayers}
                  />
                  <Team1>
                    <Content>
                      <Users>
                        <User2
                          avatar={user21Props.avatar}
                          name={user21Props.name}
                        />
                        <User2
                          avatar={user22Props.avatar}
                          name={user22Props.name}
                          className={user22Props.className}
                        />
                        <User2
                          avatar={user23Props.avatar}
                          name={user23Props.name}
                          className={user23Props.className}
                        />
                        <User4>
                          <Avatar style={{ backgroundImage: `url(${avatar})` }}>
                            <Image11 src={image11} alt="image 11" />
                          </Avatar>
                          <Name>{name}</Name>
                        </User4>
                        <User2
                          avatar={user24Props.avatar}
                          name={user24Props.name}
                          className={user24Props.className}
                        />
                      </Users>
                    </Content>
                  </Team1>
                </Signals>
                {/* TODO: Separate More States component */}
                <Signals>
                  <Frame31372
                    injuredPlayers={frame313722Props.injuredPlayers}
                  />
                  <Frame3139>
                    <Team />
                    <Team />
                  </Frame3139>
                </Signals>
              </Players>
            </SignalsAndPlayers>
          </Metrics>
        </Dashboard2>
      </Dashboard>
    </div>
  );
}

const SearchInput1 = styled.div`
  display: flex;
  width: 288px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  position: relative;
  background-color: var(--outer-space);
  border-radius: 6px;
  overflow: hidden;
`;

const TryMiamiBeachhouse = styled.div`
  ${DesktopPoDashboardbody2Regular2}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--cararra);
  line-height: 24px;
  white-space: nowrap;
`;

const IconSearch = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

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

const CompanyLogo = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 208px;
  height: 84.289794921875px;
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

const Menu2 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0px 0px 0px 48px;
  position: relative;
  align-self: stretch;
  opacity: 0.8;
`;

const InProgress = styled.div`
  ${DesktopPoDashboardbody2Semibold2}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 600;
  color: var(--snow-drift);
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
  ${DesktopPoDashboardbody2Semibold2}
  position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 600;
  color: var(--mantis);
  text-align: center;
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

const ActiveUser = styled.div`
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
  ${DesktopPoDashboardbody2Regular2}
            position: relative;
  align-self: stretch;
  margin-top: -1px;
  font-weight: 400;
  color: var(--cape-cod);
  line-height: 24px;
  white-space: nowrap;
`;

const Expenses1 = styled.div`
  ${DesktopPoDashboardeyebrowSemibold}
  position: relative;
  align-self: stretch;
  opacity: 0.6;
  font-weight: 600;
  color: var(--cape-cod);
  line-height: 16.8px;
  white-space: nowrap;
`;

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  position: relative;
  flex: 1;
  background-color: #1e2221;
`;

const TopNavigation = styled.div`
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

const PageTitle = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--snow-drift);
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

const Subtract = styled.img`
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
  background-color: #47b7cb;
  border-radius: 4.5px;
`;

const Announcement = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 16px 64px;
  position: relative;
  align-self: stretch;
  background-color: var(--hunter-green);
`;

const AnnouncementText = styled.div`
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

const Frame1213 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  flex: 1;
`;

const Expenses2 = styled.p`
  ${DesktopPoDashboardbody2Regular2}
  position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 400;
  color: var(--snow-drift);
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

const Expenses3 = styled.div`
  ${DesktopPoDashboardeyebrowSemibold}
  position: relative;
  width: fit-content;
  font-weight: 600;
  color: var(--mantis);
  line-height: 22.4px;
  white-space: nowrap;
`;

const IcroundKeyboardArrowRight = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Dashboard2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  padding: 0px 64px 48px;
  position: relative;
  align-self: stretch;
`;

const PositivePerformance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const PositivePerformance1 = styled.div`
  ${InterBoldSnowDrift20px2}
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
  display: flex;
  flex: 1;
  min-width: 325.33349609375px;
  height: 177px;
  background-size: 100% 100%;
`;

const Frame31371 = styled.div`
  display: flex;
  margin-top: 40px;
  width: 108px;
  height: 80px;
  margin-left: 24px;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Text1 = styled.h1`
  ${InterBoldHunterGreen39px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -0.78px;
  line-height: 46.8px;
  white-space: nowrap;
`;

const Text3 = styled.div`
  ${InterNormalHunterGreen39px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -0.78px;
  line-height: 46.8px;
  white-space: nowrap;
`;

const Plays = styled.div`
  ${DesktopPoDashboardeyebrowRegular2}
  position: relative;
  align-self: stretch;
  font-weight: 400;
  color: var(--cape-cod);
  line-height: 16.8px;
  white-space: nowrap;
`;

const Frame31373 = styled.div`
  display: flex;
  margin-top: 40px;
  width: 129px;
  height: 80px;
  margin-left: 24px;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Banner11 = styled.div`
  position: relative;
  display: flex;
  gap: 28px;
  flex: 1;
  min-width: 325.33349609375px;
  height: 177px;
  background-size: 100% 100%;
`;

const Frame31374 = styled.div`
  display: flex;
  margin-top: 40px;
  width: 88px;
  height: 80px;
  position: relative;
  margin-left: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const PositiveUnits = styled.div`
  ${DesktopPoDashboardeyebrowRegular2}
  position: relative;
  width: fit-content;
  font-weight: 400;
  color: var(--cape-cod);
  line-height: 16.8px;
  white-space: nowrap;
`;

const IsolationMode = styled.img`
  width: 176px;
  height: 177px;
`;

const LiveGames = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Frame31375 = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 2px;
  position: relative;
  align-self: stretch;
`;

const Games = styled.div`
  ${InterBoldSnowDrift20px2}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame3146 = styled.div`
  display: flex;
  width: fit-content;
  height: 24px;
  align-items: center;
  gap: 8px;
  padding: 0px 8px;
  position: relative;
  background-color: var(--beryl-green);
  border-radius: 4px;
`;

const Ellipse20921 = styled.div`
  position: relative;
  min-width: 8px;
  height: 8px;
  background-color: var(--forest-green);
  border-radius: 4px;
`;

const LIVE = styled.div`
  ${DesktopPoDashboardeyebrowSemibold}
  position: relative;
  width: fit-content;
  font-weight: 600;
  color: var(--forest-green);
  line-height: 16.8px;
  white-space: nowrap;
`;

const Metrics1 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 24px;
  position: relative;
`;

const Line3 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 325px;
  height: 1px;
  margin-top: -2992px;
  margin-left: -6401px;
  object-fit: cover;
`;

const SignalsAndPlayers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  flex: 1;
`;

const Signals = styled.div`
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
  padding: 0px 0px 0px 2px;
  position: relative;
  align-self: stretch;
`;

const Frame3243 = styled.div`
  position: relative;
  min-width: 683px;
  height: 268px;
  background-color: #1f2222;
`;

const OverlapGroup1 = styled.div`
  height: 268px;
  display: flex;
  padding: 27px 32px;
  align-items: center;
  min-width: 683px;
  gap: 32px;
  background-color: var(--mine-shaft);
  border-radius: 12px;
`;

const OverlapGroup2 = styled.div`
  width: 363px;
  height: 209px;
  position: relative;
  align-self: flex-end;
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
  position: relative;
  margin-top: 2px;
  flex-direction: column;
  width: 224px;
  align-items: flex-start;
  gap: 24px;
`;

const X01 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  align-self: stretch;
`;

const Place = styled.div`
  ${InterNormalCararra18px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Number1 = styled.div`
  ${InterSemiBoldSnowDrift18px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const Number2 = styled.div`
  ${InterSemiBoldSnowDrift18px}
  position: relative;
  width: 47px;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const Players = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 32px;
  position: relative;
`;

const Team1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  position: relative;
  background-color: var(--mine-shaft);
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
  display: flex;
  gap: 15px;
  align-self: stretch;
  min-width: 277px;
  height: 40px;
`;

const Avatar = styled.div`
  margin-top: 3px;
  width: 35px;
  display: flex;
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
  ${InterMediumSnowDrift18px}
            margin-top: 9px;
  width: 106px;
  height: 22px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame3139 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 32px;
  position: relative;
`;

export default DesktopDashboard;
