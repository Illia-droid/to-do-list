const useLocalStorageForToDo = () => {
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const getTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };
  return { saveTasksToLocalStorage, getTasksFromLocalStorage };
};

export default useLocalStorageForToDo;
