import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import admin from "../../Assets/Projects/admin.png";
import creatorones from "../../Assets/Projects/creatorones.png";
import restaurant from "../../Assets/Projects/restaurant.png";
import amazon from "../../Assets/Projects/amazon.png";
import mytune from "../../Assets/Projects/mytune.png";
import travel from "../../Assets/Projects/travel.png";
import expense from "../../Assets/Projects/expensetracker.png";
import simlogical from "../../Assets/Projects/simlogical.png";


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
              imgPath={amazon}
              isBlog={false}
              title="Amazon-Clone"
              description="Amazon-clone is Ecommerce website in Reactjs. Libraries used stripe-API, and material-UI. For deploying the app used Firebase"
              ghLink="https://github.com/Ayman-Bilal/amazon-clone"
              demoLink="https://clone-e3e42.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense-Tracker"
              description="It is a simple expense tracker application in ReactJS. Used CSS-modules for styling the app.
              "
              ghLink="https://github.com/Ayman-Bilal/Expense-Tracker-Reactjs"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simlogical}
              isBlog={false}
              title="SimLogical"
              description="It is a web-based tool for designing and analyzing Digital Logic circuits. The Frontend is created in HTML, CSS, JavaScript, and jQuery. The backend is
              built in Django python.
              The primary deliverable of this project is that It can create truth-table and Boolean Expressions from Digital Logic Circuit."
              ghLink="https://github.com/Ayman-Bilal/SimLogical--DLD-Tool"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant Website"
              description="Front-End single page restaurant website in HTML. For styling used CSS"
              ghLink="https://github.com/Ayman-Bilal/Restaurant-website-frontend"
             // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="Ai For Social Good"
              description="Health panel layout in HTML. For styling used CSS and Bootstrap"
              ghLink="https://github.com/Ayman-Bilal/Admin-page-bootstrap"
               />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mytune}
              isBlog={false}
              title="myTunes"
              description="myTunes is a  front-end music website landing page. In this website CSS, and Bootstrap is used for styling."
               ghLink="https://github.com/Ayman-Bilal/MyTunes"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creatorones}
              isBlog={false}
              title="CreatorOnes"
              description="It is online Abaya store website. It is a front-end landing page in HTML. CSS is used for styling thr website."
                ghLink="https://github.com/Ayman-Bilal/product-landing-page"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travelling Website"
              description="Travelling webite in HTML.  For styling used Bootstrap."
               ghLink="https://github.com/Ayman-Bilal/Travelling-Website"
                 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
