import { BorderColor } from "@mui/icons-material";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import React from "react";
import "./ChooseUs.css";

function ChooseUs() {
  const matches = useMediaQuery("(max-width:900px)");
  const matches2 = useMediaQuery("(max-width:1100px)");

  const whyChooseUS = [
    {
      title: "Expertise Meets Innovation:",
      description:
        "  Our seasoned experts blend creativity with technical prowess to craft solutions that stand out in today's competitive digital landscape.",
      imgUrl: "./assets/images/img1.png",
      id: 1,
      color: "#30077d",
    },
    {
      title: "Global Reach:",
      description:
        "  With offices in India and the USA, [Company Name] brings diverse perspectives and cultural insights to every project, ensuring a global touch to your solutions.",
      imgUrl: "./assets/images/img1.png",
      id: 2,
      color: "red",
    },
    {
      title: "Customized Solutions:",
      description:
        "We tailor our services to match your unique goals, working closely with you to deliver solutions that align with your vision.",
      imgUrl: "./assets/images/img1.png",
      id: 3,
      color: "green",
    },
    {
      title: "Agile Approach:",
      description:
        "  Our Agile development methodology ensures rapid iterations, continuous collaboration, and flexible solutions that evolve with your needs.",
      imgUrl: "./assets/images/img1.png",
      id: 4,
      color: "rgb(12,9,121)",
    },
    {
      title: "Unwavering Quality:",
      description:
        " Quality is at the core of everything we do. We are committed to delivering solutions that are robust, secure, and user-centric.",
      imgUrl: "./assets/images/img1.png",
      id: 5,
      color: "rgb(12,9,121)",
    },
  ];
  return (
    <Box
      sx={{
        mb: 3,
      }}
    >
      <Typography
        variant="h3"
        fontWeight={"500"}
        my={5}
        fontSize={matches ? "8vw" : "4vw"}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Why Choose Us
      </Typography>

      <Box
        style={{
          marginLeft: "50%",
          display: matches ? "none" : "block",
        }}
      >
        <Box className="top-line-line"></Box>
      </Box>

      {whyChooseUS.map((item, index) => (
        <Grid
          position={"relative"}
          container
          py={3}
          style={{
            display: "flex",
            marginBottom: matches ? "50px" : "0px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            className="vertical-line"
            display={matches ? "none" : "block"}
          ></Box>
          <Box
            className="round"
            style={{
              display: matches ? "none" : "block",
              border: `6px solid ${item.color} `,
              borderRadius: "50%",
            }}
          ></Box>

          <Grid
            item
            xs={12}
            md={5}
            style={{
              display: matches ? "flex" : index % 2 == 0 ? "flex" : "none",
              justifyContent: matches ? "center" : "flex-start",
              flexWrap: "wrap",
            }}
          >
            <img src="./assets/images/img1.png" height="80%" width="auto" />
          </Grid>

          <Grid item md={5}>
            <Box
              className={`h-line-dashed ${index % 2 == 0 ? "right" : "left"}`}
              style={{
                display: matches ? "none" : "block",
              }}
            ></Box>
            <Grid
              item
              container
              columnGap={2}
              p={1}
              className={`content-box ${
                !matches && index % 2 == 0
                  ? "marginLeftPlus"
                  : !matches && "marginLeftMinus"
              }`}
              style={{
                borderLeft: `8px solid ${item.color}`,
              }}
            >
              <Grid item xs={2} md={2}>
                <Box className="number">
                  <Typography
                    sx={{
                      color: "#fff",
                      px: 1,
                      fontSize: matches ? "4.5vw" : "2vw",
                      backgroundColor: item.color,
                      borderRadius: "50%",
                      height: matches ? "50px" : matches2 ? "45px" : "50px",
                      width: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {"0" + (index + 1)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={10} md={9}>
                <Box sx={{ float: "right", display: "block" }}>
                  <Typography
                    variant="h4"
                    mb={1}
                    className="heading"
                    fontWeight={"500"}
                    color="black"
                    style={{ fontSize: matches ? "4vw" : "2.2vw" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className="discretion"
                    lineHeight={1}
                    style={{
                      fontSize: matches ? "3.3vw" : "1.4vw",
                      opacity: 0.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            style={{
              display: index % 2 == 0 ? "none" : matches ? "none" : "block",
            }}
          >
            <Box className="img-container">
              <img src={item.imgUrl} height="100%" width="auto" />
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

export default ChooseUs;
