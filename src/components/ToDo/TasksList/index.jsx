import React from "react";
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

export default TasksList;
