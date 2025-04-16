import React from "react";
import { Link } from "react-router-dom";

const TrackProgress = () => {
  const progress = 60; // Progress percentage

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>Track Progress</h1>
        <p>Monitor your progress in the cyber security training program.</p>
      </header>

      {/* Content Section */}
      <section className="content">
        <h2>Progress Overview</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p>You have completed {progress}% of the training.</p>
        <Link to="/home" className="btn">Back to Home</Link>
      </section>
    </div>
  );
};

export default TrackProgress;
