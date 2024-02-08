import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/cer1.png";
import img2 from "../assets/Images/cer2.png";
import img3 from "../assets/Images/cer3.png";
import img4 from "../assets/Images/cer4.png";
import img5 from "../assets/Images/cer5.png";
import img6 from "../assets/Images/cer6.png";
import img7 from "../assets/Images/cer7.png";
import img8 from "../assets/Images/cer8.png";
import img9 from "../assets/Images/cer9.png";
import img10 from "../assets/Images/cer10.png";
import img11 from "../assets/Images/cer11.png";
import img12 from "../assets/Images/cer12.png";
import img13 from "../assets/Images/cer13.png";
import img14 from "../assets/Images/cer14.png";
import img15 from "../assets/Images/cer15.png";

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

  background-color: ${(props) => props.theme.body};
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
  color: ${(props) => props.theme.text};
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
  /* width: 65%; */
  position: absolute;
  
  padding-left: 30%;
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;

  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 35rem;
  
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    border: 5px solid white; /* Adjust border width and color */
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.5); /* Adjust shadow offset, blur radius, and color */
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
      <img width="600" height="400" src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Certificates = () => {
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
          // markers: true,
          // anticipatePin: 1,
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
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="certificates" classname="certificates">
      
      <Title2 data-scroll data-scroll-speed="-1">
          Certificates
        </Title2>
      <Right data-scroll ref={Horizontalref}>
      
        <Product img={img3} title="Machine Learning With Python" />
        <Product img={img4} title="Getting Started with Ai using IBM Watson" />
        <Product img={img1} title="Blockchain Platforms" />
        <Product img={img2} title="Java Built in DataStructures" />
        <Product img={img5} title="Cryptography" />
        <Product img={img6} title="Build a Machine Learning Image Classifier with Python" />
        <Product img={img7} title="Blockchain Basics" />
        <Product img={img8} title="Coding Ninjas Specialist" />
        <Product img={img9} title="Interview Guide for Product Based Companies" />
        <Product img={img10} title="Oracle Certified Associate" />
        <Product img={img11} title="Java (Basic)" />
        <Product img={img12} title="Proublem Solving (Basic)" />
        <Product img={img13} title="Python (Basic)" />
        <Product img={img14} title="Deep Neural Networks with PyTorch" />
        <Product img={img15} title="Introduction to Computer Vision and Image Processing" />
      </Right>
    </Section>
  );
};

export default Certificates;
