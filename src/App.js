import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./components/Card/Card";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import {
  CardButton,
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
            <Card type={`info`}/>
          <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20}}>
            <Card />
            <Card />
            <Card />
          </div>
          </ContentWrapper>
        </MainContainer>
      </Wrapper>
    </DashboardContainer>
  );
}

export default App;
