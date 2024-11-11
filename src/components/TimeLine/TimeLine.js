import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
  ImageWrapper,
  StyledImageContainer,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";
import Image from "next/image";
//import { MdOutlinePedalBike } from 'react-icons/ai';
const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    //es para que el timeline se mueva suavemente en mobile
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault(); //esto evita que la pagina se recargue cada vez que se hace click

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    //esto es para que se active el punto del timeline que corresponde al texto que se esta viendo
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  return (
    <>
      <Section id="about">
        <SectionDivider />
        <br />
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          I am a Computer Science Ingeniering student at Universidad EIA. I am
          passionate about technology and I am always looking for new
          challenges. I am a very proactive person and I am always looking for
          new opportunities to learn and grow. I am a very responsible person
          and I always try to give my best in everything I do.
        </SectionText>
        <StyledImageContainer>
          <ImageWrapper>
            <Image
              src="/images/AnotherOne.png"
              alt="Profile"
              width={192}
              height={256}
              className="object-cover rounded-full"
              priority
            />
          </ImageWrapper>
        </StyledImageContainer>
        <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </CarouselContainer>
        <CarouselButtons>
          {TimeLineData.map((item, index) => (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button"
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          ))}
        </CarouselButtons>
        <SectionDivider />
      </Section>
      <Section id="hobbies">
        <SectionTitle>Hobbies</SectionTitle>
        <SectionText>
          I'm a very athletic person, I love riding bikes and going to the gym.
          I also love the agricultural sector and being out in the nature. I am
          a very social person and I love spending time with my friends and
          family.
          {/* <MdOutlinePedalBike size="3rem" /> */}
        </SectionText>
        <SectionDivider />
      </Section>
    </>
  );
};

export default Timeline;
