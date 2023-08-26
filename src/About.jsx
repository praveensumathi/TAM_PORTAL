
import { Typography, Container, Box } from '@mui/material';
import React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";

function About() {
    const matches = useMediaQuery("(max-width:600px)");
  return (
      <Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "30vh",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={"500"}
          my={2}
          fontSize={matches ? "8vw" : "4vw"}
        >
            About Us
          </Typography>
          <Typography
            variant="h6"
            fontSize={matches ? "5vw" : "2vw"}
            sx={{ textAlign: "center", opacity: 0.8 }}
          >
            At TamTree, we are a dynamic technology solutions provider
            specializing in a range of services that cater to your digital
            needs. With a global presence spanning India and the USA, we're
            committed to delivering high-quality solutions that redefine digital
            experiences.
          </Typography>
        </Container>
      </Box>
    );
}

export default About;
