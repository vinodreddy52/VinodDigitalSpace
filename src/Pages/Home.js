import { useState } from "react";
import { 
  Container, Typography, Button, Box, Grid, IconButton, Tooltip, 
  CircularProgress, Snackbar, Alert, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent,
  DialogActions
} from "@mui/material";
import { LinkedIn, Email, WhatsApp, PictureAsPdf, Download, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

// ✅ Set the PDF worker source correctly
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
    }, 2000);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "90px", minHeight: "100vh" }}>
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center">
          <Card sx={{ p: 2, borderRadius: 3, boxShadow: 5, background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", textAlign: "center" }}>
            <CardMedia
              component="img"
              image="/images/home.jpg"
              alt="Home Image"
              sx={{ width: "100%", maxWidth: 500, borderRadius: 2 }}
            />
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Explore my journey as a Senior UI Developer and see how I craft seamless user experiences.
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#6200ea", color: "white", "&:hover": { backgroundColor: "#5a00d3" } }}
                onClick={() => navigate("/about")}
              >
                Learn More About Me
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            Hi! I'm Vinod Kumar Reddy
          </Typography>
          <Typography variant="h6" color="secondary" gutterBottom>
            Senior UI DEVELOPER
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Tooltip title="LinkedIn" arrow>
              <IconButton color="primary" target="_blank" href="https://www.linkedin.com/in/vinodreddy-ui">
                <LinkedIn fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Email" arrow>
              <IconButton color="error" target="_blank" href="mailto:vinodreddy.info07@gmail.com">
                <Email fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip title="WhatsApp" arrow>
              <IconButton color="success" target="_blank" href="https://wa.me/9042238332">
                <WhatsApp fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
            <Button
              variant="contained"
              startIcon={loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <Download />}
              sx={{ 
                px: 3, 
                py: 1.5, 
                fontSize: "1rem", 
                borderRadius: "30px",
                background: "linear-gradient(45deg, #6200ea, #8e24aa)",
                color: "white",
                "&:hover": { background: "linear-gradient(45deg, #5a00d3, #7b1fa2)" },
                transition: "all 0.3s ease-in-out"
              }}
              onClick={handleDownload}
              disabled={loading}
            >
              Download CV
            </Button>
            <Button
              variant="outlined"
              startIcon={<PictureAsPdf />}
              sx={{
                px: 3,
                py: 1.5,
                fontSize: "1rem",
                borderRadius: "30px",
                borderColor: "#6200ea",
                color: "#6200ea",
                "&:hover": { backgroundColor: "#f3e5f5" },
                transition: "all 0.3s ease-in-out"
              }}
              onClick={() => setOpenViewer(true)}
            >
              View Resume
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* PDF Viewer Dialog - Scrollable View */}
      <Dialog open={openViewer} disableEscapeKeyDown={true} onClose={() => setOpenViewer(false)} maxWidth="md" fullWidth>
        <DialogTitle className="dialog_title" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          View Resume
          <IconButton sx={{ color:'#fff'}} onClick={() => setOpenViewer(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ maxHeight: "80vh", overflowY: "auto", textAlign: "center" }}>
          <Document
            file="/VinodReddy_Resume.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading="Loading Resume..."
            renderMode="canvas"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={index} pageNumber={index + 1} scale={1.3} />
            ))}
          </Document>
        </DialogContent>
        <DialogActions >
        <Button
              variant="contained"
              startIcon={loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <Download />}
              sx={{ 
                px: 3, 
                py: 1.5, 
                fontSize: "1rem", 
                borderRadius: "30px",
                background: "linear-gradient(45deg, #6200ea, #8e24aa)",
                color: "white",
                "&:hover": { background: "linear-gradient(45deg, #5a00d3, #7b1fa2)" },
                transition: "all 0.3s ease-in-out"
              }}
              onClick={handleDownload}
              disabled={loading}
            >
              Download CV
            </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Download Notification */}
      <Snackbar 
        open={open} 
        autoHideDuration={3000} 
        onClose={() => setOpen(false)} 
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: "100%" }}>
          CV Downloaded Successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}
