import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => (
  <AppBar position="fixed" color="primary">
    <Toolbar>
      <Typography variant="h6" component={Link} to="/" className="tech_hub" sx={{ flexGrow: 1 }}>Vinod TechHub</Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/about">About</Button>
      <Button color="inherit" component={Link} to="/skills">Skills</Button>
      {/* <Button color="inherit" component={Link} to="/publish">Publish</Button> */}
      <Button color="inherit" component={Link} to="/contact">Contact</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
