import React from 'react';

const TaskList = ({ tasks, onTaskComplete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.name}
          <button onClick={() => onTaskComplete(task.id)}>Complete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;