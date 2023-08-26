import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import "./App.css";
import { useMediaQuery } from "@mui/material";

export default function Services() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 600px) and (max-width: 1700px)"
  );

  const image2 = [
    {
      className: "card1",
      id: 1,
      img: "./assets/images/Web_Development.png", 
      title: "Web and Mobile App Development",
      description:
        "Our expert team of developers, designers, and architects collaborates to create seamless, user-friendly web and mobile applications. From concept to deployment, we leverage the latest fullstack technologies to build solutions that meet your unique business requirements.",
    },
    {
      className: "card2",
      id: 2,
      img: "./assets/images/Fullstack_Expertise.png", 
      title: "Fullstack Expertise",
      description:
        "   With proficiency in both frontend and backend technologies, we provide holistic fullstack development services. Our teams excel in utilizing frameworks, databases, and languages to craft powerful, dynamic applications that drive growth and innovation.",
    },
    {
      className: "card3",
      id: 3,
      img: "./assets/images/PeopleSoft.png", 
      title: "SAP and PeopleSoft  Training",
      description:
        "   Unlock the potential of SAP and PeopleSoft with our comprehensive training programs. Our experienced trainers provide hands-on learning experiences that empower individuals and teams to harness the power of these enterprise solutions effectively.",
    },
    {
      className: "card4",
      id: 4,
      img: "./assets/images/Technology_Staffing.png", 
      title: "Technology Staffing",
      description:
        "TamTree understands that the right team makes all the difference. We offer top-tier staffing solutions for a variety of roles, including fullstack developers, as well as SAP and PeopleSoft professionals. Fulfill your workforce needs across various technologies with our curated talent pool.",
    },
  ];

  return (
    <Box sx={{ marginBottom: "15px", padding: "30px", height: "100%" }}>
      <Typography
        variant="h3"
        fontWeight={"500"}
        my={2}
        fontSize={isSmallScreen ? "8vw" : "4vw"}
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        Our Featured Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          flexDirection: isSmallScreen ? "column" : "row",
          flexWrap: "wrap",
          gap: 5,
          margin: "auto",
          padding: "15px",
          justifyContent:
            isSmallScreen || isMediumScreen ? "center" : "flex-start",
        }}
      >
        {image2.map((item, index) => (
          <Card
            key={item.id}
            className={item.className}
            sx={{
              marginBottom: "10px",
              textAlign: "center",
              maxWidth: "300px",
              height: "auto",
              boxShadow: "none",
              paddingTop: "10px",
              "&:hover": {
                cursor: "pointer",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              },
            }}
          >
            <Box
              className="card-content"
              style={{
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                image={item.img}
                alt="green iguana"
                sx={{
                  width: "70%",
                  height: "auto",
                  display: "block",
                  margin: "auto",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  fontSize={24}
                  component="div"
                  align="center"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  fontSize={16}
                  color="text.secondary"
                  align="center"
                >
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
