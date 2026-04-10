import { Container, Typography, Grid, Avatar, Button, Card, CardContent, Box, Stack, Chip } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const navigate = useNavigate();

  const sections = [
    {
      icon: "📌",
      title: "Summary",
      content: (
        <>
          Passionate <strong>Technical Lead</strong> with expertise in <strong>React & JavaScript</strong>.
          Focused on building <strong>scalable</strong>, <strong>high-performance</strong> applications with
          <strong> modern UI/UX</strong> and accessibility.
        </>
      )
    },
    {
      icon: "🎓",
      title: "Education",
      content: (
        <>
          <strong>BE Electronics and Communication Engineering</strong>
          <br />Excel Engineering College
          <br />Anna University, Tamil Nadu
        </>
      )
    }
  ];

  const experienceData = [
    {
      title: "Technical Lead",
      company: "Photon Interactive Pvt Ltd",
      date: "Sep 2025 - Present"
    },
    {
      title: "Senior UI Developer",
      company: "Solverminds Solutions",
      date: "Sep 2017 - Jul 2025"
    },
    {
      title: "Consultant-Media Developer",
      company: "Hurix Systems",
      date: "May 2013 - Oct 2014"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ pt: 10, pb: 5 }}>
      {/* HERO SECTION */}
      <Card sx={{ p: 4, borderRadius: 4, boxShadow: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} textAlign="center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Avatar
                src="/images/VinodReddy.jpeg"
                sx={{ width: 160, height: 160, mx: "auto", boxShadow: 4 }}
              />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Hi, I'm Vinod Kumar Reddy
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              Technical Lead | React Specialist
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
               Building scalable, high-performance web applications with modern UI and clean architecture.Delivering seamless user experiences with a strong focus on performance and usability.
            </Typography>

            <Stack direction="row" spacing={2} flexWrap="wrap" mb={2}>
              <Chip label="React" />
              <Chip label="JavaScript" />
              <Chip label="HTML5" />
              <Chip label="CSS3" />
              <Chip label="TypeScript" />
              <Chip label="Redux" />
              <Chip label="Git" />
              <Chip label="GitHub" />
              <Chip label="Material UI" />
              <Chip label="Performance" />
              <Chip label="Accessibility" />
            </Stack>

            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/contact")}
            >
              Let's Connect
            </Button>
          </Grid>
        </Grid>
      </Card>

      {/* SUMMARY + EDUCATION */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {sections.map((section, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div whileHover={{ y: -5 }}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: 4,
                  height: "100%",
                  boxShadow: 4,
                  transition: "0.3s"
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <Typography fontSize={28}>{section.icon}</Typography>
                    <Typography variant="h6" fontWeight="bold">
                      {section.title}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary">
                    {section.content}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* EXPERIENCE */}
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ mt: 6, mb: 3, textAlign: "center" }}
      >
        Experience
      </Typography>

      <Timeline position="alternate">
        {experienceData.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color={index === 0 ? "secondary" : "primary"} />
              {index !== experienceData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    boxShadow: 3
                  }}
                >
                  <Typography fontWeight="bold">{exp.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exp.company}
                  </Typography>
                  <Typography variant="caption" color="primary">
                    {exp.date}
                  </Typography>
                </Card>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}
