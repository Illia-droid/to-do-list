import React from "react";
// import PropTypes from "prop-types";

const Task = ({
  task: { id, body, isDone, startDate },
  deleteTask,
  isDoneTask,
}) => {
  const handleDelete = () => {
    deleteTask({ id });
  };
  const handleChange = () => {
    isDoneTask({ id });
  };
  return (
    <li>
      <input type="checkbox" value={isDone} onChange={handleChange}></input>
      <strong style={{ textDecoration: isDone && "line-through" }}>
        {startDate}
        {body}
      </strong>
      <button onClick={handleDelete}>X</button>
    </li>
  );
};

Task.propTypes = {};

export default Task;
