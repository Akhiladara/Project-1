import React, { useState } from 'react';
import './styles.css'; 

const TaskDetails = ({ task, onUpdateTask }) => {
  const [editedTask, setEditedTask] = useState(task);

  // Function to handle changes to task details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  // Function to save task changes
  const handleSaveChanges = () => {
    // Call the onUpdateTask function with the editedTask
    onUpdateTask(editedTask);
  };

  return (
    <div className="task-details-container">
      <h1>Task Details</h1>
      <form onSubmit={handleSaveChanges}>
        <label htmlFor="task-name">Task Name:</label>
        <input type="text" id="task-name" name="name" value={editedTask.name} onChange={handleInputChange} />
        <label htmlFor="due-date">Due Date:</label>
        <input type="date" id="due-date" name="dueDate" value={editedTask.dueDate} onChange={handleInputChange} />
        <label htmlFor="assigned-to">Assigned to:</label>
        <input type="text" id="assigned-to" name="assignedTo" value={editedTask.assignedTo} onChange={handleInputChange} />
        <label htmlFor="task-status">Status:</label>
        <select id="task-status" name="status" value={editedTask.status} onChange={handleInputChange}>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <label htmlFor="task-description">Description:</label>
        <textarea id="task-description" name="description" value={editedTask.description} onChange={handleInputChange}></textarea>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default TaskDetails;
