

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import "./App.css";

import { useMediaQuery } from "@mui/material";


export default function Services() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 651px) and (max-width: 1700px)"
  );

  const image2 = [
    {
      className: "card1",
      id: 1,
      img: "/assets/images/homevector.png",
      title: "Web and Mobile App Development",
      description:
        "Our expert team of developers, designers, and architects collaborates to create seamless, user-friendly web and mobile applications. From concept to deployment, we leverage the latest fullstack technologies to build solutions that meet your unique business requirements.",

    },
    {
      className: "card2",
      id: 2,
      img: "/assets/images/homevector.png",
      title: "Fullstack Expertise",
      description:
        "   With proficiency in both frontend and backend technologies, we provide holistic fullstack development services. Our teams excel in utilizing frameworks, databases, and languages to craft powerful, dynamic applications that drive growth and innovation.",

    },
    {
      className: "card3",
      id: 3,
      img: "/assets/images/homevector.png",
      title: "SAP and PeopleSoft Training",
      description:
        "   Unlock the potential of SAP and PeopleSoft with our comprehensive training programs. Our experienced trainers provide hands-on learning experiences that empower individuals and teams to harness the power of these enterprise solutions effectively.",

    },
    {
      className: "card4",
      id: 4,
      img: "/assets/images/homevector.png",
      title: "Technology Staffing",
      description:
        "Tam Tree understands that the right team makes all the difference. We offer top-tier staffing solutions for a variety of roles, including fullstack developers, as well as SAP and PeopleSoft professionals. Fulfill your workforce needs across various technologies with our curated talent pool.",

    },
  ];

  return (
    <Box
      sx={{ marginBottom: "15px", padding: "30px" }}
      data-aos="fade-left"
      data-aos-duration="2000"
    >

      <Typography
        variant="h5"

        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          fontStyle: "italic",
        }}
      >
        <b>Our Featured Services</b>

      </Typography>

      <Box
        className={isSmallScreen ? "portfolioBoxM" : "portfolioBoxL"}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          flexWrap: "wrap",
          gap: 5,
          padding: "15px",
          justifyContent: isMediumScreen ? "center" : "flex-start",
        }}
      >
        {image2.map((item, index) => (
          <Card
            key={item.id}
            className={item.className}

            sx={{
              marginBottom: "10px",
              width: isSmallScreen
                ? "100%"
                : isMediumScreen
                  ? "calc(50% - 20px)"
                  : "calc(30% - 20px)",
              maxWidth: "300px",
              maxHeight: "500px",
              marginLeft: isSmallScreen ? "0" : "10px",
              marginRight: isSmallScreen ? "0" : "10px",
              boxShadow: "none",

              "&:hover": {
                cursor: "pointer",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              },

            }}
          >
            <Box className="card-content" style={{
              height: "100%"
            }}>
              <CardMedia
                component="img"
                height="200"
                image={item.img}
                alt="green iguana"

                sx={{
                  width: '50%',
                  height: 'auto',
                  display: 'block',
                  margin: 'auto',
                }}
              />
              <CardContent >
                <Typography gutterBottom variant="h6" component="div" align="center">
                  {item.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" align="center">
                  {item.description}
                </Typography>
              </CardContent>
            </Box>


          </Card>

        ))}
      </Box>

    </Box>
  );
}


