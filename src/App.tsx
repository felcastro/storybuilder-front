import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutesSwitch from "./AppRoutesSwitch";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { ThemeProvider } from "./contexts/ThemeProvider";

const Main = styled.main`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
`;

const WrapperMainContent = styled.div`
  flex: 1;
`;

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Main>
          <Wrapper>
            <Sidebar />
            <WrapperMainContent>
              <AppRoutesSwitch />
            </WrapperMainContent>
          </Wrapper>
        </Main>
      </Router>
    </ThemeProvider>
  );
}
