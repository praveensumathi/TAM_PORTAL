import { BorderColor } from "@mui/icons-material";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "./ChooseUs.css";
// import WOW from "wowjs";
// import 'animate.css';
// import 'wowjs/css/libs/animate.css';
// import "./wow.min.js";
import Fade from "react-reveal/Fade";


function ChooseUs() {
  // useEffect(() => {
  //   const wow = new WOW.WOW({
  //     boxClass: "wow",
  //     animateClass: "animated",
  //     offset: 0,
  //     mobile: true,
  //     live: true,
  //   });
  //   wow.init();
  // }, []);
  const matches = useMediaQuery("(max-width:900px)");
  const matches2 = useMediaQuery("(max-width:1100px)");

  const whyChooseUS = [
    {
      title: "Global Reach",
      description:
        "  With offices in India and the USA, TamTree brings diverse perspectives and cultural insights to every project, ensuring a global touch to your solutions.",
      imgUrl: "./assets/images/Global_Reach.png",
      id: 1,
      color: "linear-gradient(to right,#ff3834 0%,#ff7133 100%)",
      border_color: "#ff6333",
    },
    {
      title: "Expertise Meets Innovation",
      description:
        "  Our seasoned experts blend creativity with technical prowess to craft solutions that stand out in today's competitive digital landscape.",
      imgUrl: "./assets/images/Expertise_Meets_Innovation.png",
      id: 2,
      color: "linear-gradient(to right,#30077d 0%,#0f51bf 100%)",
      border_color: "#104cba",
    },
    {
      title: "Customized Solutions",
      description:
        "We tailor our services to match your unique goals, working closely with you to deliver solutions that align with your vision.",
      imgUrl: "./assets/images/Customized_Solutions.png",
      id: 3,
      color: "linear-gradient(to right,#4392d5 0%,#4faede 100%)",
      border_color: "#4dabde",
    },
    {
      title: "Unwavering Quality",
      description:
        " Quality is at the core of everything we do. We are committed to delivering solutions that are robust, secure, and user-centric.",
      imgUrl: "./assets/images/Unwavering_Quality.png", 
      id: 4,
      color: "linear-gradient(to right,#ff3834 0%,#ff7133 100%)",
      border_color: "#fe6232",
    },
    {
      title: "Agile Approach",
      description:
        "  Our Agile development methodology ensures rapid iterations, continuous collaboration, and flexible solutions that evolve with your needs.",
      imgUrl: "./assets/images/Agile_Approach.png",
      id: 5,
      color: "linear-gradient(to right,#30077d 0%,#0f51bf 100%)",
      border_color: "#104cba",
    },
  ];
  return (
    <Box
      sx={{
        px: 3,
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
        Why Choose us
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
          style={{
            display: "flex",
            marginBottom: matches ? "50px" : "0px",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "10px",
          }}
          // className="wow animate__animated animate__fadeInRight"
          // data-wow-duration="2s"
          // data-wow-delay="5s"
        >
          <Box
            className="vertical-line"
            display={matches ? "none" : "block"}
          ></Box>
          <Box
            className="round"
            style={{
              display: matches ? "none" : "block",
              border: `6px solid ${item.border_color} `,
              borderRadius: "50%",
            }}
          ></Box>

          <Grid
            item
            xs={12}
            md={5}
            style={{
              display: matches ? "flex" : index % 2 == 0 ? "flex" : "none",
              justifyContent: "center",
              paddingBottom: "15px",
            }}
          >
            <Fade left duration={1000} cascade>
              <Box>
                <img
                  src={item.imgUrl}
                  height="auto"
                  width={matches ? "70%" : "50%"}
                />
              </Box>
            </Fade>
          </Grid>

          <Grid item md={5} sx={{ display: "flex", alignItems: "center" }}>
            <Box
              className={`h-line-dashed ${index % 2 == 0 ? "right" : "left"}`}
              style={{
                display: matches ? "none" : "block",
              }}
            ></Box>
            <Fade
              key={item.id}
              right={index % 2 === 0}
              left={index % 2 !== 0}
              duration={1000}
              cascade
            >
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
                  borderLeft: `8px solid ${item.border_color}`,
                }}
              >
                <Grid item xs={2} md={2} p>
                  <Typography
                    sx={{
                      color: "#fff",
                      p: 1,
                      // fontSize: matches ? "4.5vw" : "2vw",
                      fontSize: "20px",
                      background: item.color,
                      borderRadius: "50%",
                      height: matches ? "50px" : matches2 ? "45px" : "50px",
                      // height: "",
                      width: matches ? "50px" : matches2 ? "45px" : "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {"0" + (index + 1)}
                  </Typography>
                </Grid>
                <Grid item xs={10} md={9}>
                  <Box sx={{ float: "right", display: "block" }}>
                    <Typography
                      mb={1}
                      className="heading"
                      fontWeight={"500"}
                      color="black"
                      style={{ fontSize: matches ? "4vw" : "2.2vw" }}
                      lineHeight={1}
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
            </Fade>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            p={5}
            style={{
              display: index % 2 == 0 ? "none" : matches ? "none" : "block",
            }}
          >
            <Fade right duration={1000} cascade>
              <Box className="img-container">
                <img src={item.imgUrl} height="auto" width="50%" />
              </Box>
            </Fade>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

export default ChooseUs;
