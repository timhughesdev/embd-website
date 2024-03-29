import React from "react";
import { Box } from "@mui/material";
import TemplateCard from "../TemplateComponents/TemplateCard";
import TemplateTextCard from "../TemplateComponents/TemplateTextCard";
import UnderArmTurn from "../../images/Couple-dance-image.png";

export default function SocialDancing() {
  return (
    <React.Fragment>
      <Box
        id="socialdance"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TemplateCard
          img={UnderArmTurn}
          buttonText="Learn More"
          CardContentHeaderFirstLine="Social Dance"
          CardContentBodySentenceOne="At our group classes, your fellow dancers might start as strangers, but they’ll soon be friends. Meeting at the “x-studio”, our group classes are high energy, low stress and, most of all, fun! By learning to lead and follow from numerous different dancers, you’ll gain the real world experience that only comes from dancing with a variety of partners. While the different types of dance all have prescribed moves and routines, within those patterns there is an infinite amount of individuality and creativity; much like fine dining, the only way to know what you like is by trying everything at least once!"
          CardContentBodySentenceTwo="Group classes are limited in size, so please call or text us today to save your spot!"
          boldHeader={true}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TemplateTextCard
          TextCardHeader="Our Current class schedule is as follows:"
          ListText={[
            "Wednesday: 6:00pm Beginner County Western 2-Step",
            "Wednesday: 6:45 Intro to Swing",
            "Wednesday: 7:30pm Beginner Argentine Tango",
            "Thursday: 6:00pm Level 1 Ballroom",
            "Thursday: 7:30pm Level 1 Salsa",
            "Friday: 6:00pm Beginner Salsa",
            "Friday: 6:45pm Beginner Ballroom",
          ]}
          wrapped
        />

        <TemplateTextCard
          ListText={[
            "Attire: Dress shoes with leather soles, dance shoes, or if you don't have either of those, shoes that won't slide off of your feet",
            "Pricing: $200.00 per person, per class, or purchase a package of 10 classes for $1000",
            "Location: SR municipal area",
            "RSVP: Meetup.com/embd or",
            "Call: 123-456-7890",
          ]}
          centered={true}
          wrapped
        />
      </Box>
    </React.Fragment>
  );
}
