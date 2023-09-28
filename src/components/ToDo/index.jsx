import React from "react";

import TaskForm from "../TaskForm";
import TasksList from "../TasksList";
import TaskFilter from "../TaskFilter";

import { useToDo } from "../../hooks";

const ToDo = () => {
  const { state, addTask, deleteTask, isDoneTask, handleTasksFilter } =
    useToDo();
  return (
    <section>
      <h1>Todo List</h1>
      <TaskForm addTask={addTask} />
      <TaskFilter
        handleTasksFilter={handleTasksFilter}
        selectedFilter={state.selectedFilter}
      />
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
