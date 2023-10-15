// src/components/Skills/Skills.js
import React from 'react';
import './Skills.css'; // Import the CSS file for Skills component
import { FaC, FaPython, FaJava } from 'react-icons/fa';

const Skills = () => {
  const programmingLanguages = ["Java", "Python", "SQL"];
  const webTools = ["HTML", "CSS", "JavaScript","Bootstrap","React Js"];
  const techTools=["Java","XML","Android studio"]
  const webback = ["NodeJS","ExpressJs","Mysql","MongoDB","PHP"]

  return (
    <section id="skills">
        <h1 className='h-skills'>Skills</h1>
        <p>Here are the skills that I have familiarized over the past three years</p>
      
      <div className="skills-container">
        <div className="box">
          <h2>Programming Languages</h2>
          <ul>
            {programmingLanguages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
          <h2>Android development</h2>
          <ul>
            {techTools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>

        <div className="box">
        <h2>Web dev - Frontend </h2>
          <ul>
            {webTools.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
          <h2>Web dev - Backend </h2>
          <ul>
            {webback.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
