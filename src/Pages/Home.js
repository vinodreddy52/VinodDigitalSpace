import { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  IconButton,
  Tooltip,
  CircularProgress,
  Snackbar,
  Alert,
 // Card,
  //Avatar,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import { LinkedIn, Email, WhatsApp, Download, PictureAsPdf, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";

// PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdf.worker.min.js`;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openViewer, setOpenViewer] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const navigate = useNavigate();

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/VinodReddy_Resume.pdf";
      link.setAttribute("download", "VinodReddy_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false);
      setOpen(true);
    }, 1500);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc, #eef2ff)",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">

          {/* LEFT CONTENT */}
          <Grid item xs={12} md={7}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom color="text.primary">
                Hi, I'm Vinod Kumar Reddy 👋
              </Typography>

              <Typography variant="h5" sx={{ color: "#6d28d9", mb: 2 }}>
                Technical Lead | React Expert
              </Typography>

              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
                Building scalable web applications with modern UI, clean architecture, and exceptional user experience. I focus on writing maintainable code, improving performance, and delivering pixel-perfect interfaces.

                I have strong expertise in React.js, JavaScript (ES6+), Material UI, and building reusable component libraries. I also work on optimizing applications, handling complex state management, and integrating APIs efficiently.
              </Typography>

              {/* BUTTONS */}
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button
                  variant="contained"
                  startIcon={loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <Download />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: "30px",
                    background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
                    "&:hover": { background: "linear-gradient(45deg, #4f46e5, #7c3aed)" }
                  }}
                  onClick={handleDownload}
                >
                  Download CV
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<PictureAsPdf />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: "30px",
                    borderColor: "#6366f1",
                    color: "#6366f1"
                  }}
                  onClick={() => setOpenViewer(true)}
                >
                  View Resume
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: "30px",
                    background: "linear-gradient(45deg, #22c55e, #16a34a)",
                    color: "white",
                    "&:hover": {
                      background: "linear-gradient(45deg, #16a34a, #15803d)"
                    }
                  }}
                  onClick={() => navigate("/about")}
                >
                  About Me
                </Button>
              </Stack>

              {/* SOCIAL ICONS */}
              <Stack direction="row" spacing={2} mt={4}>
                <Tooltip title="LinkedIn">
                  <IconButton href="https://www.linkedin.com/in/vinodreddy-ui" target="_blank" color="primary">
                    <LinkedIn />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Email">
                  <IconButton href="mailto:vinodreddy.info07@gmail.com" color="error">
                    <Email />
                  </IconButton>
                </Tooltip>

                <Tooltip title="WhatsApp">
                  <IconButton href="https://wa.me/9042238332" target="_blank" color="success">
                    <WhatsApp />
                  </IconButton>
                </Tooltip>
              </Stack>
            </motion.div>
          </Grid>

          {/* RIGHT PROFILE CARD */}
          <Grid item xs={12} md={5}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <Box
                sx={{
                  position: "relative",
                  height: 350,
                  borderRadius: "30px",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.15)"
                }}
              >
                {/* Floating Circles */}
                <Box sx={{ position: "absolute", width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.2)", top: 20, left: 20 }} />
                <Box sx={{ position: "absolute", width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.15)", bottom: 30, right: 30 }} />

                {/* Content */}
                <Box sx={{ textAlign: "center", color: "white", zIndex: 2, px: 2 }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    10 Years Experience
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Delivering scalable React applications with high performance and clean UI architecture.
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
                    Expertise in building enterprise dashboards, reusable UI components, and optimizing large-scale applications.
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
                    Passionate about clean code, performance tuning, and creating seamless user experiences.
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* PDF VIEWER */}
        <Dialog open={openViewer} onClose={() => setOpenViewer(false)} maxWidth="md" fullWidth>
          <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
            View Resume
            <IconButton onClick={() => setOpenViewer(false)}>
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers sx={{ maxHeight: "80vh", overflowY: "auto", textAlign: "center" }}>
            <Document
              file="/VinodReddy_Resume.pdf"
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
              {Array.from(new Array(numPages || 0), (el, index) => (
                <Page key={index} pageNumber={index + 1} scale={1.2} />
              ))}
            </Document>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDownload} startIcon={<Download />}>
              Download
            </Button>
          </DialogActions>
        </Dialog>

        {/* SNACKBAR */}
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            CV Downloaded Successfully!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
