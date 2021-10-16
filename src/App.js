import React from "react";
import "./App.css";
import styled from "styled-components";
import { Tab, Tabs } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#E33E7F",
      },
      primary: {
        main: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout></Layout>
    </ThemeProvider>
  );
}

function Layout() {
  return (
    <Container>
      <Header>
        <HeaderNav />
      </Header>
      <Content />
      <Footer />
    </Container>
  );
}

const Header = styled.div`
  height: 70px;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  background-color: green;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function HeaderNav() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <Tab label="Ranking" {...a11yProps(0)} />
      <Tab label="Submission" {...a11yProps(1)} />
    </Tabs>
  );
}

const Footer = styled.div`
  height: 100px;
  width: 100%;
  background-color: green;
`;

const Content = styled.div`
  flex: 1;
  background-color: blue;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
