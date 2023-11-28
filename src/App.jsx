import React, { useState } from "react";
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
import Training from "./Training";

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

        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="chooseus">
          <ChooseUs />
        </section>
        <section id="technology">
          <Box my={3}>
            <Technology />
          </Box>
        </section>
        <section id="training">
          <Training />
        </section>
        <section id="contactus">
          <Contactus />
        </section>
      </Box>
    </ThemeProvider>
  );
}

export default App;
