import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
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
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        display={"flex"}
        alignItems={"center"}
        my={2}
      >
        <Container>
          <Typography
            variant="h2"
            fontSize={matches ? "8vw" : "4vw"}
            fontWeight={"600"}
            color={"white"}
          >
            Welcome to TamTree,
          </Typography>
          <Typography
            component={"span"}
            color={"white"}
            fontWeight={"500"}
            fontSize={"24px"}
          >
            Your Partner in Innovation and Transformation!
          </Typography>
        </Container>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        display={"flex"}
        alignItems={matches ? "flex-start" : "center"}
        justifyContent={matches ? "center" : "flex-end"}
      >
        <img
          src="./assets/images/homevector.png"
          style={{
            objectFit: "contain",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Home;
