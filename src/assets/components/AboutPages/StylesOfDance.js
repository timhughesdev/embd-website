import React from "react";
import { Box, Container, Paper, Grid } from "@mui/material";
import LatinDip from "../../images/latin-dip-image.png";
import TemplateCard from "../TemplateComponents/TemplateCard";
import TemplateTextCard from "../TemplateComponents/TemplateTextCard";

export default function StylesOfDance() {
  return (
    <React.Fragment>
      <Paper
        id="stylesofdance"
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "Center",
          marginTop: "20px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <TemplateCard
            img={LatinDip}
            CardContentBodySentenceOne="Evelyn Meinz Ballroom Dance teaches all styles of partnership dancing. From sophisticated to spicy we’ve got you covered!"
            reverse
            background
            shadow
            radius
            centerBodyOne
          />
        </Box>

        <Grid
          container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-around",
            maxWidth: "1080px",
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: { sm: "row", md: "column", lg: "row" },
              alignItems: "center",
              maxWidth: "900px",
            }}
          >
            <TemplateTextCard
              TextCardHeader="Social Styles"
              ListText={[
                "Salsa",
                "Tango",
                "Cha Cha",
                "Bachata",
                "Hustle",
                "Swing",
                "Country Western",
                "Merengue",
              ]}
              stylescard
            />
          </Grid>

          <TemplateTextCard
            TextCardHeader="International"
            ListText={[
              "Foxtrot",
              "Quickstep",
              "Viennese Waltz",
              "Slow Waltz",
              "Tango",
            ]}
            stylescard
          />

          <TemplateTextCard
            TextCardHeader="Latin"
            ListText={["Rumba", "Cha Cha", "Jive", "Paso Doble", "Samba"]}
            stylescard
          />

          <TemplateTextCard
            TextCardHeader="Smooth"
            ListText={[
              "Foxtrot",
              "Waltz",
              "Viennese Waltz",
              "Peabody",
              "Tango",
            ]}
            stylescard
          />

          <TemplateTextCard
            TextCardHeader="Rythm"
            ListText={["Rumba", "Cha Cha", "Swing", "Bolero", "Mambo"]}
            stylescard
          />
          {/* </Box> */}
        </Grid>
        <TemplateTextCard
          ListText={[
            "Not sure what dance style is right for you?",
            "Don't worry! Just Tell us your goals and we can help you pick the right dances to learn",
          ]}
          centered
          wrapped
        />
      </Paper>
    </React.Fragment>
  );
}
