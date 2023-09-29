import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./Task.module.scss";

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

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    startDate: PropTypes.string.isRequired,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  isDoneTask: PropTypes.func.isRequired,
};

export default Task;
