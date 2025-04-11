import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import './StartTraining.css';

const lessons = [
    "Lesson 1: Introduction to Cybersecurity",
    "Lesson 2: Recognizing Phishing Attacks",
    "Lesson 3: Password Security",
    "Lesson 4: Safe Browsing Practices",
    "Lesson 5: Responding to Cyber Threats"
];

const StartTraining = () => {
    const [currentLesson, setCurrentLesson] = useState(0);
    const progress = ((currentLesson + 1) / lessons.length) * 100;

    const handleNext = () => {
        if (currentLesson < lessons.length - 1) {
            setCurrentLesson(currentLesson + 1);
        }
    };

    return (
        <div className="training-container">
            <h1>Cybersecurity Awareness Training</h1>
            <ProgressBar progress={progress} />
            <div className="lesson-container">
                <h2>{lessons[currentLesson]}</h2>
                <p>Content for {lessons[currentLesson]}</p>
                <button onClick={handleNext} className="next-button">Next</button>
            </div>
        </div>
    );
};

export default StartTraining;
