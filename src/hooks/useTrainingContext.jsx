// src/hooks/useTrainingContext.js
import { useContext } from 'react';
import TrainingContext from '../context/TrainingContext';

export function useTrainingContext() {
  const ctx = useContext(TrainingContext);
  console.log("📦 useTrainingContext:", ctx);
  return ctx;
}