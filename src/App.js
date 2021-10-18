import React from "react";
import { Layout } from "./components/Layout";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ThemeProvider } from "styled-components";

import "./App.less";

import { theme } from "./theme";
import { AddHouse } from "./pages/AddHouse.js";
import "./data";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/add-house">
              <AddHouse />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
