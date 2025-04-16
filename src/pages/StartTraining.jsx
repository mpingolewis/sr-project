import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import './StartTraining.css';

const lessons = [
  {
    title: "Lesson 1: Introduction to Cybersecurity",
    content: "Cybersecurity is the practice of protecting systems, networks, and data...",
    quiz: {
      question: "What is cybersecurity?",
      options: [
        "Protecting physical assets",
        "Using social media safely",
        "Protecting digital systems and data",
        "Updating software automatically"
      ],
      answer: "Protecting digital systems and data"
    }
  },
  {
    title: "Lesson 2: Recognizing Phishing Attacks",
    content: "Phishing attacks try to trick users into revealing sensitive info...",
    quiz: {
      question: "What is a sign of a phishing email?",
      options: [
        "Correct grammar",
        "Email from a friend",
        "Urgency and suspicious links",
        "Company logo is present"
      ],
      answer: "Urgency and suspicious links"
    }
  },
  {
    title: "Lesson 3: Password Security",
    content: "Always use strong, unique passwords. Consider a password manager.",
    quiz: {
      question: "Which password is most secure?",
      options: [
        "123456",
        "MyDog2023",
        "qT9!bL#2wX",
        "password"
      ],
      answer: "qT9!bL#2wX"
    }
  },
  {
    title: "Lesson 4: Safe Browsing Practices",
    content: "Use secure websites (https), avoid suspicious downloads...",
    quiz: {
      question: "What does HTTPS indicate?",
      options: [
        "A secure website connection",
        "A website is blocked",
        "An outdated browser",
        "A free Wi-Fi network"
      ],
      answer: "A secure website connection"
    }
  },
  {
    title: "Lesson 5: Responding to Cyber Threats",
    content: "Report suspicious emails, disconnect from suspicious networks...",
    quiz: {
      question: "What should you do if you receive a suspicious email?",
      options: [
        "Click the link to check it",
        "Forward it to friends",
        "Report it and delete it",
        "Reply asking for clarification"
      ],
      answer: "Report it and delete it"
    }
  }
];

const totalLessons = lessons.length;

const StartTraining = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("loggedInUser");
  const saved = parseInt(localStorage.getItem(`progress_${username}`), 10);

  const [currentLesson, setCurrentLesson] = useState(isNaN(saved) ? 0 : saved);
  const [completedLessons, setCompletedLessons] = useState(isNaN(saved) ? 0 : saved);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (!username) navigate('/');
    setShowQuiz(false);
    setSelectedOption('');
    setAnswered(false);
    setFeedback('');
  }, [currentLesson]);

  const handleNext = () => {
    if (!showQuiz) {
      setShowQuiz(true);
    } else if (answered) {
      const next = currentLesson + 1;

      if (next < totalLessons) {
        setCurrentLesson(next);
        setCompletedLessons(prev => Math.max(prev, next));
      } else if (currentLesson === totalLessons - 1) {
        // ✅ Only show Congrats after last quiz is completed
        setCompletedLessons(totalLessons);
        setShowCongrats(true);
      }

      setShowQuiz(false);
      setSelectedOption('');
      setAnswered(false);
      setFeedback('');
    }
  };

  const handleCheckAnswer = () => {
    if (!selectedOption) return;

    const correct = lessons[currentLesson].quiz.answer;
    if (selectedOption === correct) {
      setFeedback("✅ Correct!");
      setScore(prev => prev + 1);
    } else {
      setFeedback(`❌ Incorrect. Correct answer: ${correct}`);
    }

    setAnswered(true);
  };

  const handleSave = () => {
    localStorage.setItem(`progress_${username}`, completedLessons);
    alert("Progress saved!");
  };

  const handleBack = () => {
    if (currentLesson > 0 && currentLesson <= completedLessons) {
      setCurrentLesson(currentLesson - 1);
      setShowQuiz(false);
      setSelectedOption('');
      setAnswered(false);
      setFeedback('');
    }
  };

  const progress = Math.round((completedLessons / totalLessons) * 100);
  const { title, content, quiz } = lessons[currentLesson];

  if (showCongrats) {
    return (
      <div className="training-container">
        <h1>🎉 Congratulations!</h1>
        <p>You have completed all {totalLessons} lessons.</p>
        <p>Your final quiz score: {score}/{totalLessons}</p>
        <Link to="/home" className="btn btn-home">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="training-container">
      <h1>Cybersecurity Awareness Training</h1>
      <ProgressBar progress={progress} />

      {!showQuiz ? (
        <div className="lesson-card">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      ) : (
        <div className="quiz-card">
          <h3>Quiz: {quiz.question}</h3>
          <ul className="quiz-options">
            {quiz.options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="quiz"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                    disabled={answered}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          {feedback && <p className="quiz-feedback">{feedback}</p>}
        </div>
      )}

      <div className="training-buttons">
        <button
          className="btn btn-back"
          onClick={handleBack}
          disabled={currentLesson === 0 || currentLesson > completedLessons}
        >
          Back
        </button>

        <Link to="/home" className="btn btn-home">Home</Link>
        <button onClick={handleSave} className="btn btn-save">Save</button>

        {!showQuiz ? (
          <button onClick={handleNext} className="btn btn-next">Take Quiz</button>
        ) : !answered ? (
          <button onClick={handleCheckAnswer} className="btn btn-next" disabled={!selectedOption}>
            Check Answer
          </button>
        ) : (
          <button onClick={handleNext} className="btn btn-next">
            {currentLesson === totalLessons - 1 ? "Finish" : "Next Lesson"}
          </button>
        )}
      </div>
    </div>
  );
};

export default StartTraining;
