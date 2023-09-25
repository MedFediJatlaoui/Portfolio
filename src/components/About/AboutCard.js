import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed Fedi Jatlaoui </span>
            from <span className="purple"> La Marsa,Tunisia.</span>
            <br /> I am a final year student pursuing Software Architecture Engineering
            <br />
            Additionally, I am currently freelancing as a software developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "It's not the destination, but the journey that matters."{" "}
          </p>
          <footer className="blockquote-footer">Ralph Waldo Emerson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
