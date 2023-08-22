import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Container,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WebIcon from "@mui/icons-material/Web";
import { useMediaQuery } from "@mui/material";

function Contactus() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 601px) and (max-width: 960px)"
  );

  return (
    <Box
      style={{
        backgroundImage: 'url("/assets/images/home.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          fontWeight={"500"}
          fontSize={isSmallScreen ? "10vw" : "4vw"}
          my={2}
          textAlign="center"
          color="white"
        >
          Contact Us
        </Typography>
        <Typography
          variant="h6"
          
          sx={{
            display: "flex",
            justifyContent: "center",

            marginBottom: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          Partner with TamTree for expert solutions, training, and staffing that
          fuel your technological endeavors. Let us be the catalyst for your
          innovation and transformation journey.
        </Typography>
        <Grid container spacing={2} my={4}>
          <Grid item xs={12} md={7}>
            <Grid container rowGap={3}>
              <Grid item md={7}>
                <Typography variant="h4" sx={{ color: "white" }}>
                  Address
                </Typography>
              </Grid>

              <Grid
                item
                container
                spacing={2}
                style={{ display: "flex", flex: "row" }}
              >
                <Grid item>
                  <Box>
                    <LocationOnIcon sx={{ color: "white" }} />
                    <Typography variant="body1" color="#FB2576">
                      India Office:
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      <p> 1/62 kilsathambur</p>
                      <p>Namakkal </p>
                      <p>Tamilnadu</p>
                      <p>India</p>
                      <p>637207</p>
                      Phone:+91 6369669424
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box>
                    <LocationOnIcon sx={{ color: "white" }} />

                    <Typography variant="body1" color="#FB2576">
                      USA Office:
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      <p>5900 Blcones Drive</p>
                      <p>STE 100 Austin,TX 78731</p>
                      <p>Phone:+1(972) 523-2289</p>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box>
                    <WebIcon sx={{ color: "white" }} />
                    <Typography variant="body1" color="#FB2576">
                      Website
                    </Typography>

                    <Typography variant="body2" sx={{ color: "white" }}>
                      <p>tamtreellc.com</p>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            style={{
              display: "flex",
              justifyContent: isMediumScreen
                ? "flex-end"
                : isSmallScreen
                ? "flex-start"
                : "initial",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h6">Send Message</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    margin="normal"
                    required
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    margin="normal"
                    required
                    type="email"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    style={{ marginBottom: "10px" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contactus;
