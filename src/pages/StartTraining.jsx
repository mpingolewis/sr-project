import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import './StartTraining.css';

const lessons = [
  {
    title: "Lesson 1: Introduction to Cybersecurity",
    content: "Cybersecurity involves protecting computer systems, networks, and data from unauthorized access, attacks, and damage. Cybersecurity is essential for protecting personal and organizational data from cyber threats. It involves safeguarding systems, networks, and sensitive information from attacks such as malware, phishing, and ransomware. Cybersecurity is crucial for protecting personal and business data in an increasingly digital world. It ensures that sensitive information remains secure and that systems, networks, and devices are safeguarded from malicious attacks. Common cyber threats, such as malware, phishing, and ransomware, pose significant risks to both individuals and organizations. Malware can infect systems, phishing attempts deceive users into disclosing confidential data, and ransomware holds data hostage until a ransom is paid. Real-world cybersecurity incidents, such as high-profile data breaches and cyberattacks, have shown the severe financial, reputational, and operational impacts they can have, highlighting the importance of proactive cybersecurity measures." ,
    examples: "Examples: Firewalls, antivirus software, encryption, multi-factor authentication.",
    keyTakeaways: [
      "Cybersecurity protects confidentiality, integrity, and availability.",
      "It includes preventive, detective, and responsive security practices."
    ],
    checkpoint: {
      question: "Cybersecurity only protects against hackers. True or False?",
      answer: "False"
    },
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
    content: "Phishing attacks try to trick users into revealing sensitive information. Learn how to recognize phishing attempts, fake websites, and common social engineering tactics. Best practices for identifying suspicious communications are also discussed. Social engineering and phishing attacks exploit human psychology to manipulate individuals into disclosing sensitive information. These attacks are often disguised as legitimate requests through emails, phone calls, or websites. Recognizing common tactics—like fake emails, fraudulent websites, and suspicious attachments—is crucial. Best practices for avoiding these threats include verifying the source of any communication and using multi-factor authentication to add an extra layer of security.",
    examples: "Examples: Fake emails asking for passwords, urgent text messages pretending to be your bank.",
    keyTakeaways: [
      "Always verify links before clicking.",
      "Look for red flags like urgency, misspellings, and unfamiliar sender addresses."
    ],
    checkpoint: {
      question: "You should click on any link sent by your bank immediately. True or False?",
      answer: "False"
    },
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
    content: "Strong passwords are critical. Use a mix of letters, numbers, and symbols. Emphasizes the importance of strong passwords, the use of password managers, and multi-factor authentication to protect sensitive data from unauthorized access. Strong passwords are one of the first lines of defense against unauthorized access to systems and accounts. This chapter emphasizes the importance of creating complex passwords and avoiding password reuse. It also introduces the concept of password managers to securely store and generate unique passwords. Multi-factor authentication (MFA) adds an additional level of security by requiring a second form of verification, significantly reducing the risk of unauthorized access.",
    examples: "Examples: 'qT9!bL#2wX' is strong. 'password' is weak.",
    keyTakeaways: [
      "Never reuse passwords across accounts.",
      "Consider using a password manager."
    ],
    checkpoint: {
      question: "Using '123456' as your password is a good idea. True or False?",
      answer: "False"
    },
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
    content: "Use HTTPS websites and avoid suspicious downloads.  Tips on identifying secure websites, avoiding malicious pop-ups, and safe internet practices to avoid common web-based threats. Safe browsing practices help protect against online threats such as malicious websites, pop-up ads, and harmful downloads. This chapter provides tips for identifying secure websites, such as checking for HTTPS encryption and looking for valid SSL certificates. It also discusses the risks associated with clicking on suspicious links and downloading unverified software, encouraging users to stay vigilant when surfing the web.",
    examples: "Examples: 'https://example.com' is safer than 'http://example.com'.",
    keyTakeaways: [
      "Always check for a padlock icon before entering sensitive information.",
      "Avoid downloading files from unknown sources."
    ],
    checkpoint: {
      question: "HTTP websites are secure for transactions. True or False?",
      answer: "False"
    },
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
    content: "Be prepared to respond quickly to security incidents. Learn the importance of locking your device, handling sensitive information securely, and using a VPN to protect work data, especially when working remotely. This chapter focuses on the importance of securing work-related data and devices. It covers practices like locking devices when stepping away from them, using encrypted storage for sensitive files, and keeping software up-to-date to patch security vulnerabilities. For remote workers, it stresses the need for using virtual private networks (VPNs) to secure internet connections and protect company data from potential hackers.",
    examples: "Examples: Reporting phishing emails, disconnecting from suspicious Wi-Fi.",
    keyTakeaways: [
      "Report suspicious activities immediately.",
      "Disconnect from compromised networks."
    ],
    checkpoint: {
      question: "Ignoring a suspicious email is the best way to respond. True or False?",
      answer: "False"
    },
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
  const [showExamples, setShowExamples] = useState(false);
  const [showKeyTakeaways, setShowKeyTakeaways] = useState(false);
  const [checkpointAnswered, setCheckpointAnswered] = useState(false);
  const [checkpointCorrect, setCheckpointCorrect] = useState(null);
  const [checkpointInput, setCheckpointInput] = useState('');

  useEffect(() => {
    if (!username) navigate('/');
    setShowQuiz(false);
    setSelectedOption('');
    setAnswered(false);
    setFeedback('');
    setCheckpointAnswered(false);
    setCheckpointCorrect(null);
    setCheckpointInput('');
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
        setCompletedLessons(totalLessons);
        setShowCongrats(true);
      }
      setShowQuiz(false);
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

  const handleCheckpoint = () => {
    const correct = lessons[currentLesson].checkpoint.answer.toLowerCase();
    if (checkpointInput.toLowerCase() === correct) {
      setCheckpointCorrect(true);
    } else {
      setCheckpointCorrect(false);
    }
    setCheckpointAnswered(true);
  };

  const handleSave = () => {
    localStorage.setItem(`progress_${username}`, completedLessons);
    alert("Progress saved!");
  };

  const handleBack = () => {
    if (currentLesson > 0 && currentLesson <= completedLessons) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const progress = Math.round((completedLessons / totalLessons) * 100);
  const { title, content, examples, keyTakeaways, checkpoint, quiz } = lessons[currentLesson];

  if (showCongrats) {
    return (
      <div className="training-container">
        <h1>🎉 Congratulations!</h1>
        <p>You completed all {totalLessons} lessons!</p>
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

          <button className="btn btn-toggle" onClick={() => setShowExamples(!showExamples)}>
            {showExamples ? "Hide Examples" : "Show Examples"}
          </button>
          {showExamples && <p className="lesson-examples">{examples}</p>}

          <button className="btn btn-toggle" onClick={() => setShowKeyTakeaways(!showKeyTakeaways)}>
            {showKeyTakeaways ? "Hide Key Takeaways" : "Show Key Takeaways"}
          </button>
          {showKeyTakeaways && (
            <ul className="lesson-takeaways">
              {keyTakeaways.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}

          <div className="lesson-checkpoint">
            <h4>Checkpoint: {checkpoint.question}</h4>
            <input
              type="text"
              value={checkpointInput}
              onChange={(e) => setCheckpointInput(e.target.value)}
              disabled={checkpointAnswered}
            />
            <button onClick={handleCheckpoint} disabled={checkpointAnswered} className="btn btn-next">Submit</button>
            {checkpointAnswered && (
              <p className="checkpoint-feedback">
                {checkpointCorrect ? "✅ Correct! Good job." : "❌ Oops! Review the lesson and try again."}
              </p>
            )}
          </div>

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
          disabled={currentLesson === 0}
        >
          Back
        </button>

        <Link to="/home" className="btn btn-home">Home</Link>
        <button onClick={handleSave} className="btn btn-save">Save</button>

        {!showQuiz ? (
          <button onClick={handleNext} className="btn btn-next" disabled={!checkpointAnswered || !checkpointCorrect}>
            {"Take Quiz"}
          </button>
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