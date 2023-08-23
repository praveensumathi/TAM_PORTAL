import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import "./Technology.css";
import Marquee from "react-fast-marquee";

function Technology() {
  const matches = useMediaQuery("(max-width:900px)");

  const Technologys = [
    {
      id: 1,
      title: "HTML",
      img: "./assets/images/html.png",
    },
    {
      id: 2,
      title: "CSS",
      img: "./assets/images/css.jpeg",
    },
    {
      id: 1,
      title: "java Script",
      img: "./assets/images/html.png",
    },
    {
      id: 1,
      title: "React",
      img: "./assets/images/react.png",
    },
    {
      id: 1,
      title: "MongoDB",
      img: "./assets/images/mongodb2.png",
    },
    {
      id: 1,
      title: "SQL",
      img: "./assets/images/sql.png",
    },
  ];

  return (
    <Container
      className="container"
      my={3}
      
    >
      <Typography
        variant="h3"
        fontWeight={"500"}
        my={5}
        fontSize={matches ? "8vw" : "4vw"}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Technoloies
      </Typography>
      <Box style={{
        opacity: 0.6,
      }}>
        <Marquee>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            {Technologys.map((item) => (
              <Box
                className="box"
                key={item.id}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <img
                  src={item.img}
                  style={{
                    // objectFit: "contain",
                    width: "25%",
                    height: "auto",
                  }}
                />
                <Typography
                  pt={2}
                  style={{ fontSize: "20px", fontWeight: "600" }}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Marquee>
      </Box>
    </Container>
  );
}

export default Technology;
