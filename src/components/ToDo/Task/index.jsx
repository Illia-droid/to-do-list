import React from "react";
import cx from "classnames";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./Task.module.scss";
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
  const doneStyles = cx(styles.task, { [styles.stylesDone]: isDone });
  return (
    <li className={doneStyles}>
      <strong>
        {startDate}
        {body}
      </strong>
      <input
        type="checkbox"
        value={isDone}
        onChange={handleChange}
        className={styles.isDoneCheckbox}></input>
      <button className={styles.btnDelete} onClick={handleDelete}>
        {<DeleteIcon />}
      </button>
    </li>
  );
};

Task.propTypes = {};

export default Task;
