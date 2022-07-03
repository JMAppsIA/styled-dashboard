import {
  faArrowDown,
  faArrowUp,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./components/Card/Card";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import { CardContainer, CardSection } from "./styled-components/Card";
import { WidgetContainer } from "./styled-components/Widget";
import {
  DashboardContainer,
  Header,
  LeftSide,
  MainContainer,
  Wrapper,
  ContentWrapper,
} from "./styled-components/Dashboard";
import transactionIcon from "./assets/icons/transactions-icon.svg";
import ChartWidget from "./components/ChartWidget/ChartWidget";
import { Text } from "./styled-components/Text";
import { Colors } from "./utilities";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Charts from "./components/Charts/Charts";
import { ChartContainer } from "./styled-components/Chart";

function App() {
  return (
    <DashboardContainer>
      <Header>
        <Navbar />
      </Header>
      <Wrapper>
        <LeftSide>
          <Sidebar />
        </LeftSide>
        <MainContainer>
          <ContentWrapper>
            <CardContainer align={`column`}>
              <Card
                hasBackgroundImage
                imageBg={`https://www.transparenttextures.com/patterns/cubes.png`}
                linearGradient={`#cf4af3,
                #e73bd7,
                #f631bc,
                #fd31a2,
                #ff3a8b,
                #ff4b78,
                #ff5e68,
                #ff705c,
                #ff8c51,
                #ffaa49,
                #ffc848,
                #ffe652`}
                hasPadding
                type={`info`}
                title={`Your Stats`}
                icon={faChartPie}
                description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, quaerat ducimus. Voluptas delectus voluptate error minima fugiat maiores quia beatae. Aliquid quam nulla ratione expedita cumque error maiores, provident a!`}
                buttonLabel={`Start Free`}
                hasImage
                image={`https://assets.codepen.io/3364143/glass.png`}
              />
            </CardContainer>
            <CardContainer align={`column`}>
              <CardSection align={`row`}>
                <Card
                  title={`Your Stats`}
                  icon={faChartPie}
                  description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, quaerat ducimus. Voluptas delectus voluptate error minima fugiat maiores quia beatae. Aliquid quam nulla ratione expedita cumque error maiores, provident a!`}
                  buttonLabel={`Start Free`}
                />
                <Card
                  title={`Your Stats`}
                  icon={faChartPie}
                  description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, quaerat ducimus. Voluptas delectus voluptate error minima fugiat maiores quia beatae. Aliquid quam nulla ratione expedita cumque error maiores, provident a!`}
                  buttonLabel={`Start Free`}
                />
                <Card
                  title={`Your Stats`}
                  icon={faChartPie}
                  description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, quaerat ducimus. Voluptas delectus voluptate error minima fugiat maiores quia beatae. Aliquid quam nulla ratione expedita cumque error maiores, provident a!`}
                  buttonLabel={`Start Free`}
                />
              </CardSection>
            </CardContainer>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <WidgetContainer>
                <ChartWidget
                  title={`Order`}
                  description={`$ 1,286`}
                  hasIcon
                  isCustomIcon
                  icon={transactionIcon}
                  width={42}
                  height={42}
                  footerContent={
                    <Text
                      semi
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FontAwesomeIcon icon={faArrowDown} color={"#FF3E1D"} />
                      <Text semi color={`#FF3E1D`}>
                        -13.24%
                      </Text>
                    </Text>
                  }
                />
                <ChartWidget
                  title={`Sales`}
                  icon={transactionIcon}
                  width={42}
                  height={42}
                  description={`482K`}
                  hasBadge
                  badgeSize={`sm`}
                  badgeText={`+34%`}
                  badgeType={`regular`}
                  textType={Colors.blue900}
                  footerContent={
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Text
                        size={13}
                        color={Colors.grey0}
                      >{`Sales Target`}</Text>
                      <ProgressBar
                        done={78}
                        size={`sm`}
                        color={Colors.primary}
                        hasInnerText
                        textSize={12}
                        textColor={Colors.white}
                      />
                    </div>
                  }
                />
                <ChartWidget
                  title={`Order`}
                  description={`$ 1,286`}
                  hasIcon
                  isCustomIcon
                  icon={transactionIcon}
                  width={42}
                  height={42}
                  footerContent={
                    <Text
                      semi
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        color={Colors.success}
                      />
                      <Text semi color={Colors.success}>
                        +3.24%
                      </Text>
                    </Text>
                  }
                />
                <ChartWidget
                  title={`Order`}
                  description={`$ 1,286`}
                  icon={transactionIcon}
                  width={42}
                  height={42}
                  footerContent={``}
                />
              </WidgetContainer>
              <ChartContainer>
                <Charts type={"donut"} />
              </ChartContainer>
            </div>
          </ContentWrapper>
        </MainContainer>
      </Wrapper>
    </DashboardContainer>
  );
}

export default App;
