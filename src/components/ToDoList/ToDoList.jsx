import styles from "./ToDoList.module.scss";
import { useState } from "react";
import CustomInput from "../Input/Input";

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState(["task1", "task2", "task3"]);
  const [checkedTasks, setCheckedTasks] = useState({});

  const handleCheckboxChange = task => {
    setCheckedTasks(prevState => ({
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

  return (
    <div className={styles.toDoContainer}>
      <div className={styles.taskInput}>
        <div className={styles.circle} />
        <input
          type="text"
          placeholder="Create a new todo..."
          value={task}
          onChange={e => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={styles.taskList}>
        {allTasks.map(task => (
          <CustomInput
            key={task}
            label={task}
            checked={checkedTasks[task] || false}
            setChecked={() => handleCheckboxChange(task)}
            onRemove={() => handleRemove(task)}
          />
        ))}
      </div>
      <div className={styles.filter}> </div>
    </div>
  );
}
