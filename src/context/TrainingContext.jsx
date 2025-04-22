// src/context/TrainingContext.jsx
import { createContext, useState } from 'react';

const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
  const totalLessons = 5;
  const saved = parseInt(localStorage.getItem('completedLessons'), 10);
  const [completedLessons, setCompletedLessons] = useState(isNaN(saved) ? 0 : saved);

  return (
    <TrainingContext.Provider value={{ totalLessons, completedLessons, setCompletedLessons }}>
      {children}
    </TrainingContext.Provider>
  );
};

export default TrainingContext;