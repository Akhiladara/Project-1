import React from 'react';
import './styles.css'; 

const TaskSummaryPage = ({ taskMetrics }) => {
  return (
    <div className="task-summary-container">
      <h1>Task Summary</h1>
      <div className="chart-container">
        {/* Insert charts here (e.g., using Chart.js) */}
        <p>Chart Placeholder</p>
      </div>
      <div className="summary-table">
        <h2>Summary Table</h2>
        <table>
          <thead>
            <tr>
              <th>Total Tasks</th>
              <th>Completed Tasks</th>
              <th>Overdue Tasks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{taskMetrics.totalTasks}</td>
              <td>{taskMetrics.completedTasks}</td>
              <td>{taskMetrics.overdueTasks}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskSummaryPage;
