import React from 'react';

const Progress = ({ currentTask }) => {
  return (
    <div>
      <h2>Current Task</h2>
      {currentTask ? <p>{currentTask.name}</p> : <p>No current task</p>}
    </div>
  );
};

export default Progress;