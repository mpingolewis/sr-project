import React from 'react';
import { Link } from "react-router-dom";
import './Course.css';

const Course = () => {
  return (
    <><div className="course-page">
      <header className="course-header">
        <h1>Course Title</h1>
        <p>Instructor: John Doe</p>
      </header>
      <section className="course-description">
        <h2>Course Description</h2>
        <p>This course will teach you the fundamentals of web development using React. You will learn how to build dynamic and responsive web applications.</p>
      </section>
      <section className="course-content">
        <h2>Course Content</h2>
        <ul>
          <li>Chapter 1:Introduction to Cybersecurity</li>
          <li>Chapter 2: Social Engineering & Phishing Attacks</li>
          <li>Chapter 3: Password Security & Authentication</li>
          <li>Chapter 4:  </li>
          <li>Conditional Rendering</li>
          <li>Lists and Keys</li>
          <li>Forms</li>
          <li>Lifting State Up</li>
          <li>Composition vs Inheritance</li>
          <li>React Router</li>
        </ul>
      </section>
      <section className="course-enrollment">
        <h2>Enroll Now</h2>
        <button className="enroll-button">Enroll</button>
      </section>
    </div><div><Link to="/home" className="btn">Back to Home</Link> {/* Added link */}</div></>
   
  );
  
};

export default Course;