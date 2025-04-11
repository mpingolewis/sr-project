import { createContext, useState } from 'react';

const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
  const totalLessons = 5;
  const [completedLessons, setCompletedLessons] = useState(0);

  return (
    <TrainingContext.Provider value={{ totalLessons, completedLessons, setCompletedLessons }}>
      {children}
    </TrainingContext.Provider>
  );
};

export default TrainingContext;
