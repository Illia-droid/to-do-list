import React from "react";
import PropTypes from "prop-types";

import Task from "../Task";
import styles from "./TasksList.module.scss";

const TasksList = ({ tasks, selectedFilter, deleteTask, isDoneTask }) => {
  const renderTasks = (task) => {
    if (selectedFilter === "all") {
      return (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          isDoneTask={isDoneTask}
        />
      );
    } else if (selectedFilter === "done" && task.isDone) {
      return (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          isDoneTask={isDoneTask}
        />
      );
    }
    if (selectedFilter === "undone" && task.isDone === false) {
      return (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          isDoneTask={isDoneTask}
        />
      );
    }
    return null;
  };

  return <ul className={styles.tasksGroup}>{tasks.map(renderTasks)}</ul>;
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired, // tasks должен быть массивом объектов и обязательным
  selectedFilter: PropTypes.string.isRequired, // selectedFilter должен быть строкой и обязательным
  deleteTask: PropTypes.func.isRequired, // deleteTask должен быть функцией и обязательным
  isDoneTask: PropTypes.func.isRequired, // isDoneTask должен быть функцией и обязательным
};

export default TasksList;
