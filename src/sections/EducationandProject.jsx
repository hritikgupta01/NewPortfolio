import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/p0.png";
import img2 from "../assets/Images/p1.png";
import img3 from "../assets/Images/p2.png";
import img4 from "../assets/Images/p3.png";
import img5 from "../assets/Images/p4.png";
import img6 from "../assets/Images/p5.png";
import img7 from "../assets/Images/p6.png";
import img8 from "../assets/Images/p7.png";
import img9 from "../assets/Images/p8.png";
import img10 from "../assets/Images/p9.png";
import img11 from "../assets/Images/p10.png";
import img12 from "../assets/Images/p11.png";
import img13 from "../assets/Images/p12.png";
import img14 from "../assets/Images/p13.png";


const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

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
  top: 0.7rem;
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
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  
  
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 0.7rem;
  left: 55%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
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
   width: 65%; 
  position: absolute;
  left: 15%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  
  width: 45rem;
   background-color: Red; 
  margin-right: 6rem;
  margin-top: 6rem;
    /* border: 1px solid #000;  1px solid black border */
    align-items: center;   
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    
    
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 25rem;
  }
  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
    padding:2%;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 70%;
    p {
      
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "",desc="",link=""}) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    > 
    <a href={link}>
      <img width="900" height="700" src={img} alt={title} />
      <h1>{title}</h1>
     
      <p>
         {desc}
          <br /> <br />
          link:- /{title}
        </p>
    </a>
      
    </Item>
  );
};

