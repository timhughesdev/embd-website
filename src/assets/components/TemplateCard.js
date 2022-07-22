/* Reusable layout for photos, buttons, words on a card or paper throughout the application */
import * as React from "react";
import {
  Card,
  Divider,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { grey } from "@mui/material/colors";

export default function TemplateCard(props) {
  //   console.log(props);
  return (
    <Paper
      ClassName="TemplatePaper"
      elevation={0}
      sx={{
        minWidth: "50%", //"1200px", // Play with sizing (100% is too wide)
        minHeight: "447px",
        border: "0",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        marginBottom: "20px",
        flexDirection: props.reverse ? "row-reverse" : "row", //conditional operator
      }}
    >
      {/* <Divider /> */}
      <Card
        elevation={0}
        sx={{
          maxWidth: 400,
          maxHeight: 600,
          display: "flex",
          flexDirection: "column",
          justifyContent: "spaceBetween",
          marginTop: "40px",
        }}
      >
        <CardMedia
          elevation={0}
          sx={{
            component: "img",
            border: "0",
            height: "350px",
            width: "350px",
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
              style={{
                minWidth: "313px",
                minHeight: "40px",
                marginBottom: "40px",
                boxShadow: "5px 5px 5px grey",
              }}
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

      {/* <Card
        elevation={0}
        sx={{
          maxWidth: 1000, // Had it set to 700, Made it wider for Wedding Dance package pricing.
          maxHeight: 475,
          flexBasis: "50%",
          alignSelf: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // background: props.background ? "#DEE2E9" : null, (MAKE ALL OF THE BELOW STYLING CONDITIONAL WITH PROPS.BACKGROUND)
          // marginBottom: "25px",
          // boxShadow: "9px 9px 6px grey",
          // borderRadius: "12px",
        }}
      > */}
      <Card
        elevation={0}
        sx={{
          maxWidth: 650,
          maxHeight: 550,
          flexBasis: "50%",
          alignSelf: "center",
          marginBottom: "25px",
          //(MAKE ALL OF THE BELOW STYLING CONDITIONAL WITH PROPS.BACKGROUND)
          background: props.background ? "#DEE2E9" : null,
          boxShadow: props.shadow ? "9px 9px 6px grey" : null,
          borderRadius: props.radius ? "12px" : null,
        }}
      >
        <CardContent>
          <Typography
            ClassName="CardHeaderText"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: props.boldHeader ? "600" : "400",
              fontSize: "32px",
              lineHeight: "20px",
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
            }}
            align="left"
          >
            {props.CardContentBody}
          </Typography>
          {/*  */}
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: "95.7%",
              paragraphSpacing: "28",
              letterSpacing: "0",
              fontSize: "24px",
              marginBottom: "20px",
              textAlign: props.centerBodyOne ? "center" : "left", //conditional
            }}
            // align="left"
          >
            {props.CardContentBodySentenceOne}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: "95.7%",
              paragraphSpacing: "28",
              letterSpacing: "0",
              fontSize: "24px",
              marginBottom: "20px",
              textAlign: props.centerBodyTwo ? "center" : "left", //conditional
            }}
          >
            {props.CardContentBodySentenceTwo}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: "95.7%",
              paragraphSpacing: "28",
              letterSpacing: "0",
              fontSize: "24px",
              marginBottom: "20px",
              textAlign: props.centerBodyThree ? "center" : "left", //conditional
            }}
            align="left"
          >
            {props.CardContentBodySentenceThree}
          </Typography>
        </CardContent>
      </Card>
      {props.children}
    </Paper>
  );
}
