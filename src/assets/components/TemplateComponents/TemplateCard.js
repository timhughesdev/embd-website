/* Reusable layout for photos, buttons, words on a card or paper throughout the application */
import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { HashLink } from "react-router-hash-link";

export default function TemplateCard(props) {
  return (
    <Grid
      container
      rowSpacing={5}
      ClassName="TemplatePaper"
      maxWidth={props.width ? "1185px" : "1080px"}
      sx={{
        border: "0",
        display: "flex",
        marginBottom: "20px",
      }}
      alignItems="center"
      flexWrap={props.wrap ? "wrap" : "wrap-reverse"}
      direction={props.reverse ? "row-reverse" : "row"}
      justifyContent={props.imgcentered ? "center" : "space-around"}
    >
      <Grid item>
        <Card
          elevation={0}
          sx={{
            alignItems: "center",
            minWidth: "320px",
            maxWidth: { xs: "320px", sm: "320px", md: "400px" },
            maxHeight: { xs: "100%", md: "80%", lg: 600 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            elevation={0}
            sx={{
              component: "img",
              border: "0",
              height: { xs: "225px", sm: "225px", lg: "350px", xl: "350px" },
              width: { xs: "225px", sm: "225px", lg: "350px", xl: "350px" },
              margin: "12px",
              marginTop: "0px",
              marginBottom: "16px",
              boxShadow: "9px 9px 6px grey",
              borderRadius: 12,
            }}
            image={props.img}
            alt="image-goes-here"
          />

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {props.buttonText && (
              <Button
                component={HashLink}
                to="/Contact"
                sx={{
                  width: { xs: "200px", sm: "200px", md: "200px", lg: "313px" },
                  height: { xs: "30px", sm: "30px", md: "30px", lg: "40px" },
                  marginBottom: "40px",
                  boxShadow: "5px 5px 5px grey",
                }}
                color="secondary"
                variant="contained"
                borderRadius="12"
                size="extraLarge"
                display="flex"
              >
                {props.buttonText}
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        {(props.CardContentHeaderFirstLine ||
          props.CardContentBody ||
          props.CardContentBodySentenceOne) && (
          <Card
            elevation={0}
            sx={{
              maxWidth: { xs: "320px", sm: "320px", md: "400px", lg: 700 },
              maxHeight: { xs: "100%", md: "80%", lg: 700 },

              alignSelf: "center",
              marginBottom: "25px",
              background: props.background ? "#eceff1" : null,
              boxShadow: props.background ? "9px 9px 6px grey" : null,
              borderRadius: props.background ? "12px" : null,
            }}
          >
            <CardContent>
              <Typography
                ClassName="CardHeaderText"
                sx={{
                  fontFamily: "Playfair Display",
                  fontWeight: props.boldHeader ? "600" : "400",
                  fontSize: "30px",
                  lineHeight: "30px",
                  textAlign: props.centerHeader ? "center" : "left",
                }}
              >
                {props.CardContentHeaderFirstLine}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: "95.7%",
                  paragraphSpacing: "28",
                  letterSpacing: "0",
                  fontSize: "24px",
                  marginTop: "10px",
                  minWidth: "510px",
                }}
                align="left"
              >
                {props.CardContentBody}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: "30px",
                  fontSize: "24px",
                  marginBottom: "20px",
                  textAlign: props.centerBodyOne ? "center" : "left",
                }}
              >
                {props.CardContentBodySentenceOne}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: "30px",
                  paragraphSpacing: "28",
                  letterSpacing: "0",
                  fontSize: "24px",
                  marginBottom: "20px",
                  textAlign: props.centerBodyTwo ? "center" : "left",
                }}
              >
                {props.CardContentBodySentenceTwo}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: "30px",
                  paragraphSpacing: "28",
                  letterSpacing: "0",
                  fontSize: "24px",
                  marginBottom: "20px",
                  textAlign: props.centerBodyThree ? "center" : "left",
                }}
                align="left"
              >
                {props.CardContentBodySentenceThree}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Grid>
    </Grid>
  );
}
