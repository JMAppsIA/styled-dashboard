import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./components/Card/Card";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import {
  CardButton,
  CardContainer,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
  CardTitle,
  CardWrapper,
} from "./styled-components/Card";
import {
  DashboardContainer,
  Header,
  LeftSide,
  MainContainer,
  Wrapper,
  Footer,
  ContentWrapper,
} from "./styled-components/Dashboard";

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
              <h1
                style={{
                  color: "var(--white)",
                  marginBottom: 14,
                }}
              >
                Your content
              </h1>
              <CardContainer align={`row`}>
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
              </CardContainer>
            </CardContainer>
            <CardContainer align={`column`}>
              <h1
                style={{
                  color: "var(--white)",
                  marginBottom: 14,
                }}
              >
                Your content
              </h1>
              <CardContainer align={`row`}>
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
              </CardContainer>
            </CardContainer>
            <CardContainer align={`column`}>
              <h1
                style={{
                  color: "var(--white)",
                  marginBottom: 14,
                }}
              >
                Your content
              </h1>
              <CardContainer align={`row`}>
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
              </CardContainer>
            </CardContainer>
          </ContentWrapper>
        </MainContainer>
      </Wrapper>
    </DashboardContainer>
  );
}

export default App;
