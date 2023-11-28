import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import GroupsIcon from "@mui/icons-material/Groups";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";
import PeopleIcon from "@mui/icons-material/People";
import Marquee from "react-fast-marquee";

function Training() {
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
    <>
      <Box sx={{ backgroundColor: "#f6f6f9" }} p={2}>
        <Container>
          <Typography variant="h4" fontWeight="700">
            What TamTree Offers You?
          </Typography>
          <Grid
            container
            mt={2}
            sx={{ display: "flex", alignItems: "center" }}
            direction="row-reverse"
          >
            <Grid item md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="assets\images\training.png"
                  alt="tamtree"
                  height="90%"
                  width="90%"
                />
              </Box>
            </Grid>
            <Grid item md={8}>
              <Box>
                <Grid container spacing={2}>
                  <Grid item md={6} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        minHeight: "165px",
                        "&:hover": { backgroundColor: "#eae1f7" },
                      }}
                    >
                      <Box p={2}>
                        <LiveTvIcon color="primary" fontSize="large" />
                        <Typography fontSize="18px" fontWeight="600">
                          LIVE Classes
                        </Typography>
                        <Typography>
                          Live Classes offering Guaranteed Career Advancement
                          Support
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item md={6} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        minHeight: "165px",
                        "&:hover": { backgroundColor: "#eae1f7" },
                      }}
                    >
                      <Box p={2}>
                        <GroupsIcon color="primary" fontSize="large" />
                        <Typography fontSize="18px" fontWeight="600">
                          Interactive Sessions
                        </Typography>
                        <Typography>
                          Learn through Hands-on Coding Experience
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item md={6} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        minHeight: "165px",
                        "&:hover": { backgroundColor: "#eae1f7" },
                      }}
                    >
                      <Box p={2}>
                        <CodeIcon color="primary" fontSize="large" />
                        <Typography fontSize="18px" fontWeight="600">
                          Full Stack Development
                        </Typography>
                        <Typography>
                          Learn Javascript, HTML, CSS, MERN Stack & more
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item md={6} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        minHeight: "165px",
                        "&:hover": { backgroundColor: "#eae1f7" },
                      }}
                    >
                      <Box p={2}>
                        <BugReportIcon color="primary" fontSize="large" />
                        <Typography fontSize="18px" fontWeight="600">
                          Manual Testing
                        </Typography>
                        <Typography>
                          Precision in Testing. Quality Assurance Experts.
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item md={6} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        minHeight: "165px",
                        "&:hover": { backgroundColor: "#eae1f7" },
                      }}
                    >
                      <Box p={2}>
                        <PeopleIcon color="primary" fontSize="large" />
                        <Typography fontSize="18px" fontWeight="600">
                          Communication Training
                        </Typography>
                        <Typography>
                          Improving Soft Skills, Group Chat, Language Training
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#eae1f7" }} p={2}>
        <Container>
          <Box>
            <Typography variant="h4" fontWeight="700" color="#7942d4">
              Technologies covered
            </Typography>
            <Box>
              <Marquee>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  m={2}
                >
                  {Technologys.map((item) => (
                    <Box
                      key={item.id}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "#fff",
                        height: "120px",
                        width: "170px",
                        margin: "0 5px",
                        borderRadius: "10px",
                      }}
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
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Training;
