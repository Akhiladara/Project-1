import React, { useState } from 'react';
import './styles.css'; 

const TaskListInterface = () => {
  // Sample tasks data for demonstration
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', dueDate: '2024-05-01', assignedTo: 'John Doe', status: 'In Progress' },
    { id: 2, name: 'Task 2', dueDate: '2024-05-03', assignedTo: 'Jane Doe', status: 'To Do' },
    { id: 3, name: 'Task 3', dueDate: '2024-05-05', assignedTo: 'John Doe', status: 'Completed' }
  ]);

  // Function to add a new task
  const handleAddTask = () => {
    // Sample logic to add a new task
    const newTask = {
      id: tasks.length + 1,
      name: `Task ${tasks.length + 1}`,
      dueDate: '2024-05-10',
      assignedTo: 'John Doe',
      status: 'To Do'
    };
    setTasks([...tasks, newTask]);
  };

  // Function to edit a task
  const handleEditTask = (taskId) => {
    // Sample logic to edit a task
    console.log(`Edit task with ID ${taskId}`);
  };

  // Function to delete a task
  const handleDeleteTask = (taskId) => {
    // Sample logic to delete a task
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Function to mark a task as complete
  const handleCompleteTask = (taskId) => {
    // Sample logic to mark a task as complete
    console.log(`Complete task with ID ${taskId}`);
  };

  return (
    <div className="task-list-container">
      <h1>Task List</h1>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <div className="task-info">
              <h2>{task.name}</h2>
              <p>Due Date: {task.dueDate}</p>
              <p>Assigned to: {task.assignedTo}</p>
              <p>Status: {task.status}</p>
            </div>
            <div className="task-actions">
              <button onClick={() => handleEditTask(task.id)}>Edit</button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
            </div>
          </div>
        ))}
      </div>
      <button className="add-task-btn" onClick={handleAddTask}>+</button>
    </div>
  );
};

export default TaskListInterface;
