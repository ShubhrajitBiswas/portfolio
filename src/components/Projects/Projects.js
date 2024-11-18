import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tictac from "../../Assets/Projects/tictac.png";
import randomPassImg1 from "../../Assets/Projects/randomPassImg1.png";

import algovisionProjectImg from "../../Assets/Projects/algovisionProjectImg.png"
import Crypto from "../../Assets/Projects/Crypto.png";
import weather from "../../Assets/Projects/weather.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={algovisionProjectImg}
    isBlog={false}
    title="AlgoVision"
    description="Built an interactive web app for visualizing algorithms, making complex concepts in sorting, searching, and pathfinding more accessible. Includes personalized recommendations and insights into time and space complexity."
    ghLink="https://github.com/ShubhrajitBiswas/AlgoVision"
    demoLink="https://algovision.vercel.app/"
  />
</Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crypto}
              isBlog={false}
              title="CRYPTOCURRENCY"
              description="Developed a responsive cryptocurrency dashboard that fetches and displays real-time prices for popular coins like Bitcoin, Ethereum, Dogecoin, and Solana, with an interactive and user-friendly interface for seamless navigation."
              ghLink="https://github.com/ShubhrajitBiswas/CryptoCurrency-Price"
              demoLink="https://shubhrajitbiswas.github.io/CryptoCurrency-Price/"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomPassImg1}
              isBlog={false}
              title="RANDOM PASSWORD GENERATOR"
              description="•	One can set constraints to generate the password like including uppercase letters, lowercase letters, Numbers and Symbols.
•	One can also set the length of the password to generate and we can also get to know whether the generated password is strong or weak.
"
              ghLink="https://github.com/ShubhrajitBiswas/Random_Password_Generator"
              demoLink=" https://shubhrajitbiswas.github.io/Random_Password_Generator/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-forecast"
              description="Developed a dynamic weather app that displays real-time temperature, humidity, wind speed, and weather icons for any city using the OpenWeather API."
              ghLink="https://github.com/ShubhrajitBiswas/Weather-Forecast"
              demoLink="https://shubhrajitbiswas.github.io/Weather-Forecast/"
              
            />
          </Col>
          {/*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parallaxImg}
              isBlog={false}
              title="Parallax Effect"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/monk0707/parallax-effect"
              demoLink="https://monk0707.github.io/parallax-effect/"
        
            />
            
          </Col>
          */}
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="TicTacToe"
              description="TicTacToe is a modern take on the classic Tic Tac Toe game, crafted with JavaScript and styled with Tailwind CSS for a sleek and responsive design. This game offers a delightful user experience with smooth animations, intuitive gameplay, and a minimalist interface. Whether you're playing against a friend or challenging the computer, TicTacTwist provides a fun and engaging way to enjoy this timeless game, all from the convenience of your web browser. Dive into a world where strategy meets style, and see if you can outsmart your opponent in this reimagined classic!"
              ghLink="https://github.com/ShubhrajitBiswas/tic-tac-toe-"
              demoLink="https://shubhrajitbiswas.github.io/tic-tac-toe-/"      
      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
