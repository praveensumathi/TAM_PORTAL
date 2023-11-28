import React, { useState } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { label: " Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Training", id: "training" },
  { label: "Contact us", id: "contactus" },
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
          <Box sx={{ display: "flex" }}>
            <img
              src="assets\images\Tamtree_logo.png"
              alt="tamtree-logo"
              height="50px"
              width="50px"
              style={{ backgroundColor: "#fff", borderRadius: "50%" }}
            />
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              TAMTREE
            </Typography>
          </Box>
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
                  key={item.label}
                  primary={
                    <a
                      href={`#${item.id}`}
                      className="text"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "20px",
                        marginLeft: "20px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      onClick={handleDrawerClose}
                    >
                      {item.label.trim()}
                    </a>
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
                key={item.label}
                primary={
                  <a
                    href={`#${item.id}`}
                    style={{
                      textDecoration: "none",
                      color: "#7942d4",
                      fontSize: "20px",
                      marginLeft: "20px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                    onClick={handleDrawerClose}
                  >
                    {item.label.trim()}
                  </a>
                }
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
