import { BorderColor } from "@mui/icons-material";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import React from "react";

function ChooseUs() {
  const matches = useMediaQuery("(max-width:900px)");
  const matches2 = useMediaQuery("(max-width:560px)");

  return (
    <div style={{ margin: 15 }}>
      ChooseU
      <Grid style={{ display: "block", margin: "6%" }}>
        {/* 1//////////////////////// */}
        <Grid
          style={{
            position: "relative",
            flex: "row",
            columnGap: "8rem",
            paddingBottom: "50px",
          }}
        >
          <Box //top line
            style={{ marginLeft: "50%", display: matches ? "none" : "block" }}
          >
            <div // top-line
              class="top-line-line"
              style={{
                backgroundImage: "url(/assets/images/dash-img.png)",
                height: "2px",
                width: "50px",
                display: "block",
                position: "absolute",
                marginLeft: "-25px",
                // marginLeft:"-25px"
              }}
            ></div>
          </Box>
          <Box // vertical line
            style={{
              backgroundImage: "url(/assets/images/time-line-dashed.png)",
              display: matches ? "none" : "block",
              position: "absolute",
              left: "50%",
              width: "2px",
              height: "100%",
            }}
          ></Box>
          <Box // round
            style={{
              display: matches ? "none" : "block",
              position: "absolute",
              top: "106px",
              left: "50%",
              width: "22px",
              height: "22px",
              backgroundColor: "#fff",
              borderWidth: "6px",
              borderStyle: "solid",
              borderRadius: "50%",
              borderColor: "#104cba",
              marginLeft: "-10px",
            }}
          ></Box>
          <Grid
            style={{ display: matches ? "block" : "flex", flexWrap: "wrap" }}
          >
            <Box //01 img
              style={{
                display: "flex",
                position: "relative",
                width: "100%",
                flex: "0 0 50%",
                maxWidth: matches ? "100%" : "50%",
                paddingLeft: "0%",
                paddingRight: "50px",
                justifyContent: "center",
                textAlign: "center",
                // backgroundColor:"red"
              }}
            >
              <Box
                style={{ width: "230px", height: "230px", marginTop: "50px" }}
              >
                <img
                  src="./assets/images/img1.png"
                  height="250px"
                  width="280px"
                />
              </Box>
            </Box>
            {/* ////////////////////// */}

            <Box // 01 text
              style={{
                position: "relative",
                width: "100%",
                flex: "0 0 50%",
                maxWidth: matches ? "100%" : "50%",
                display: "block",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <Box // time line dashed
                style={{
                  backgroundImage: "url(/assets/images/time-line-dashed.png)",
                  display: matches ? "none" : "block",
                  position: "absolute",
                  top: "115px",
                  left: "10px",
                  width: "30px",
                  height: "2px",
                }}
              ></Box>

              <Grid //content box
                display={"flex"}
                alignItems={"center"}
                style={{
                  marginTop: "50px",
                  textAlign: "left",
                  background: "#fff",
                  padding: "20px",
                  overflow: "hidden",

                  borderLeft: "8px solid #104cba",
                  boxShadow:
                    "2px 5px 20px 0 rgba(23.00000000000011,22.000000000000007,138.99999999999994,.08)",
                }}
                container
              >
                <Grid //01
                  item
                  xs={12}
                  md={2}
                >
                  <Box
                    style={{
                      width: "70px",
                      height: "70px",
                      // float: "left",
                      display: "flex",
                      background:
                        "linear-gradient(to right,#30077d 0%,#0f51bf 100%)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      // position: "absolute",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "30px" }}>
                      01
                    </Typography>
                  </Box>
                  {/* </Box> */}
                </Grid>
                <Grid // text
                  item
                  xs={12}
                  md={10}
                  style={{
                    width: "75%",
                    // float: "right",
                    color: "#696969",
                  }}
                >
                  <Box sx={{ float: "right", display: "block" }}>
                    <Typography
                      variant="h4"
                      style={{
                        fontWeight: "600",
                        textTransform: "capitalize",
                        color: "#000",
                      }}
                    >
                      Business Collaboration
                    </Typography>

                    <Typography style={{ fontSize: "18px" }}>
                      Generators on the Internet tend to repeat predefined
                      chunks as necessary
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* 2///////////////////// */}
        <Grid
          style={{ position: "relative", flex: "row", paddingBottom: "50px" }}
        >
          <Box // vertical line
            style={{
              backgroundImage: "url(/assets/images/time-line-dashed.png)",
              display: matches ? "none" : "block",
              position: "absolute",
              left: "50%",
              width: "2px",
              height: "100%",
            }}
          ></Box>
          <Box // round
            style={{
              display: matches ? "none" : "block",
              position: "absolute",
              top: "106px",
              left: "50%",
              width: "20px",
              height: "20px",
              backgroundColor: "#fff",
              borderWidth: "5.5px",
              borderStyle: "solid",
              borderRadius: "50%",
              borderColor: "#ff6333",
              marginLeft: "-10px",
            }}
          ></Box>
          <Grid
            style={{ display: matches ? "block" : "flex", flexWrap: "wrap" }}
          >
            {/* ////////////////////////////// */}
            <Box // img 2
              style={{
                position: "relative",
                width: "100%",
                flex: "0 0 50%",
                maxWidth: matches ? "100%" : "50%",
                display: matches ? "flex" : "none",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box
                style={{ width: "230px", height: "230px", marginTop: "50px" }}
              >
                <img
                  src="./assets/images/img1.png"
                  height="250px"
                  width="280px"
                />
              </Box>
            </Box>
            {/* //////////////////// */}
            <Box // 02 text
              style={{
                position: "relative",
                width: "100%",
                flex: "0 0 50%",
                maxWidth: matches ? "100%" : "50%",
                display: "block",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <Grid //content box
                display={"flex"}
                alignItems={"center"}
                p={2}
                container
                style={{
                  marginTop: "50px",
                  textAlign: "left",
                  background: "#fff",
                  overflow: "hidden",
                  borderLeft: "8px solid #ff6333",
                  boxShadow:
                    "2px 5px 20px 0 rgba(23.00000000000011,22.000000000000007,138.99999999999994,.08)",
                }}
              >
                <Grid //02
                  item
                  xs={12}
                  md={2}
                  // style={{ width: "20%", float: "left", display: "block" }}
                >
                  <Box
                    style={{
                      width: "70px",
                      height: "70px",
                      float: "left",
                      display: "flex",
                      background:
                        "linear-gradient(to right,#ff3834 0%,#ff7133 100%)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      // position: "absolute",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "30px" }}>
                      02
                    </Typography>
                  </Box>
                </Grid>
                <Grid // texts
                  item
                  xs={12}
                  md={10}
                  style={{
                    width: "75%",
                    float: "right",
                    color: "#696969",
                  }}
                >
                  <Box sx={{ float: "right", display: "block" }}>
                    <Typography
                      variant="h4"
                      style={{
                        fontWeight: "600",
                        textTransform: "capitalize",
                        color: "#000",
                      }}
                    >
                      Business Collaboration
                    </Typography>

                    <Typography style={{ fontSize: "18px" }}>
                      Generators on the Internet tend to repeat predefined
                      chunks as necessary
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box // time line dashed
                style={{
                  backgroundImage: "url(/assets/images/time-line-dashed.png)",
                  display: matches ? "none" : "block",
                  position: "absolute",
                  top: "115px",
                  left: "95%",
                  width: "6%",
                  height: "2px",
                  zIndex: "-1",
                }}
              ></Box>
            </Box>
            {/* /////////////////////////// */}
            <Box // img 2
              style={{
                position: "relative",
                width: "100%",
                flex: "0 0 50%",
                maxWidth: matches ? "100%" : "50%",
                display: matches ? "none" : "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box
                style={{ width: "230px", height: "230px", marginTop: "50px" }}
              >
                <img
                  src="./assets/images/img1.png"
                  height="250px"
                  width="280px"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* 3///////////////// */}
        <Grid
          style={{
            position: "relative",
            flex: "row",
            columnGap: "8rem",
            paddingBottom: "50px",
          }}
        >
          <Box // vertical line
            style={{
              backgroundImage: "url(/assets/images/time-line-dashed.png)",
              display: matches ? "none" : "block",
              position: "absolute",
              left: "50%",
              width: "2px",
              height: "100%",
            }}
          ></Box>
          <Box // round
            style={{
              display: matches ? "none" : "block",
              position: "absolute",
              top: "106px",
              left: "50%",
              width: "22px",
              height: "22px",
              backgroundColor: "#fff",
              borderWidth: "6px",
              borderStyle: "solid",
              borderRadius: "50%",
              borderColor: "#4dabde",
              marginLeft: "-10px",
            }}
          ></Box>
          <Grid
            style={{ display: matches ? "block" : "flex", flexWrap: "wrap" }}
          >
            <Box //03 img
              style={{
                display: "flex",
                position: "relative",
                width: "100%",
                flex: "0 0 50%",
                maxWidth: matches ? "100%" : "50%",
                justifyContent: "center",
                textAlign: "center",
                // backgroundColor:"red"
              }}
            >
              <Box
                style={{ width: "230px", height: "230px", marginTop: "50px" }}
              >
                <img
                  src="./assets/images/img1.png"
                  height="250px"
                  width="280px"
                />
              </Box>
            </Box>
            {/* ////////////////////// */}
            <Box // 03 text
              style={{
                position: "relative",
                width: "100%",
                flex: "0 0 50%",
                maxWidth: matches ? "100%" : "50%",
                display: "block",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <Box // time line dashed
                style={{
                  backgroundImage: "url(/assets/images/time-line-dashed.png)",
                  display: matches ? "none" : "block",
                  position: "absolute",
                  top: "115px",
                  left: "10px",
                  width: "30px",
                  height: "2px",
                }}
              ></Box>
              <Grid //content box
                display={"flex"}
                alignItems={"center"}
                p={2}
                container
                style={{
                  marginTop: "50px",
                  textAlign: "left",
                  background: "#fff",
                  overflow: "hidden",
                  borderLeft: "8px solid #4dabde",
                  boxShadow:
                    "2px 5px 20px 0 rgba(23.00000000000011,22.000000000000007,138.99999999999994,.08)",
                }}
              >
                <Grid //03
                  item
                  xs={12}
                  md={2}
                  // style={{ width: "20%", float: "left", display: "block" }}
                >
                  <Box
                    style={{
                      width: "70px",
                      height: "70px",
                      float: "left",
                      display: "flex",
                      background:
                        "linear-gradient(to right,#4392d5 0%,#4faede 100%)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      // position: "absolute",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "30px" }}>
                      {" "}
                      03{" "}
                    </Typography>
                  </Box>
                </Grid>
                <Grid // text
                  item
                  xs={12}
                  md={10}
                  style={{
                    width: "75%",
                    float: "right",
                    color: "#696969",
                  }}
                >
                  <Box sx={{ float: "right", display: "block" }}>
                    <Typography
                      variant="h4"
                      style={{
                        fontWeight: "600",
                        textTransform: "capitalize",
                        color: "#000",
                      }}
                    >
                      Business Collaboration
                    </Typography>

                    <Typography style={{ fontSize: "18px" }}>
                      Generators on the Internet tend to repeat predefined
                      chunks as necessary
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* 4///////////////////////// */}
        <Grid
          style={{ position: "relative", flex: "row", paddingBottom: "50px" }}
        >
          <Box // vertical line
            style={{
              backgroundImage: "url(/assets/images/time-line-dashed.png)",
              display: matches ? "none" : "block",
              position: "absolute",
              left: "50%",
              width: "2px",
              height: "100%",
            }}
          ></Box>
          <Box // round
            style={{
              display: matches ? "none" : "block",
              position: "absolute",
              top: "106px",
              left: "50%",
              width: "20px",
              height: "20px",
              backgroundColor: "#fff",
              borderWidth: "5.5px",
              borderStyle: "solid",
              borderRadius: "50%",
              borderColor: "#104cba",
              marginLeft: "-10px",
            }}
          ></Box>
          <Grid
            style={{ display: matches ? "block" : "flex", flexWrap: "wrap" }}
          >
            {/* /////////////////////////////// */}
            <Box // img 4
              style={{
                position: "relative",
                width: "100%",
                flex: "0 0 50%",
                maxWidth: matches ? "100%" : "50%",
                display: matches ? "flex" : "none",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box
                style={{ width: "230px", height: "230px", marginTop: "50px" }}
              >
                <img
                  src="./assets/images/img1.png"
                  height="250px"
                  width="280px"
                />
              </Box>
            </Box>
            {/* //////////////////////////////// */}
            <Box // 04 text
              style={{
                position: "relative",
                width: "100%",
                flex: "0 0 50%",
                maxWidth: matches ? "100%" : "50%",
                display: "block",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <Grid //content box
                display={"flex"}
                alignItems={"center"}
                p={2}
                container
                style={{
                  marginTop: "50px",
                  textAlign: "left",
                  background: "#fff",
                  overflow: "hidden",
                  borderLeft: "8px solid #104cba",
                  boxShadow:
                    "2px 5px 20px 0 rgba(23.00000000000011,22.000000000000007,138.99999999999994,.08)",
                }}
              >
                <Grid //04
                  item
                  xs={12}
                  md={2}
                >
                  <Box
                    style={{
                      width: "70px",
                      height: "70px",
                      float: "left",
                      display: "flex",
                      background:
                        "linear-gradient(to right,#30077d 0%,#0f51bf 100%)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      // position: "absolute",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "30px" }}>
                      04
                    </Typography>
                  </Box>
                  {/* </Box> */}
                </Grid>
                <Grid // text
                  item
                  xs={12}
                  md={10}
                  style={{
                    width: "75%",
                    float: "right",
                    color: "#696969",
                  }}
                >
                  <Box sx={{ float: "right", display: "block" }}>
                    <Typography
                      variant="h4"
                      style={{
                        fontWeight: "600",
                        textTransform: "capitalize",
                        color: "#000",
                      }}
                    >
                      Business Collaboration
                    </Typography>

                    <Typography style={{ fontSize: "18px" }}>
                      Generators on the Internet tend to repeat predefined
                      chunks as necessary
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box // time line dashed
                style={{
                  backgroundImage: "url(/assets/images/time-line-dashed.png)",
                  display: matches ? "none" : "block",
                  position: "absolute",
                  top: "115px",
                  left: "95%",
                  width: "6%",
                  height: "2px",
                  zIndex: "-1",
                }}
              ></Box>
            </Box>
            {/* /////////////////////////// */}
            <Box // img 4
              style={{
                position: "relative",
                width: "100%",
                flex: "0 0 50%",
                maxWidth: matches ? "100%" : "50%",
                display: matches ? "none" : "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box
                style={{ width: "230px", height: "230px", marginTop: "50px" }}
              >
                <img
                  src="./assets/images/img1.png"
                  height="250px"
                  width="280px"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* 5//////////////////////////// */}
        <Grid
          style={{
            position: "relative",
            flex: "row",
            columnGap: "8rem",
            paddingBottom: "50px",
          }}
        >
          <Box // vertical line
            style={{
              backgroundImage: "url(/assets/images/time-line-dashed.png)",
              display: matches ? "none" : "block",
              position: "absolute",
              left: "50%",
              width: "2px",
              height: "100%",
            }}
          ></Box>
          <Box // round
            style={{
              display: matches ? "none" : "block",
              position: "absolute",
              top: "106px",
              left: "50%",
              width: "22px",
              height: "22px",
              backgroundColor: "#fff",
              borderWidth: "6px",
              borderStyle: "solid",
              borderRadius: "50%",
              borderColor: "#ff3834",
              marginLeft: "-10px",
            }}
          ></Box>
          <Grid
            style={{ display: matches ? "block" : "flex", flexWrap: "wrap" }}
          >
            <Box //01 img
              style={{
                display: "flex",
                position: "relative",
                width: "100%",
                flex: "0 0 50%",
                maxWidth: matches ? "100%" : "50%",
                justifyContent: "center",
                textAlign: "center",
                // backgroundColor:"red"
              }}
            >
              <Box
                style={{ width: "230px", height: "230px", marginTop: "50px" }}
              >
                <img
                  src="./assets/images/img1.png"
                  height="250px"
                  width="280px"
                />
              </Box>
            </Box>
            {/* ////////////////////// */}
            <Box // 05 text
              style={{
                position: "relative",
                width: "100%",
                flex: "0 0 50%",
                maxWidth: matches ? "100%" : "50%",
                display: "block",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <Box // time line dashed
                style={{
                  backgroundImage: "url(/assets/images/time-line-dashed.png)",
                  display: matches ? "none" : "block",
                  position: "absolute",
                  top: "115px",
                  left: "10px",
                  width: "30px",
                  height: "2px",
                }}
              ></Box>
              <Grid //content box
                display={"flex"}
                alignItems={"center"}
                p={2}
                container
                style={{
                  marginTop: "50px",
                  textAlign: "left",
                  background: "#fff",
                  overflow: "hidden",
                  borderLeft: "8px solid #ff6333",
                  boxShadow:
                    "2px 5px 20px 0 rgba(23.00000000000011,22.000000000000007,138.99999999999994,.08)",
                }}
              >
                <Grid //05
                  item
                  xs={12}
                  md={2}
                >
                  <Box
                    style={{
                      width: "70px",
                      height: "70px",
                      float: "left",
                      display: "flex",
                      background:
                        "linear-gradient(to right,#ff3834 0%,#ff7133 100%)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "30px" }}>
                      {" "}
                      05{" "}
                    </Typography>
                  </Box>
                </Grid>
                <Grid // text
                  item
                  xs={12}
                  md={10}
                  style={{
                    width: "75%",
                    float: "right",
                    color: "#696969",
                  }}
                >
                  <Box sx={{ float: "right", display: "block" }}>
                    <Typography
                      variant="h4"
                      style={{
                        fontWeight: "600",
                        textTransform: "capitalize",
                        color: "#000",
                      }}
                    >
                      Business Collaboration
                    </Typography>

                    <Typography style={{ fontSize: "18px" }}>
                      Generators on the Internet tend to repeat predefined
                      chunks as necessary
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChooseUs;
