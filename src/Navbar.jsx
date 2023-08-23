import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  List,
  ListItemText,
  Drawer,
} from "@mui/material";
import React from "react";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import CloseIcon from "@mui/icons-material/Close";
const drawerWidth = 1000;
const navItems = [
  { label: " Home" },
  { label: "Services" },
  { label: "Contact us" },
];

export default function Navbar() {
  const matches = useMediaQuery("(max-width: 600px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Container>
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            TAM TREE
          </Typography>
          {matches ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <List sx={{ display: "flex" }}>
              {navItems.map((item) => (
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        marginLeft: "20px",
                        marginRight: "10px",
                      }}
                    >
                      {item.label}
                    </Typography>
                  }
                />
              ))}
            </List>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{ style: { top: "57px", width: "80vw", height: "100%" } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,
          }}
        >
          <List>
            {navItems.map((item) => (
              <ListItemText
                primary={item.label}
                sx={{
                  color: "#7942d4",
                  padding: "5px",
                  marginLeft: "20px",
                  marginRight: "10px",
                }}
              />
            ))}
          </List>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Drawer>
    </Container>
  );
}
