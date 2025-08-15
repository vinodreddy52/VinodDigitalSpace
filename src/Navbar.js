import React, { useState, useEffect } from "react";
import { 
  AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery,
  Tooltip, Box
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon, LightMode, DarkMode } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Publish", path: "/publish" },
    { label: "Contact", path: "/contact" }
  ];

  // Load theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      applyTheme(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      applyTheme(prefersDark);
    }
  }, []);

  const applyTheme = (darkMode) => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty('--bg-primary', '#121212');
      root.style.setProperty('--bg-secondary', '#1e1e1e');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#b3b3b3');
      root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.05)');
      root.style.setProperty('--card-bg-hover', 'rgba(255, 255, 255, 0.08)');
      root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--card-shadow', '0 4px 20px rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--card-shadow-hover', '0 20px 40px rgba(255, 255, 255, 0.15)');
      root.style.setProperty('--divider-opacity', '0.2');
      root.style.setProperty('--backdrop-blur', 'blur(10px)');
    } else {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f5f5f5');
      root.style.setProperty('--text-primary', '#000000');
      root.style.setProperty('--text-secondary', '#666666');
      root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.95)');
      root.style.setProperty('--card-bg-hover', 'rgba(255, 255, 255, 1)');
      root.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--card-shadow', '0 4px 20px rgba(0, 0, 0, 0.08)');
      root.style.setProperty('--card-shadow-hover', '0 20px 40px rgba(0, 0, 0, 0.15)');
      root.style.setProperty('--divider-opacity', '0.3');
      root.style.setProperty('--backdrop-blur', 'blur(10px)');
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    applyTheme(newTheme);
  };

  return (
    <AppBar 
      position="fixed" 
      color="primary" 
      sx={{ 
        zIndex: theme.zIndex.drawer + 1,
        background: isDarkMode ? '#1a1a1a' : '#6200ea',
        transition: 'background-color 0.3s ease'
      }}
    >
      <Toolbar>
        {/* Brand Name */}
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            flexGrow: 1, 
            textDecoration: "none", 
            color: "white", 
            fontWeight: "bold",
            transition: 'color 0.3s ease'
          }}
        >
          Vinod TechHub
        </Typography>

        {/* Theme Toggle Button */}
        <Tooltip title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} arrow>
          <IconButton 
            color="inherit" 
            onClick={toggleTheme}
            sx={{ 
              mr: 1,
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Tooltip>

        {/* Desktop Menu */}
        {!isMobile ? (
          menuItems.map((item) => (
            <Button 
              key={item.label} 
              color="inherit" 
              component={Link} 
              to={item.path}
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-1px)'
                }
              }}
            >
              {item.label}
            </Button>
          ))
        ) : (
          // Mobile Menu Button
          <IconButton 
            color="inherit" 
            onClick={() => setDrawerOpen(true)}
            sx={{
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile Drawer */}
        <Drawer 
          anchor="right" 
          open={drawerOpen} 
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
              color: isDarkMode ? '#ffffff' : '#000000',
              transition: 'all 0.3s ease'
            }
          }}
        >
          <List sx={{ width: 250 }}>
            <ListItem>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>Menu</Typography>
              <IconButton 
                onClick={() => setDrawerOpen(false)}
                sx={{ color: isDarkMode ? '#ffffff' : '#000000' }}
              >
                <CloseIcon />
              </IconButton>
            </ListItem>
            {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.label} 
                component={Link} 
                to={item.path} 
                onClick={() => setDrawerOpen(false)}
                sx={{
                  transition: 'background-color 0.2s ease',
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
                  }
                }}
              >
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
