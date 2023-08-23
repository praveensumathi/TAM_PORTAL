import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

function Home() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        backgroundImage: "url(/assets/images/home.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid item xs={12} sm={12} md={6} display={"flex"} alignItems={"center"}>
        <Container>
          <Typography
            variant="h2"
            fontSize={matches ? "8vw" : "4vw"}
            fontWeight={"600"}
            color={"white"}
            my={1}
          >
            Welcome to TamTree,
          </Typography>
          <Typography
            component={"p"}
            color={"white"}
            fontWeight={"400"}
            style={{
              opacity: 0.8,
            }}
            fontSize={matches ? "5vw" : "2vw"}
            lineHeight={1}
          >
            Your Partner in Innovation and Transformation!
          </Typography>
        </Container>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        display={"flex"}
        alignItems={matches ? "flex-start" : "center"}
        justifyContent={matches ? "center" : "flex-end"}
      >
        <img
          src="/assets/images/homevector.png"
          style={{
            // objectFit: "contain",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Home;
