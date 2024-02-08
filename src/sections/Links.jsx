import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: blue; */
  position: relative;

@media (max-width: 48em){
  width: 90vw;
} 

`;

const Container = styled.div`
  min-height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em){
    justify-content: center;
}
`;

const Banner = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  font-family: 'Kaushan Script';
  color: ${(props) => props.theme.text};
  /* position: absolute; */
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 70em){
    font-size: ${(props) => props.theme.fontlg};
}
@media (max-width: 64em){
    margin: 1rem 0;
}
 
@media (max-width: 48em){
    font-size: ${(props) => props.theme.fontmd};
    margin: 0.5rem 0;

}
@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontsm};
}

  span {
    display: block;
    background-color: ${(props) => props.theme.body};

    padding: 1rem 2rem;
    
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
  left: 5%;
  z-index: 11;
  padding:5%;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Links = () => {
  return (
    <Section id="links">
       <Title2 data-scroll data-scroll-speed="-1">
          Links:
        </Title2>
      <Container id="direction" >
     
      
       
      
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
            data-scroll-target="#direction"
          >
            <a href='https://www.linkedin.com/in/hritik-gupta-ml'>Linkedin</a>
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1"
            data-scroll-target="#direction"
          >
           <a>Github</a>
          </span>
        </Banner><Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
            data-scroll-target="#direction"
          >
            <a>Leetcode</a>
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1"
            data-scroll-target="#direction"
          >
            <a>Geek for Geeks</a>
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
            data-scroll-target="#direction"
          >
            <a>Coding Ninjas</a>
          </span>
        </Banner>

        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4"
            data-scroll-target="#direction"
          >
            <a>Wikipedia</a>
          </span>
        </Banner>

      
     
      </Container>
    </Section>
  );
};

export default Links;
