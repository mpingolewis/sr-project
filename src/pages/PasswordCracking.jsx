import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const PasswordBox = styled.div`
  font-size: 2rem;
  color: #0f0;
  background: #111;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  letter-spacing: 0.2rem;
`;

const Attempts = styled.div`
  font-family: monospace;
  color: #aaa;
  margin-top: 1rem;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-top: 1rem;
  width: 100%;
  max-width: 400px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
`;

const CrackedTime = styled.p`
  color: #0f0;
  margin-top: 1rem;
  font-weight: bold;
`;

const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

const PasswordCrackingSimulator = () => {
  const [password, setPassword] = useState('');
  const [currentGuess, setCurrentGuess] = useState('');
  const [attempt, setAttempt] = useState('');
  const [index, setIndex] = useState(0);
  const [running, setRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [inputPassword, setInputPassword] = useState('');

  useEffect(() => {
    if (!running || index >= password.length) return;

    const interval = setInterval(() => {
      const randomChar = characters[Math.floor(Math.random() * characters.length)];
      setAttempt(prev => prev.slice(0, index) + randomChar);

      if (randomChar === password[index]) {
        setCurrentGuess(prev => prev + randomChar);
        setIndex(prev => prev + 1);
      }
    }, 75);

    return () => clearInterval(interval);
  }, [running, index, password]);

  useEffect(() => {
    if (index === password.length && running) {
      setRunning(false);
      setEndTime(Date.now());
    }
  }, [index, password.length, running]);

  const handleStart = () => {
    if (!inputPassword) {
      alert("Please enter a password to simulate cracking.");
      return;
    }

    setPassword(inputPassword);
    setCurrentGuess('');
    setAttempt('');
    setIndex(0);
    setStartTime(Date.now());
    setEndTime(null);
    setRunning(true);
  };

  const formatTime = (ms) => {
    const seconds = (ms / 1000).toFixed(2);
    return `${seconds} seconds`;
  };

  return (
    <Container>
      <h1>Password Cracking Simulation</h1>
      <p>Type a password and simulate a brute-force crack!</p>

      <Input
        type="text"
        placeholder="Enter password to crack"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        disabled={running}
      />

      <PasswordBox>{currentGuess}</PasswordBox>
      <Attempts>Guessing: {attempt}</Attempts>

      {endTime && (
        <CrackedTime>
          🕒 Cracked in {formatTime(endTime - startTime)}
        </CrackedTime>
      )}

      <div>
        {!running && (
          <Button onClick={handleStart}>Start Simulation</Button>
        )}
        <Button onClick={() => window.history.back()}>Back</Button>
      </div>
    </Container>
  );
};

export default PasswordCrackingSimulator;
