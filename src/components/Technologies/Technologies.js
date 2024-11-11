import React from "react";
import { DiReact, DiPostgresql, DiDatabase } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked on a variety of university projects, ranging from front-end
      and back-end development to data extraction, transformation and analysys,
      as well as web scraping, cloud deployments and more. Troughout these
      projects, I've worked with a range of technologies in the field of
      Computer Science, such as PostgreSQL, Mongo, MySQL, Google Looker Studio,
      Docker, Knime, Pentaho, Databricks, AWS, NestJS, Next.js, Springboot,
      Java, Python, React, Javascript, Typescript, SQL and C++.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React and HTML/CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPostgresql size="3rem" />
        <ListContainer>
          <ListTitle>Data-Analysis</ListTitle>
          <ListParagraph>
            Experience with PostgreSQL, Google Looker Studio, Pentaho,
            Webscraping, Pandas abd Knime
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with NestJS and Springboot</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
