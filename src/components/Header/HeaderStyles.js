import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto; // Modified to make nav menu take remaining space
  padding: 1rem;
  padding-top: 2rem;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 0.5rem;
  }
`;

export const ResumeSection = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.5rem;
    transition: 0.3s ease;

    &:hover {
      color: #fff;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
    padding-left: 0;
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 0 2rem;

  li {
    list-style: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.8rem; // Slightly reduced from 2rem
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;

  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 1.6rem;
  }
`;

// Social Icons
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons
