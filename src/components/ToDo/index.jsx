import React from "react";

import TaskForm from "./TaskForm";
import TasksList from "./TasksList";
import TaskFilter from "./TaskFilter";

import { useToDo } from "../../hooks";
import styles from "./ToDo.module.scss";

const ToDo = () => {
  const { state, addTask, deleteTask, isDoneTask, handleTasksFilter } =
    useToDo();
  return (
    <section className={styles.toDoSection}>
      <h1 className={styles.heading}>Todo List</h1>
      <div className={styles.adderTasksWrapper}>
        <TaskForm addTask={addTask} />
        <TaskFilter
          handleTasksFilter={handleTasksFilter}
          selectedFilter={state.selectedFilter}
        />
      </div>

      <TasksList
        tasks={state.tasks}
        selectedFilter={state.selectedFilter}
        deleteTask={deleteTask}
        isDoneTask={isDoneTask}
      />
    </section>
  );
};

export default ToDo;
