import React from "react";
import styles from "./TaskFilter.module.scss";
const TaskFilter = ({ selectedFilter, handleTasksFilter }) => {
  return (
    <div>
      <select
        value={selectedFilter}
        onChange={handleTasksFilter}
        className={styles.select}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="undone">Undone</option>
      </select>
    </div>
  );
};

export default TaskFilter;
