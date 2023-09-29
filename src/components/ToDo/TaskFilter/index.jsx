import React from "react";
import PropTypes from "prop-types";

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

TaskFilter.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  handleTasksFilter: PropTypes.func.isRequired,
};
export default TaskFilter;
