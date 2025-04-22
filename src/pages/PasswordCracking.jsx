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
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
`;

const PasswordCrackingSimulator = () => {
  const password = "P@ssw0rd!";
  const [current, setCurrent] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < password.length) {
      const timer = setTimeout(() => {
        setCurrent(prev => prev + password[index]);
        setIndex(prev => prev + 1);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [index, password]);

  return (
    <Container>
      <h1>Password Cracking Simulation</h1>
      <PasswordBox>{current}</PasswordBox>
      <Button onClick={() => window.history.back()}>Back</Button>
    </Container>
  );
};

export default PasswordCrackingSimulator;