import React, { useState } from "react";
import { 
  AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery 
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect mobile screens
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* Brand Name */}
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ flexGrow: 1, textDecoration: "none", color: "white", fontWeight: "bold" }}
        >
          Vinod TechHub
        </Typography>

        {/* Desktop Menu */}
        {!isMobile ? (
          menuItems.map((item) => (
            <Button key={item.label} color="inherit" component={Link} to={item.path}>
              {item.label}
            </Button>
          ))
        ) : (
          // Mobile Menu Button
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <List sx={{ width: 250 }}>
            <ListItem>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>Menu</Typography>
              <IconButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            </ListItem>
            {menuItems.map((item) => (
              <ListItem button key={item.label} component={Link} to={item.path} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
