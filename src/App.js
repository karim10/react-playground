import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { Layout } from "./components/Layout";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { FormPage } from "./pages/Form";

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
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/form">
              <FormPage />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
