import { v4 as uuidv4 } from "uuid";

import TYPES from "./actionTypes";
import { format } from "date-fns";

const reducer = (state, action, saveTasksToLocalStorage) => {
  switch (action.type) {
    case TYPES.CREATE_TASK: {
      const {
        payload: { body },
      } = action;
      const newTask = {
        id: uuidv4(),
        body: body,
        isDone: false,
        startDate: format(new Date(), "MM/dd hh:mm:ss "),
      };
      const newTasks = [...state.tasks, newTask];
      saveTasksToLocalStorage(newTasks);
      return {
        ...state,
        tasks: newTasks,
      };
    }

    case TYPES.DELETE_TASK: {
      const {
        payload: { id },
      } = action;
      const updatedTasks = state.tasks.filter((task) => task.id !== id);
      saveTasksToLocalStorage(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };
    }

    case TYPES.IS_DONE_TASK: {
      const {
        payload: { id },
      } = action;
      const toggledTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : { ...task }
      );
      saveTasksToLocalStorage(toggledTasks);
      return {
        ...state,
        tasks: toggledTasks,
      };
    }
    case TYPES.FILTERED:
      return { ...state, selectedFilter: action.payload };
    default:
      return state;
  }
};
export default reducer;
