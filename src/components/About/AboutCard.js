import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayman Ayub </span>
            from <span className="purple"> Wah Cantt, Pakistan.</span>
            <br />I am a junior Front-End Web Developer.
            <br />
            <br />
            I did my <span className="purple">Bachelor's in Computer Science</span> from <br/>
            <span className="purple">" Fatima Jinnah Women University, The Mall, Rawalpindi " </span>
          </p>
          
           

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
