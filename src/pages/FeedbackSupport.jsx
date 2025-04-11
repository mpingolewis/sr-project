import React from "react";
import { Link } from "react-router-dom";

const FeedbackSupport = () => {
  return (
    <div className="container">
      <h1>Feedback & Support</h1>
      <p>We're here to help! Share your feedback or get support.</p>
      <Link to="/home" className="btn">Back to Home</Link> {/* Added link */}
    </div>
  );
};

export default FeedbackSupport;