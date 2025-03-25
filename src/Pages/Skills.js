import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { Code, Storage, Build, BugReport, Devices, Brush, Cloud } from "@mui/icons-material";

const skills = [
  { category: "Web Technologies", icon: <Code color="primary" />, skills: ["HTML5", "JavaScript", "CSS3", "XHTML", "jQuery", "Bootstrap"] },
  { category: "Frameworks", icon: <Build color="primary" />, skills: ["React JS", "Angular JS"] },
  { category: "Databases", icon: <Storage color="primary" />, skills: ["SQL Server"] },
  { category: "Development Tools", icon: <Devices color="primary" />, skills: ["VS Code", "Sublime Text", "Atom"] },
  { category: "Debugging Tools", icon: <BugReport color="primary" />, skills: ["Chrome DevTools", "VS Code Debugger"] },
  { category: "Operating Systems", icon: <Cloud color="primary" />, skills: ["Windows 10", "MacOS"] },
  { category: "Version Control", icon: <Storage color="primary" />, skills: ["Git", "GitHub", "Azure DevOps"] },
  { category: "Design Tools", icon: <Brush color="primary" />, skills: ["MS-Office", "Adobe Photoshop"] },
];

export default function Skills() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "70px", height: "100vh", display: "flex", flexDirection: "column", }}>
      <Typography variant="h4" fontWeight="bold" color="primary" align="center" gutterBottom>
        Technical Skills
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ p: 2, borderRadius: 2, boxShadow: 1, textAlign: "center" }}>
              <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                  {skill.icon}
                  <Typography variant="h6" fontWeight="bold">{skill.category}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {skill.skills.join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
