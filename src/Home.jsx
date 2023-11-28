import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import useMediaQuery from "@mui/material/useMediaQuery";

function Home() {

  const matches = useMediaQuery("(max-width:900px)");

  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        backgroundImage: "url(./assets/images/home.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        xs: {
          justifyContent: "center",
        },
      }}
    >
      <Grid item xs={12} sm={12} md={6} display={"flex"} alignItems={"center"}>
        <Container>
          <Fade bottom>
            <Typography
              variant="h2"
              fontSize={matches ? "8vw" : "4vw"}
              fontWeight={"600"}
              color={"white"}
              my={1}
            >
              Welcome to TamTree,
            </Typography>
          </Fade>
          <Fade bottom duration={1000}>
            <Typography
              component={"p"}
              color={"white"}
              fontWeight={"400"}
              style={{
                opacity: 0.8,
              }}
              aoa
              fontSize={matches ? "5vw" : "2vw"}
              lineHeight={1}
            >
              Your Partner in Innovation and Transformation!
            </Typography>
          </Fade>
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
        <Fade right duration={2000}>
          <img
            src="./assets/images/homevector.png"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Fade>
      </Grid>
    </Grid>
  );
}

export default Home;
