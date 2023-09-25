import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import welcomeVendor from "../../Assets/Projects/welcomeVendor.png";

import accueil1 from "../../Assets/Projects/accueil1.png";
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
              
              isBlog={false}
              title="SAFE"
              description="I created microservices with Jhipster for a doubly encrypted document vault (using Apache Jackrabbit) and participated in the integration. I also contributed to a similar microservice using RabbitMQ, further enriching my experience in data security and microservices integration."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Teriak"
              description="Pharmaceutical management and sales platform using Spring Boot and Angular. My role included designing and developing this custom solution. This initiative significantly improved their operational efficiency and sales capability."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={welcomeVendor}
              isBlog={false}
              title="Vendor Real Estate"
              description="Real estate agency plateform that
              allows users to get in touch to buy,sell,rent make and find matching offers, and communicate
              through a forum or chat. We were at the end able to provide an automated and intelligent processes that facilitate advertisements and offers management in addition to legal and financial advice and meeting banking agents."
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="UneDeux"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accueil1}
              isBlog={false}
              title="Forminy"
              description="user interface development with Spring Boot and Angular, database management, in collaboration with agile teams, for an online learning platform primarily dedicated to government officials, adhering to best development practices and web security.
              "
              
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
