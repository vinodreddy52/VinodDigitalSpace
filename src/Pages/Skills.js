import React, { useState, useEffect } from "react";
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Chip,
  Avatar,
  Fade,
  Grow,
  Paper,
  Divider,
  LinearProgress
} from "@mui/material";
import { 
  Code, 
  Storage, 
  Build, 
  BugReport, 
  Devices, 
  Brush, 
  Cloud,
  Star,
  TrendingUp,
  Psychology,
  Palette,
  Speed
} from "@mui/icons-material";

const skills = [
  { 
    category: "Web Technologies", 
    icon: <Code sx={{ fontSize: 40 }} />, 
    color: "#2196f3",
    skills: ["HTML5", "JavaScript", "CSS3", "XHTML", "jQuery", "Bootstrap", "Tailwind CSS", "Material UI", "Prime React", "React Bootstrap", "React Material UI", "React Prime React"],
    description: "Core web development technologies"
  },
  { 
    category: "Frameworks", 
    icon: <Build sx={{ fontSize: 40 }} />, 
    color: "#4caf50",
    skills: ["React JS", "Angular JS", "Next JS"],
    description: "Modern JavaScript frameworks"
  },
  { 
    category: "Databases", 
    icon: <Storage sx={{ fontSize: 40 }} />, 
    color: "#ff9800",
    skills: ["SQL Server"],
    description: "Database management systems"
  },
  { 
    category: "Development Tools", 
    icon: <Devices sx={{ fontSize: 40 }} />, 
    color: "#9c27b0",
    skills: ["VS Code", "Sublime Text", "Atom", "Cursor"],
    description: "Essential development environments"
  },
  { 
    category: "Debugging Tools", 
    icon: <BugReport sx={{ fontSize: 40 }} />, 
    color: "#f44336",
    skills: ["Chrome DevTools", "VS Code Debugger"],
    description: "Debugging and testing utilities"
  },
  { 
    category: "Operating Systems", 
    icon: <Cloud sx={{ fontSize: 40 }} />, 
    color: "#00bcd4",
    skills: ["Windows 10", "MacOS", "Linux"],
    description: "Cross-platform development"
  },
  { 
    category: "Version Control", 
    icon: <Storage sx={{ fontSize: 40 }} />, 
    color: "#795548",
    skills: ["Git", "GitHub", "Azure DevOps"],
    description: "Code versioning and collaboration"
  },
  { 
    category: "Design Tools", 
    icon: <Brush sx={{ fontSize: 40 }} />, 
    color: "#e91e63",
    skills: ["MS-Office", "Adobe Photoshop", "Figma",],
    description: "Design and productivity tools"
  },
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "70px", minHeight: "auto", pb: 4 }}>
      {/* Header Section */}
      <Fade in={animate} timeout={800}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            gutterBottom
            sx={{ 
              background: "linear-gradient(45deg, #2196f3, #21cbf3)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Technical Skills
          </Typography>
          <Typography 
            variant="h6" 
            color="textSecondary" 
            sx={{ maxWidth: 600, mx: "auto", opacity: 0.8 }}
          >
            A comprehensive showcase of my technical expertise and professional competencies
          </Typography>
        </Box>
      </Fade>

      {/* Skills Grid */}
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Grow in={animate} timeout={800 + index * 150}>
              <Card 
                sx={{ 
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: "var(--card-shadow)",
                  background: "var(--card-bg)",
                  backdropFilter: "var(--backdrop-blur)",
                  border: "1px solid var(--border-color)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: "var(--card-shadow-hover)",
                    background: "var(--card-bg-hover)",
                    "& .skill-icon": {
                      transform: "scale(1.1) rotate(5deg)",
                    }
                  }
                }}
              >
                <CardContent sx={{ p: 2.5, textAlign: "center", height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Icon and Category */}
                  <Box sx={{ mb: 1.5 }}>
                    <Avatar 
                      sx={{ 
                        bgcolor: skill.color, 
                        width: 60, 
                        height: 60, 
                        mx: "auto",
                        mb: 1.5,
                        boxShadow: `0 8px 25px ${skill.color}40`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: `0 12px 35px ${skill.color}60`
                        }
                      }}
                      className="skill-icon"
                    >
                      {skill.icon}
                    </Avatar>
                    
                    <Typography 
                      variant="h6" 
                      fontWeight="bold" 
                      sx={{ 
                        mb: 0.5,
                        color: "var(--text-primary)"
                      }}
                    >
                      {skill.category}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 1.5, 
                        opacity: 0.8, 
                        fontSize: '0.8rem',
                        color: "var(--text-secondary)"
                      }}
                    >
                      {skill.description}
                    </Typography>
                  </Box>

                  <Divider sx={{ mb: 1.5, opacity: "var(--divider-opacity)" }} />

                  {/* Skills List */}
                  <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                      {skill.skills.map((skillName, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skillName}
                          size="small"
                          sx={{
                            bgcolor: `${skill.color}15`,
                            color: skill.color,
                            fontWeight: 500,
                            fontSize: '0.7rem',
                            border: `1px solid ${skill.color}30`,
                            transition: "all 0.2s ease",
                            mb: 0.5,
                            "&:hover": {
                              bgcolor: `${skill.color}25`,
                              transform: "scale(1.05)"
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Skill Count */}
                  <Box sx={{ mt: 1.5, pt: 1.5, borderTop: '1px solid var(--border-color)' }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: "var(--text-secondary)"
                      }}
                    >
                      {skill.skills.length} skills mastered
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>

      {/* Bottom Stats Section */}
      {/* <Fade in={animate} timeout={1200}>
        <Paper 
          elevation={0}
          sx={{ 
            mt: 6, 
            p: 4, 
            borderRadius: 4,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            "&::before": {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"50\" cy=\"10\" r=\"0.5\" fill=\"white\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
              opacity: 0.3
            }
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <TrendingUp sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {skills.reduce((acc, cat) => acc + cat.skills.length, 0)}+
                </Typography>
                <Typography variant="h6">Skills Mastered</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Star sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {skills.length}
                </Typography>
                <Typography variant="h6">Skill Categories</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Build sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  5+
                </Typography>
                <Typography variant="h6">Years Experience</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Fade> */}
    </Container>
  );
}
