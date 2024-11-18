import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubhrajit Biswas </span>
            from <span className="purple"> Agartala, India.</span>
            <br />
            I am currently pursuing my B.Tech in Computer Science from Jaypee University of 
            Engineering & Technology,Guna (2022-2026)
            <br />

            <br />
            <br />
            Apart from writing code, here are a few things I absolutely love to dive into:
          </p>
          <ul>
            <li className="about-activity">
            🎮 Gaming
            </li>
            <li className="about-activity">
            🎬 Binge-watching Movies & Series
            </li>
            <li className="about-activity">
            🌍 Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Chase excellence, the impact will follow."{" "}
          </p>
          <footer className="blockquote-footer">Shubhrajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
