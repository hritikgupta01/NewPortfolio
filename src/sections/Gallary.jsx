import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/1Ac1.jpeg";
import img2 from "../assets/Images/1Ac2.jpeg";
import img3 from "../assets/Images/1Ac3.jpeg";
import img4 from "../assets/Images/1Ac4.jpeg";
import img5 from "../assets/Images/1Ac5.jpeg";
import img6 from "../assets/Images/1Ac6.jpeg";
import img7 from "../assets/Images/1Ac7.jpeg";
import img8 from "../assets/Images/1Ac9.jpeg";
import img9 from "../assets/Images/1Ac10.png";
import img10 from "../assets/Images/1Ac11.png";
import img11 from "../assets/Images/1Ac12.jpg";
import img12 from "../assets/Images/1Ac13.jpg";
import img13 from "../assets/Images/1Ac14.jpg";
import img14 from "../assets/Images/1Ac15.jpg";
import img15 from "../assets/Images/1Ac16.jpg";


const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: ${(props) => props.theme.grey};
  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Title2 = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 45%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    left: 35%;
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  position: absolute;
  right: 0; /* Change from 'left' to 'right' */
  padding-right: 30%; /* Change from 'padding-left' to 'padding-right' */
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 50rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    border: 5px solid black; /* You can adjust the width and color of the border */
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    padding: 5px;

  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 20rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = ""}) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src={img} alt={title} />
      
    </Item>
  );
};

// ... (previous imports)

// ... (previous imports)

const Gallary = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const Horizontalref = useRef(null);
  
    useLayoutEffect(() => {
      let element = ref.current;
      let scrollingElement = Horizontalref.current;
  
      let pinWrapWidth = scrollingElement.offsetWidth;
      let t1 = gsap.timeline();
  
      setTimeout(() => {
        t1.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: `${pinWrapWidth} bottom`,
            scroller: ".App", //locomotive-scroll
            scrub: 1,
            pin: true,
          },
          height: `${scrollingElement.scrollWidth}px`,
          ease: "none",
        });
  
        t1.to(scrollingElement, {
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: `${pinWrapWidth} bottom`,
            scroller: ".App", //locomotive-scroll
            scrub: 1,
          },
          x: `+${pinWrapWidth}px`, // Move scrolling element from right to left
          ease: "none",
        });
        
        ScrollTrigger.refresh();
      }, 1000);
  
      return () => {
        t1.kill();
        ScrollTrigger.kill();
      };
    }, []);
  
    return (
      <Section ref={ref} id="gallary" classname="gallary">
        <Title2 data-scroll data-scroll-speed="-1">
          Gallery
        </Title2>
        
        <Right data-scroll ref={Horizontalref}>
        <Product img={img1} title="Java" />
        <Product img={img2} title="Python" />
        <Product img={img3} title="SQL" />
        <Product img={img4} title="Artificial Intelligence" />
        <Product img={img5} title="Flask" />
        <Product img={img6} title="Django" />
        <Product img={img7} title="Machine Learning" />
        <Product img={img8} title="Data Analysis" />
        <Product img={img9} title="GIT Hub" />
        <Product img={img10} title="Deep Learning" />
        <Product img={img11} title="Deep Learning" />
        <Product img={img12} title="Deep Learning" />
        <Product img={img13} title="Deep Learning" />
        <Product img={img14} title="Deep Learning" />
        <Product img={img15} title="Deep Learning" />
        </Right>
      </Section>
    );
  };
  
  export default Gallary;
  