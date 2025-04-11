import React from 'react';
import ProgressBar from '../components/ProgressBar';
import '../styles.css';

const ViewTasks = ({ progress }) => {
    return (
        <div className="tasks-container">
            <h1>Your Tasks</h1>
            <ProgressBar progress={progress} />
            <p>Complete your tasks to improve your cybersecurity awareness.</p>
        </div>
    );
};

export default ViewTasks;
