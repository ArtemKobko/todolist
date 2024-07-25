import styles from "./ToDoList.module.scss";
import { useState } from "react";
import CustomInput from "../Input/Input";
import Filter from "../Filter/Filter";

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([
    "task1",
    "task2",
    "task3",
    "task4",
  ]);
  const [completedTasks, setCompletedTasks] = useState({});
  const [filter, setFilter] = useState("all");

  const handleCheckboxChange = task => {
    setCompletedTasks(prevState => ({
      ...prevState,
      [task]: !prevState[task],
    }));
  };

  const handleRemove = task => {
    setAllTasks(prevTasks => prevTasks.filter(t => t !== task));
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setAllTasks(prevTasks => [...prevTasks, task.trim()]);
      setTask("");
    }
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTask();
    }
  };

  const clearCompletedTasks = () => {
    setAllTasks(prevTasks => prevTasks.filter(task => !completedTasks[task]));
    setCompletedTasks({});
  };

  const filteredTasks = () => {
    switch (filter) {
      case "active":
        return allTasks.filter(task => !completedTasks[task]);
      case "completed":
        return allTasks.filter(task => completedTasks[task]);
      default:
        return allTasks;
    }
  };

  const remainingTasks =
    allTasks.length - Object.values(completedTasks).filter(Boolean).length;

  return (
    <div className={styles.toDoContainer}>
      <div className={styles.taskInput}>
        <div className={styles.circle} />
        <input
          type="text"
          className={styles.taskInputField}
          placeholder="Create a new todo..."
          value={task}
          onChange={e => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={styles.taskList}>
        {filteredTasks().map(task => (
          <CustomInput
            key={task}
            label={task}
            checked={completedTasks[task] || false}
            setChecked={() => handleCheckboxChange(task)}
            onRemove={() => handleRemove(task)}
          />
        ))}
      </div>
      <Filter
        filter={filter}
        setFilter={setFilter}
        clearCompletedTasks={clearCompletedTasks}
        remainingTasks={remainingTasks}
      />
    </div>
  );
}
