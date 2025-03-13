import { Container, Grid, Card, CardContent, Typography, LinearProgress, Box } from "@mui/material";
import { Code, Storage, Build, BugReport, Devices, Brush, Cloud } from "@mui/icons-material";

const skills = [
  { category: "Web Technologies", icon: <Code />, skills: ["HTML5", "JavaScript", "CSS3", "XHTML", "jQuery", "Bootstrap"] },
  { category: "Frameworks", icon: <Build />, skills: ["React JS", "Angular JS"] },
  { category: "Databases", icon: <Storage />, skills: ["SQL Server"] },
  { category: "Development Tools", icon: <Devices />, skills: ["VS Code", "Sublime Text", "Atom"] },
  { category: "Debugging Tools", icon: <BugReport />, skills: ["Firebug", "Chrome DevTools"] },
  { category: "Operating Systems", icon: <Cloud />, skills: ["Windows 10", "MacOS"] },
  { category: "Version Control", icon: <Storage />, skills: ["Git", "SVN"] },
  { category: "Design Tools", icon: <Brush />, skills: ["MS-Office", "Adobe Photoshop"] },
];

export default function Skills() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "90px", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom sx={{ textAlign: "center", mb: 4 }}>
        Technical Skills
      </Typography>

      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 3,
                borderRadius: 4,
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)", boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.3)" }
              }}
            >
              <CardContent>
                <Box sx={{ fontSize: 48, color: "primary.main", mb: 2 }}>{skill.icon}</Box>
                <Typography variant="h6" fontWeight="bold" color="textPrimary" gutterBottom>
                  {skill.category}
                </Typography>
                {skill.skills.map((item, i) => (
                  <Box key={i} display="flex" alignItems="center" gap={1} sx={{ mb: 1 }}>
                    <Typography variant="body2" fontWeight="bold" sx={{ width: "30%" }}>
                      {item}
                    </Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={Math.random() * (100 - 70) + 70} 
                      sx={{ flexGrow: 1, height: 8, borderRadius: 5, bgcolor: "rgba(255, 255, 255, 0.2)", "& .MuiLinearProgress-bar": { background: "linear-gradient(90deg, #6200ea, #8e24aa)" } }}
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
