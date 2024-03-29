import React from "react";
import { Paper, Box, Grid, Typography, Link, ButtonBase } from "@mui/material";
import embdLogo from "../../images/embd-logo-black.png";
import ContactForm from "../TemplateComponents/ContactForm";
import FacebookLogo from "../../images/SocialLogos/FacebookLogo.svg";
import YelpLogo from "../../images/SocialLogos/YelpLogo.svg";
import MeetupLogo from "../../images/SocialLogos/MeetupLogo.svg";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <Grid Container>
      <Box
        elevation={0}
        sx={{
          background: "#B5BECB",
          display: "flex",
          flexDirection: "row",
          marginTop: "50px",
        }}
      >
        <React.Fragment>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "center",
              justifyContent: "center",
              width: "100%",
              height: "100px",
              background: "#B5BECB",
            }}
          >
            <ButtonBase
              component={HashLink}
              to="/home#home"
              sx={{
                display: { xs: "flex", sm: "flex", lg: "flex", xl: "flex" },
                flexWrap: "wrap",
                alignItems: "stretch",
              }}
            >
              <img src={embdLogo} alt="dance logo" />
            </ButtonBase>
          </Paper>
        </React.Fragment>
      </Box>
      <Paper
        sx={{
          display: { xs: "none", md: "none", lg: "flex" },
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "500px",
          background: "#B5BECB",
        }}
      >
        <Grid
          container
          rowSpacing={1}
          ClassName="TemplatePaper"
          sx={{
            border: "0",
            display: "flex",
            alignContent: "center",
            justifyContent: "space-around",
            marginBottom: "20px",
          }}
        >
          <Grid Item>
            <Typography
              sx={{
                display: { xs: "none", md: "none", lg: "flex" },
                flexDirection: "column",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "50px",
                lineHeight: "20px",
                marginTop: "20px",
                marginBottom: "20px",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              Book Now!
              {<ContactForm />}
            </Typography>
          </Grid>
          <Grid Item xs="auto">
            <Box
              sx={{
                display: { xs: "none", md: "none", lg: "flex" },
                flexWrap: "nowrap",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "50px",
                  lineHeight: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "50px",
                  lineHeight: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                Services
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "50px",
                  lineHeight: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                Contact Us
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "50px",
                  lineHeight: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                Call Us Today!
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "50px",
                  lineHeight: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                123-456-7890
              </Typography>
            </Box>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              flexDirection: "column",
            }}
          >
            <Grid Item xs="none">
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  whiteSpace: "nowrap",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "50px",
                  lineHeight: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                  alignItems: "center",
                }}
                textAlign="center"
              >
                Social Media
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                margin="10px"
              >
                <Link
                  href="https://www.yelp.com/biz/evelyn-meinz-ballroom-dance-pasadena?osq=evelyn+meinz+ballroom+dance"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={YelpLogo} alt="yelp icon" height="100px" />
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                margin="10px"
              >
                <Link
                  href="https://www.facebook.com/EvelynMeinzBallroomDance"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={FacebookLogo} alt="facebook icon" height="50px" />
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                margin="10px"
              >
                <Link
                  href="https://www.meetup.com"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={MeetupLogo} alt="meetup icon" height="70px" />
                </Link>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Paper>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "50px",
          background: "#000000",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Poppins",
            color: "white",
          }}
        >
          Copyright 2020-2022 Evelyn Meinz Ballroom Dance | Design: Tim Hughes
        </Typography>
      </Paper>
    </Grid>
  );
}
