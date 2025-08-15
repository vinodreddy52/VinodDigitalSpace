import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  //IconButton,
  //Tooltip,
  Chip
} from "@mui/material";
import {
  GitHub,
  //LinkedIn,
  Language,
  Code,
  Launch,
  Work,
  School,
  Star
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const navigate = useNavigate();
  const portfolioLinks = [
    {
      title: "My Profile",
      description: "Visit my main portfolio website showcasing my skills and experience",
      icon: <Language fontSize="large" />,
      link: "https://vinoddigitalspace.netlify.app/",
      color: "#2196f3",
      category: "Portfolio"
    },
    {
      title: "VR Tech World",
      description: "Explore my tech-focused projects and innovations",
      icon: <Code fontSize="large" />,
      link: "https://vrtechworld.netlify.app/",
      color: "#00bcd4",
      category: "Tech"
    },
    {
      title: "Project Management Tool",
      description: "A comprehensive project management application built with modern technologies",
      icon: <Work fontSize="large" />,
      link: "https://pmtbyvinod.netlify.app/",
      color: "#4caf50",
      category: "Project"
    },
    {
      title: "Quiz App React",
      description: "Interactive quiz application built with React for engaging user experience",
      icon: <School fontSize="large" />,
      link: "https://quizappvinod.netlify.app/",
      color: "#ff9800",
      category: "React"
    },
    {
      title: "Weather App React",
      description: "Real-time weather application with beautiful UI and accurate forecasts",
      icon: <Star fontSize="large" />,
      link: "https://weatherbyvinod.netlify.app/",
      color: "#9c27b0",
      category: "React"
    },
    {
      title: "GitHub Portfolio",
      description: "View my open-source projects, contributions, and code samples",
      icon: <GitHub fontSize="large" />,
      link: "https://github.com/vinodreddy-ui",
      color: "#333",
      category: "Code"
    }
  ];

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "70px", minHeight: "auto", pb: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        color="primary"
        gutterBottom
        sx={{ mb: 2 }}
      >
        Portfolio & Links
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        sx={{ mb: 4 }}
      >
        Connect with me across different platforms and explore my work
      </Typography>

      <Grid container spacing={2}>
        {portfolioLinks.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                boxShadow: 3,
                background: "var(--card-bg)",
                backdropFilter: "var(--backdrop-blur)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6,
                  background: "var(--card-bg-hover)"
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 2.5 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 1.5,
                    color: item.color
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ 
                    mb: 1.5,
                    color: "var(--text-primary)"
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ 
                    mb: 1.5,
                    color: "var(--text-secondary)"
                  }}
                >
                  {item.description}
                </Typography>

                <Chip
                  label={item.category}
                  size="small"
                  sx={{
                    backgroundColor: item.color,
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                />
              </CardContent>

              <CardActions sx={{ justifyContent: 'center', pb: 2.5 }}>
                <Button
                  variant="contained"
                  startIcon={<Launch />}
                  onClick={() => handleLinkClick(item.link)}
                  sx={{
                    background: `linear-gradient(45deg, ${item.color}, ${item.color}dd)`,
                    color: 'white',
                    borderRadius: '25px',
                    px: 2.5,
                    py: 0.8,
                    "&:hover": {
                      background: `linear-gradient(45deg, ${item.color}dd, ${item.color})`,
                      transform: "scale(1.05)"
                    },
                    transition: "all 0.3s ease-in-out"
                  }}
                >
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography 
          variant="h6" 
          style={{cursor: "pointer"}} 
          sx={{ 
            color: "var(--text-primary)",
            "&:hover": {
              color: "primary.main"
            }
          }}
          gutterBottom 
          onClick={() => navigate("/contact")}
        >
          Let's Connect!
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: "var(--text-secondary)"
          }}
        >
          Feel free to reach out through any of these platforms or check out my work.
        </Typography>
      </Box>
    </Container>
  );
};

export default Publish;