const EducationandProject = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
  
    const ScrollingRef = useRef(null);
  
  
    useLayoutEffect(() => {
      let element = ref.current;
  
      let scrollingElement = ScrollingRef.current;
  let t1= gsap.timeline();
      setTimeout(() => {
        let mainHeight = scrollingElement.scrollHeight;
        element.style.height = `calc(${mainHeight / 8}px)`;
        t1.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top top',
            end: 'bottom+=270% top-=200%',
            scroller: '.App', //locomotive-scroll
            scrub: 1,
            pin: true,
             //markers: true,
          },
          ease: 'none',
        });
  
        t1.fromTo(
          scrollingElement,
          {
            y: '0',
          },
          {
            y: '-100%',
            scrollTrigger: {
              // id: `section-${index + 1}`,
              trigger: scrollingElement,
              start: 'top top',
              end: 'bottom top',
              scroller: '.App',
              scrub: 1,
               //markers: true,
            },
          },
        );
  
        ScrollTrigger.refresh();
      }, 1000);
      ScrollTrigger.refresh();
  
      return () => {
        t1.kill();
        ScrollTrigger.kill();
      };
    }, []);

  return (
    <Section ref={ref} id="educationandproject" classname="educationandproject">
      <Title data-scroll data-scroll-speed="-1">
        Education
      </Title>
      <Left>
        <p>
        <h2>Bachelor of Technology</h2>
    <p>Noida Institute of Engineering and Technology, Greater Noida</p>
    <p>11/2020 - Present</p>
    <p>Artificial Intelligence</p>
    <p>Score: 8.54 CGPA</p>

    <h2>Intermediate </h2>
    <p>Bal Vidhalaya Madhyamic School, Varanasi</p>
    <p>PCM with Computer Science</p>
    <p>04/2019 - 05/2020</p>
    <p>Score: 85%</p>

    <h2>High School</h2>
    <p>Bal Vidhalaya Madhyamic School, Varansi</p>
    <p>04/2017 - 05/2018</p>
    <p>Score: 80%</p>
          
          
        </p>
      </Left>
      
      <Title2 data-scroll data-scroll-speed="-1">
          My Projects
        </Title2>
      <Right data-scroll ref={ScrollingRef}>
      
        <Product img={img3} title="Niet Calling Bot"  desc="Introducing the 'Calling Bot' revolutionizing parent-college communication! Powered by AI and ML, it seamlessly updates parents on their kids' 
        attendance. No more manual calls; it's efficient and reliable. This 
        groundbreaking project not only keeps parents informed but also eases the burden on 
        college admins. Embrace the future of education!" link="https://nietcallingbot.pythonanywhere.com/"/>
        
        <Product img={img4} title="Digit Generator GAN"  desc="Developed GANs using Python, OpenCV, TensorFlow, and Keras to generate digit 
        images for data augmentation, leading to a 20% improvement in model accuracy after 
        100,000 epochs on a 60,000-image MNIST digit dataset." link="https://hritikguptagan.pythonanywhere.com/"/>

        <Product img={img1} title="Online Trainable Model"  desc="Introducing an easy-to-use online model! 
        Just show an object, name it, and click 'train'. Powered by the KNN algorithm, this web tool learns instantly.
         Next time you show the same object, it recognizes it effortlessly.
         Simplify object recognition with this user-friendly software." link="https://onlinelearnmodelhg.netlify.app/"/>

        <Product img={img2} title="Gender Predictor"  desc="Check out our gender prediction model! It
         predicts based on names, simplifying form automation for 
        smoother operations. Boost efficiency effortlessly with this handy tool!" link="https://hritikgenderpredictor.pythonanywhere.com/"/>
        
        <Product img={img5} title="Trinity ML Website"  desc="Introducing Trinity, your ultimate machine learning learning space! Dive 
into our lab-based environment for hands-on experience. Plus, meet our smart bot, ready to tackle all your doubts.
 Explore, learn, and excel in the world of machine learning effortlessly on one platform." link="https://trinityforml.pythonanywhere.com/"/>

        <Product img={img6} title="Movie Recommendation System"  desc="Check out our new movie recommendation system! Built with Python,
         NLP, Flask, and Pythonanywhere, it's incredibly accurate at 92%. Users love it too, 
         with a 60% increase in retention. Enjoy personalized movie suggestions effortlessly with our 
         straightforward solution." link="https://hritik121.pythonanywhere.com/movie_recommend.hg"/>

        <Product img={img7} title="Body Part Detector for Education"  desc="Introducing our body part detector! It uses computer 
        vision to teach kids about their body parts in real-time. Simple, fun, and educational, 
        it's a great tool for young learners to explore and understand their bodies
         effortlessly." link=""/>

        <Product img={img8} title="Portfolio Creator Website"  desc="Create your own portfolio website effortlessly! Simply input your 
        details and watch as your portfolio gets deployed in real-time. It's that easy! Build your online 
        presence quickly and showcase your work with simplicity 
        using our intuitive platform." link="https://portfolioforyou.pythonanywhere.com/login"/>

        <Product img={img9} title="Chatting Website"  desc="Our chat app, powered by the dynamic MERN stack. With seamless navigation, 
        real-time messaging, collaborative groups, and top-notch privacy features, 
        it's a game-changer. Plus, our groundbreaking word filtering AI promotes positive interactions, ensuring a safe and 
        inclusive environment for all users." link=""/>

        <Product img={img10} title="Ball Bucket Game"  desc="Developed with Java, this simple yet addictive game challenges 
        players to catch falling balls into buckets. With intuitive controls and vibrant graphics, it's a perfect way to pass 
        the time and test your reflexes. " link=""/>

        <Product img={img11} title="Air Board"  desc="Write in the air and see your words appear instantly on screen. Perfect 
        for interactive classrooms, empowering educators and enhancing collaboration in workplaces. This game-changing 
        technology promises endless possibilities. " link="https://www.linkedin.com/posts/hritik-gupta-ml_innovation-education-technology-activity-7106960382862237696-0prZ?utm_source=share&utm_medium=member_desktop"/>

        <Product img={img12} title="PPt Changer using Hand Movement"  desc="Cool way to control presentation slides using hand movements. No more fumbling for remotes or clicking! Just wave your hand, and the slides move. It's 
        customizable and engaging, perfect for keeping audiences focused. " link="https://www.linkedin.com/posts/hritik-gupta-ml_exciting-revolutionary-computervision-activity-7053459128152637440-sYJj?utm_source=share&utm_medium=member_desktop"/>

        <Product img={img13} title="Snake Ladder Game"  desc="Have you successfully solved the Zigzag Traversal in Matrix problem on LeetCode? 
        If so, come and join me in creating a Snake and Ladder game. Here, you'll find a complete explanation of the Snake and 
        Ladder game, including both frontend and end-to-end project creation, along with code" link="https://www.linkedin.com/posts/hritik-gupta-ml_snake-and-ladders-game-end-to-end-development-activity-7108013284712194049-k-Ti?utm_source=share&utm_medium=member_desktop"/>

        <Product img={img14} title="Sudoku Solver Using Computer Vision"  desc="With the power of camera and computer vision, it effortlessly tackles Sudoku puzzles.
         Simply point your camera at the grid, and watch as it solves the puzzle in real-time." link="https://www.linkedin.com/posts/hritik-gupta-ml_arrevolution-opencvmagic-sudokusensation-activity-7111974609511456768-M_uf?utm_source=share&utm_medium=member_desktop"/>
      </Right>
     
    </Section>
  );
};

export default EducationandProject;
