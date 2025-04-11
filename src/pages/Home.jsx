import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css";
import { useTrainingContext } from "../hooks/useTrainingContext.js";
import ProgressBar from "../components/ProgressBar"; // Import the ProgressBar component

const Home = () => {
  const navigate = useNavigate();
  const ctx = useTrainingContext();
  console.log("🧪 Context inside Home:", ctx); // <== Add this line

  const { completedLessons = 0, totalLessons = 1 } = ctx || {};

  const progress = totalLessons
    ? ((completedLessons / totalLessons) * 100).toFixed(0)
    : 0;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Cyber Security Training</h1>
        <p>Empowering you to stay safe online</p>
      </header>

      <nav className="navigation">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/start-training">Start Training</Link></li>
          <li><Link to="/view-tasks">View Tasks</Link></li>
          <li><Link to="/track-progress">Track Progress</Link></li>
          <li><Link to="/simulation-module">Simulation Module</Link></li>
          <li><Link to="/feedback-support">Feedback & Support</Link></li>
        </ul>
      </nav>

      <main className="main-content">
        <section className="intro-section">
          <h2>Welcome to Cyber Security Training</h2>
          <p>Learn how to protect yourself and your organization from cyber threats.</p>
        </section>

        <section className="progress-section">
          <h3>Your Progress:</h3>
          <ProgressBar progress={progress} /> {/* Add the ProgressBar component */}
          <p>{progress}%</p>
        </section>
      </main>

      <footer className="footer">
        <ul>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service">Terms of Service</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li>
            <button onClick={handleLogout} className="logout-btn">Log Out</button>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
