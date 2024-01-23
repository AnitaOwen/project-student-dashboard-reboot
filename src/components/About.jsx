import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const About = () => {
  return (
    <div className="About-container">
      <h2>About</h2>
      <body>
        <div id="about">
          <h4>About</h4>
          <ul className="socials">
            <li>
              <strong>Armando Pires</strong>
              <br />
              GitHub:{" "}
              <a
                href="https://github.com/ArmandoPires103"
                target="_blank"
                rel=""
              >
                https://github.com/ArmandoPires103
              </a>
              <br />
              Fun Fact: Visited 7 national parks.
            </li>
            <li>
              <strong>Anita Owen</strong>
              <br />
              GitHub:{" "}
              <a href="https://github.com/AnitaOwen" target="_blank" rel="">
                https://github.com/AnitaOwen
              </a>
              <br />
              Fun Fact:
            </li>
            <li>
              <strong>Jazon Younge</strong>
              <br />
              GitHub:{" "}
              <a href="https://github.com/JayZ44" target="_blank" rel="">
                https://github.com/JayZ44
              </a>
              <br />
              Fun Fact: I can draw pretty good :D
            </li>
          </ul>
        </div>
      </body>
    </div>
  );
};

export default About;
