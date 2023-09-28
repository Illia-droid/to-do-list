import { useEffect, useReducer } from "react";
import TYPES from "../components/ToDo/actionTypes";
import reducer from "../components/ToDo/reducer";

const useToDo = () => {
  const [state, dispatch] = useReducer(reducer, {
    tasks: getTasksFromLocalStorage(),
    selectedFilter: "all",
  });

  useEffect(() => {
    saveTasksToLocalStorage(state.tasks);
  }, [state.tasks]);

  const addTask = ({ body }) => {
    dispatch({ type: TYPES.CREATE_TASK, payload: { body } });
    dispatch({ type: TYPES.FILTERED, payload: "all" });
  };

  const deleteTask = ({ id }) =>
    dispatch({ type: TYPES.DELETE_TASK, payload: { id } });

  const isDoneTask = ({ id }) =>
    dispatch({ type: TYPES.IS_DONE_TASK, payload: { id } });

  const handleTasksFilter = ({ target }) => {
    dispatch({ type: TYPES.FILTERED, payload: target.value });
  };

  function getTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  }

  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  return { state, addTask, deleteTask, isDoneTask, handleTasksFilter };
};
export default useToDo;
