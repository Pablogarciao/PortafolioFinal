import styled from "styled-components";

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px; // This ensures equal spacing between all grid items
  margin: 3rem auto;
  max-width: 1040px;
  position: relative;
  padding: 0; // Remove any default padding
  justify-content: center; // Center the grid items
  align-items: center; // Align items vertically

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 64px auto;
    padding: 0 20px;
    gap: 32px; // Slightly reduced gap for larger screens
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 64px auto;
    gap: 24px; // Further reduced gap for medium screens
    padding: 0 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px auto;
    padding: 0 16px;
    gap: 16px; // Minimal gap for mobile view
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    margin-left: 18px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  padding: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0; // Remove margin to let grid gap control spacing
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: -20px; // Half of the default gap
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 60px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      #13adc7 50%,
      transparent 100%
    );

    @media ${(props) => props.theme.breakpoints.md} {
      right: -12px; // Half of the medium screen gap
      height: 50px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      display: none;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 203px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 14px;
    max-width: 320px;
    flex-direction: row;
  }
`;

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;
