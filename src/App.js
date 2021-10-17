import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { Layout } from "./components/Layout";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import "./App.css";
import "antd/dist/antd.css";
import { muiTheme, styledTheme } from "./theme";
import { AddHouse } from "./pages/AddHouse.js";

import "../node_modules/antd/lib/style/themes/default.less";
import "../node_modules/antd/dist/antd.less"; // Import Ant Design styles by less entry
import "./theme.less";

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={styledTheme}>
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
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
