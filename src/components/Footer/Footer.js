import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:+57 3153180220">+57 3153180220</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="mailto:pgarciao2002@gmail.com">pgarciao2002@gmail.com</LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Innovating one project at a time</Slogan>
          </CompanyContainer>
          <SocialContainer>
          <SocialIcons href="https://github.com/Pablogarciao">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/pablo-garc%C3%ADa-480814226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/pablogarciao7/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
         </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
         
  );
};

export default Footer;
