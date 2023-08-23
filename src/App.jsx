import { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Toolbar,
} from "@mui/material";
import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";
import Contactus from "./Contactus";
import About from "./About";
import ChooseUs from "./ChooseUs";
import Technology from "./Technology";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7942d4",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box component="main">
        <Toolbar />

        <Box>
          <Home />
        </Box>
        <About />
        <Services />
        <ChooseUs />
        <Box my={3}>
          <Technology />
        </Box>
        <Contactus />
      </Box>
    </ThemeProvider>
  );
}

export default App;
