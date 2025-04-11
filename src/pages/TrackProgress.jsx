import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import Progress from './Progress';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    fetch('/api/tasks')
      .then(response => response.json())
      .then(data => {
        setTasks(data.tasks);
        setCurrentTask(data.tasks.find(task => !task.completed) || null);
      });
  }, []);

  const handleTaskCompletion = (taskId) => {
    fetch(`/api/tasks/${taskId}/complete`, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        setTasks(data.tasks);
        setCurrentTask(data.tasks.find(task => !task.completed) || null);
      });
  };

  return (
    <div>
      <h1>Cybersecurity Training Task Manager</h1>
      <Progress currentTask={currentTask} />
      <TaskList tasks={tasks} onTaskComplete={handleTaskCompletion} />
    </div>
  );
};

export default TaskManager;