import React from 'react';
import { DiFirebase, DiReact, DiPostgresql } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked in a range of proyects in the university from Front-End to Data-Analysys with Webscrapping.  
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
    </List>
  </Section>
);

export default Technologies;
