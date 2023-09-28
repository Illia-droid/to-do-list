import React from "react";

const TaskFilter = ({ selectedFilter, handleTasksFilter }) => {
  return (
    <div>
      <select value={selectedFilter} onChange={handleTasksFilter}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="undone">Undone</option>
      </select>
    </div>
  );
};

export default TaskFilter;
