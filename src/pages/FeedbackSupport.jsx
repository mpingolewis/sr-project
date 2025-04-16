import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FeedbackSupport.css';

const FeedbackSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'General',
  });

  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      fileName: file ? file.name : 'No file uploaded',
    };

    console.log('📬 Feedback submitted:', submissionData);
    setSubmitted(true);
  };

  return (
    <div className="feedback-container">
      <h1>Feedback & Support</h1>
      <p>We'd love to hear from you. Please share your feedback or support questions below.</p>

      {submitted ? (
        <div className="thank-you">
          <h3>Thank you!</h3>
          <p>Your message has been received.</p>
        </div>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            Category
            <select name="category" value={formData.category} onChange={handleChange}>
              <option>General</option>
              <option>Technical Issue</option>
              <option>Suggestion</option>
              <option>Bug Report</option>
            </select>
          </label>

          <label>
            Message
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>

          <label>
            Upload a file (optional)
            <input type="file" onChange={handleFileChange} />
          </label>

          <div className="feedback-buttons">
            <Link to="/home" className="btn btn-home">Home</Link>
            <button type="submit" className="btn btn-submit">Send</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FeedbackSupport;
