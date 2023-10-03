import { useEffect, useReducer } from "react";
import TYPES from "../components/ToDo/actionTypes";
import reducer from "../components/ToDo/reducer";
import useLocalStorageForToDo from "./useLocalStorageForToDo";

const useToDo = () => {
  const { saveTasksToLocalStorage, getTasksFromLocalStorage } =
    useLocalStorageForToDo();

  const [state, dispatch] = useReducer(
    (state, action) => reducer(state, action),
    {
      tasks: getTasksFromLocalStorage(),
      selectedFilter: "all",
    }
  );

  useEffect(() => {
    saveTasksToLocalStorage(state.tasks); // eslint-disable-next-line
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

  return { state, addTask, deleteTask, isDoneTask, handleTasksFilter };
};
export default useToDo;
