import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  SectionLeft,
} from "../../styles/GlobalComponents";
import { StyledImageContainer, ImageWrapper } from "../TimeLine/TimeLineStyles";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Image from "next/image";

const Hero = (props) => (
  <Section>
    <SectionLeft>
      <StyledImageContainer>
        <ImageWrapper>
          <Image
            src="/images/ProfPic2.jpg"
            alt="Profile"
            width={192}
            height={256}
            className="object-cover rounded-full"
            priority
          />
        </ImageWrapper>
      </StyledImageContainer>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I'm Pablo García, a Computer Science Stundent from Medellín, Colombia.
          And with this Portfolio, I want to show myself and my skills to the
          world.
        </SectionText>
        <Button
          onClick={() => (window.location = "mailto:pgarciao2002@gmail.com")}
        >
          Learn More
        </Button>
      </LeftSection>
    </SectionLeft>
  </Section>
);

export default Hero;
