import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this portfolio is to show myself and my skills to the world. 
      </SectionText>
      <Button onClick={() => window.location = 'mailto:pgarciao2002@gmail.com'}>Learn More</Button>
    </LeftSection>
  </Section>
  
);

export default Hero;