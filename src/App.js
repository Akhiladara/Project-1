import React, { useState } from 'react';
import TaskDetails from './components/TasksDetails';
import TaskListInterface from './components/TasksInterface';
import TaskSummaryPage from './components/TasksSummary';


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', dueDate: '2024-05-01', assignedTo: 'John Doe', status: 'In Progress' },
    { id: 2, name: 'Task 2', dueDate: '2024-05-03', assignedTo: 'Jane Doe', status: 'To Do' },
    { id: 3, name: 'Task 3', dueDate: '2024-05-05', assignedTo: 'John Doe', status: 'Completed' }
  ]);

  // Function to update task list with edited task
  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Sample task metrics for TaskSummaryPage component
  const sampleTaskMetrics = {
    totalTasks: tasks.length,
    completedTasks: tasks.filter(task => task.status === 'Completed').length,
    overdueTasks: tasks.filter(task => task.status === 'Overdue').length,
  };

  return (
    <div className="App">
      {/* Render TaskListInterface component */}
      <TaskListInterface />

      {/* Render TaskDetails component with onUpdateTask prop */}
      <TaskDetails task={tasks[0]} onUpdateTask={handleUpdateTask} />

      {/* Render TaskSummaryPage component with taskMetrics prop */}
      <TaskSummaryPage taskMetrics={sampleTaskMetrics} />
    </div>
  );
}

export default App;
