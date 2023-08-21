
import React from 'react';
import { Box, Typography, Grid, TextField, Button, Container  } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WebIcon from '@mui/icons-material/Web';
function Contactus() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
    }

    return (
        <Box style={{
            backgroundImage: 'url("https://images.pexels.com/photos/4386417/pexels-photo-4386417.jpeg?auto=compress&cs=tinysrgb&w=400")', backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Container>
                <Typography
                    variant="h5"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "20px",
                        fontStyle: "italic",
                        textAlign: "center",
                    }}>
                    <b>Contact Us</b>
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "20px",
                        fontStyle: "italic",
                        textAlign: "center",
                        padding: "20px 20px"
                    }}
                >


                    Partner with TamTree for expert solutions, training, and staffing that fuel your technological endeavors. Let us be the catalyst for your innovation and transformation journey.
                </Typography>
                <Grid container spacing={2} columns={12}>
                    <Grid item xs={7} style={{ direction: "row" }}>
                        <h1>Address</h1>
                        <Grid container style={{ display: 'flex', flex: "row", margin: "10px" }}>
                            <Grid Item >
                                <LocationOnIcon style={{ borderRadius: '100%', backgroundColor: 'white' }} />
                                <Typography variant="body1" color="blue">
                                    India Office:
                                </Typography>
                                <Typography variant="body2" >
                                    <p> 1/62 kilsathambur</p>
                                    <p>Namakkal </p>
                                    <p>Tamilnadu</p>
                                    <p>India</p>
                                    <p>637207</p>
                                    Phone:+91 6369669424
                                </Typography>
                            </Grid>
                            <Grid Item paddingRight="40px">
                                <LocationOnIcon style={{ borderRadius: '100%', backgroundColor: 'white' }} />

                                <Typography variant="body1" color="blue">
                                    USA Office:
                                </Typography>
                                <Typography variant="body2">
                                    <p>5900 Blcones Drive</p>
                                    <p>STE 100
                                        Austin,TX 78731</p>
                                    <p>Phone:+1(972) 523-2289</p>


                                </Typography>
                            </Grid>
                            <Grid Item>
                                <WebIcon style={{ borderRadius: '100%', backgroundColor: 'white' }} />
                                <Typography variant="body1" color="blue">
                                    Website
                                </Typography>


                                <Typography variant="body2">
                                    <p>tamtreellc.com</p>
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={5} >
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h6">Send Message</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} >
                                    <TextField label="Name" margin="normal" required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Email" margin="normal" required type="email"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Message" margin="normal" required multiline rows={4} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" type="submit" style={{ marginBottom: '10px' }}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Contactus;
