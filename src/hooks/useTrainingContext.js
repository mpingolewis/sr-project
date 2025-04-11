import { useContext } from 'react';
import TrainingContext from '../context/TrainingContext';

export function useTrainingContext() {
  return useContext(TrainingContext);
}
