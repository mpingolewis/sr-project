import React from 'react';
import { Link } from "react-router-dom";
import './ViewTasks.css';

const ViewTasks = () => {
  return (
    <><div className="course-page">
      <header className="course-header">
        <h1>CyberSecurity Training Awareness: Courses</h1>
      </header>
      
      <section className="course-content">
        <h2>Course Content</h2>
        <ul>
          <li>Chapter 1: Introduction to Cybersecurity</li>
          <li>Chapter 2: Social Engineering & Phishing Attacks</li>
          <li>Chapter 3: Password Security & Authentication</li>
          <li>Chapter 4: Safe Browsing & Internet Usage</li>
          <li>Chapter 5: Secure Work Practices</li>
          <li>Chapter 6: Malware & Ransomware Prevention</li>
          <li>Chapter 7: Secure Use of Email & Messaging</li>
          <li>Chapter 8: Insider Threats & Data Protection</li>
        </ul>
      </section>
      <section className="course-enrollment">
        <h2>Start Training</h2>
        <Link to="/start-training">
        <button className="enroll-button">Start Training</button>
        </Link>
      </section>
    </div><div><Link to="/home" className="btn">Back to Home</Link> {/* Added link */}</div></>
   
  );
  
};

export default ViewTasks;
  