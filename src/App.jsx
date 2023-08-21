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
import ChooseUs from "./ChooseUs";

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
        <Home />
        <ChooseUs/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
