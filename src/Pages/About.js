import { Container, Typography, Grid, Avatar, Button, Card, CardContent, Box } from "@mui/material";
import { School,  Info } from "@mui/icons-material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const sections = [
    {
      icon: <Info fontSize="large" color="primary" />, 
      title: "Summary",
      content: <>
      Passionate <strong>Senior UI Developer</strong> with extensive experience in <strong>React, JavaScript,</strong> and modern web technologies.  
      Skilled in building <strong>scalable, high-performance,</strong> and visually appealing web applications.  
      Dedicated to crafting <strong>intuitive, user-friendly interfaces</strong> with a keen eye for <strong>design and accessibility</strong>.  
      Strong problem-solver, team player, and advocate for <strong>best practices</strong> in front-end development.
    </>
    },
    {
      icon: <School fontSize="large" color="primary" />, 
      title: "Education",
      content: <>
      <strong>BE Electronics and Communication Engineering</strong> <br />
      Excel Engineering College <br />
      from <strong>Anna University of Technology Coimbatore, TN.</strong>
    </>
    }
  ];

  const experienceData = [
    {
      title: "Senior UI Developer",
      company: "Solverminds Solutions and Technologies Pvt Ltd, Chennai",
      date: "Sep 2017 - July 2025",
    },
    {
      title: "Software Engineer",
      company: "Edgerock Software Solutions Private Limited, Hyderabad",
      date: "Mar 2015 - Sep 2017",
    },
    {
      title: "Consultant-Media Developer",
      company: "Hurix Systems Pvt Ltd, Chennai",
      date: "May 2013 - Oct 2014",
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "90px"}}>
      {/* Hero Section */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4} display="flex" justifyContent="center">
          <Avatar src="/images/VinodReddy.jpeg" sx={{ width: 180, height: 180, boxShadow: 3 }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" fontWeight="bold" color="primary">Hi, I'm Vinod Kumar Reddy</Typography>
          <Typography variant="h6" color="text.secondary">Senior UI Developer</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Transforming ideas into seamless digital experiences with modern technologies.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => navigate("/contact")}>Let's Connect</Button>
        </Grid>
      </Grid>

      {/* Information Cards */}
      <Grid container spacing={3} sx={{ mt: 5 }}>
        {sections.map((section, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ p: 2, boxShadow: 5, textAlign: "center", transition: "all 0.3s ease-in-out", '&:hover': { transform: "scale(1.05)" } }}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>{section.icon}</Box>
                <Typography variant="h6" fontWeight="bold">{section.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{section.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Experience Timeline */}
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 5, mb: 3, textAlign: "center" }}>Experience</Typography>
      <Timeline position="alternate">
        {experienceData.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color={index === 0 ? "secondary" : "primary"} />
              {index !== experienceData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ p: 2, boxShadow: 3, transition: "all 0.3s ease-in-out", '&:hover': { backgroundColor: "#f5f5f5" } }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{exp.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{exp.company}</Typography>
                  <Typography variant="body2" color="primary">{exp.date}</Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}
