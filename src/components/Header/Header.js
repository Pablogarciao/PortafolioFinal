import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";
import { IoBagRemoveSharp } from "react-icons/io5";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  ResumeSection,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <IoBagRemoveSharp size="3rem" />
          <span style={{ marginLeft: "0.5rem" }}>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <ResumeSection>
      <Link
        href="https://drive.google.com/file/d/1bNtyTrAfF8OKRdL1mSMYAYa7TDHV9mXi/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <a style={{ display: "flex", alignItems: "center" }}>
          <AiOutlineDownload size="2rem" />
          <span style={{ marginLeft: "0.5rem" }}>My Resume</span>
        </a>
      </Link>
    </ResumeSection>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#hobbies">
          <NavLink>Hobbies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#achievements">
          <NavLink>Achievements</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Pablogarciao">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/pablo-garc%C3%ADa-480814226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/pablogarciao7/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
