import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box, ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import { ThemeProvider } from "styled-components/macro";

import About from "./views/About/About";
import Home from "./views/Home/Home";
import Nav from "./components/Nav/Nav";

import theme from "./ui/theme";

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Box component="main" className="container">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
        </Switch>
      </Box>
    </ThemeProvider>
    </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
