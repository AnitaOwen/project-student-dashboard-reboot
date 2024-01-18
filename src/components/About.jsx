import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const About = () => {
  // const navigate = useNavigate()

  // const handleAboutButtonClick = () => {
  //   navigate('/footer')
  // }
  return (
    <div>
      <h1>About</h1>
      <body>
    <footer id='footer'>
      <div id="about">
        <h4>About</h4>
        <ul className='socials'>
          <li>
            <strong>Armando Pires</strong>
            <br />
            GitHub: <a href="https://github.com/ArmandoPires103" target="_blank" rel="">https://github.com/ArmandoPires103</a>
            <br />
            Fun Fact: Can solve a Rubik's Cube in under a minute!
          </li>
          <li>
            <strong>Anita Owen</strong>
            <br />
            GitHub: <a href="https://github.com/AnitaOwen" target="_blank" rel="">https://github.com/AnitaOwen</a>
            <br />
            Fun Fact: 
          </li>
          <li>
            <strong>Jazon Younge</strong>
            <br />
            GitHub: <a href="https://github.com/JayZ44" target="_blank" rel="">https://github.com/JayZ44</a>
            <br />
            Fun Fact: 
          </li>
          
        </ul>
      </div>
    </footer>
    </body>
    </div>
  );
};

export default About;
