import React from "react";
import { Link } from "react-router-dom";

const SimulationModule = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>Simulation Module</h1>
        <p>Practice real-world cyber security scenarios.</p>
      </header>

      {/* Content Section */}
      <section className="content">
        <h2>Available Simulations</h2>
        <ul>
          <li><Link to="/phishing">Phishing Email Simulation</Link></li>
          <li><Link to="/password-cracking-simulation">Password Cracking Simulation</Link></li>
          <li>Network Intrusion Simulation</li>
        </ul>
        <Link to="/home" className="btn">Back to Home</Link>
      </section>
    </div>
  );
};

export default SimulationModule;
