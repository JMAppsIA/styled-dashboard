import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import { DashboardContainer, Header, LeftSide, MainContainer, Wrapper, Footer } from "./styled-components/Dashboard";


function App() {
  return (
    <DashboardContainer>
      <Header>
        <Navbar />
      </Header>
      <Wrapper>
        <LeftSide>
          <Sidebar/>
        </LeftSide>
        <MainContainer>

        </MainContainer>
      </Wrapper>
    </DashboardContainer>
  );
}

export default App;
