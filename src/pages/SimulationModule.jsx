import React from "react";
import { Link } from "react-router-dom";
import "./SimulationModule.css"; // (we'll add this)

const SimulationModule = () => {
  return (
    <div className="simulation-container">
      {/* Header */}
      <header className="simulation-header">
        <h1>Simulation Module</h1>
        <p>Test your cybersecurity skills with real-world scenarios!</p>
      </header>

      {/* Available Simulations */}
      <section className="simulation-cards">
        <div className="simulation-card">
          <h3>Phishing Email Simulation</h3>
          <p>Identify phishing emails and protect your information.</p>
          <Link to="/phishing" className="btn-primary">Start Simulation</Link>
        </div>

        <div className="simulation-card">
          <h3>Password Cracking Simulation</h3>
          <p>See how weak passwords are cracked in real-time attacks.</p>
          <Link to="/password-cracking" className="btn-primary">Start Simulation</Link>
        </div>

        <div className="simulation-card">
          <h3>Virus Spread Simulation</h3>
          <p>A virus spread simulation that visually shows how a computer virus might infect other machines on a network.</p>
          <Link to="/virus-spread-simulation" className="btn-primary">Start Simulation</Link>
        </div>
      </section>

      {/* Back Button */}
      <div className="back-btn-container">
        <Link to="/home" className="btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default SimulationModule;