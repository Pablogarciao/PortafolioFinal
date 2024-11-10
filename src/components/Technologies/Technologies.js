import React from 'react';
import { DiReact, DiPostgresql, TbBrandCpp } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked in a range of proyects in the university from Front-End, Backend to Data-Analysys with Webscrapping. Within the projects I've worked with a range of technologies in the field of Computer Science, such as React, PostgreSQL, Mongo, MySQL, Google Looker Studio, Docker, AWS, NestJS, Next.js, Springboot, Java, Python, Javascript, Typescript, SQL, C++.  
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
          <ListTitle>Data-Analysys</ListTitle>
          <ListParagraph>
            Experience with <br />
            PostgreSQL and Google Looker Studio
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <TbBrandCpp size="3rem" /> */}
        <ListContainer>
          <ListTitle>ICPC</ListTitle>
          <ListParagraph>
            Experience in <br />
            some ICPC contests around the city
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
