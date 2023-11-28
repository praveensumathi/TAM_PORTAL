import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import "./Technology.css";
import Marquee from "react-fast-marquee";

function Technology() {
  const matches = useMediaQuery("(max-width:900px)");

  const Technologys = [
    {
      title: "React",
      img: "./assets/images/react.png",
    },
    {
      title: "MongoDB",
      img: "./assets/images/mongodb2.png",
    },
    {
      title: "SQL",
      img: "./assets/images/sql.png",
    },
    {
      title: "Webflow",
      img: "./assets/images/webflow.png",
    },
    {
      title: ".Net",
      img: "./assets/images/net.png",
    },
    {
      title: "Node",
      img: "./assets/images/node.png",
    },
    {
      title: "React Native",
      img: "./assets/images/react native.png",
    },
    {
      title: "Angular",
      img: "./assets/images/angular.png",
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
        Technologies
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
