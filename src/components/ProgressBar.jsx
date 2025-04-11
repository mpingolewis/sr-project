import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <section className="progress-section">
      <div className="progress-info">
        <p>Your Progress:</p>
        <p className="progress-value">{progress}%</p>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </section>
  );
};

export default ProgressBar;