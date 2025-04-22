import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import '../styles.css';

const totalLessons = 5;

const Home = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('loggedInUser');

  useEffect(() => {
    if (!username) {
      navigate('/');
    }
  }, [username, navigate]);

  if (!username) return null; // prevent render until redirect is handled

  const saved = parseInt(localStorage.getItem(`progress_${username}`), 10);
  const completedLessons = isNaN(saved) ? 0 : saved;
  const progress = Math.round((completedLessons / totalLessons) * 100);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Cyber Security Training</h1>
        <p>Empowering you to stay safe online</p>
      </header>

      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/start-training">Start Training</Link></li>
          <li><Link to="/view-tasks">View Tasks</Link></li>
          <li><Link to="/simulation-module">Simulation Module</Link></li>
          <li><Link to="/feedback-support">Feedback & Support</Link></li>
        </ul>
      </nav>

      <main className="main-content">
        <section className="intro-section">
          <h2>Welcome back, {username}!</h2>
          <p>Learn how to protect yourself and your organization from cyber threats.</p>
        </section>

        <section className="progress-section">
          <h3>Your Progress:</h3>
          <ProgressBar progress={progress} />
          <p>{progress}% complete</p>
        </section>
      </main>

      <footer className="footer">
        <ul className="footer-links">
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service">Terms of Service</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li>
            <button onClick={handleLogout} className="logout-btn">
              Log Out
            </button>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;