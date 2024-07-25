import styles from "./ToDoList.module.scss";
import { useState } from "react";
import CustomInput from "../Input/Input";
import Filter from "../Filter/Filter";

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([
    { id: 1, order: 1, name: "Smile, today is a good day ;)", checked: false },
  ]);
  const [currentTask, setCurrentTask] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleCheckboxChange = taskId => {
    setAllTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, checked: !task.checked } : task,
      ),
    );
  };

  const handleRemove = taskId => {
    setAllTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = {
        id: Date.now(),
        order: allTasks.length + 1,
        name: task.trim(),
        checked: false,
      };
      setAllTasks(prevTasks => [...prevTasks, newTask]);
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
    setAllTasks(prevTasks => prevTasks.filter(task => !task.checked));
  };

  const filteredTasks = () => {
    switch (filter) {
      case "active":
        return allTasks.filter(task => !task.checked);
      case "completed":
        return allTasks.filter(task => task.checked);
      default:
        return allTasks;
    }
  };

  const remainingTasks =
    allTasks.length - allTasks.filter(task => task.checked).length;

  const handleDragStart = (e, task) => {
    setCurrentTask(task);
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = (e, targetTask) => {
    e.preventDefault();
    if (!currentTask) return;

    const updatedTasks = allTasks
      .map(task => {
        if (task.id === currentTask.id)
          return { ...task, order: targetTask.order };
        if (task.id === targetTask.id)
          return { ...task, order: currentTask.order };
        return task;
      })
      .sort((a, b) => a.order - b.order);

    setAllTasks(updatedTasks);
    setCurrentTask(null);
  };

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
        {filteredTasks()
          .sort((a, b) => a.order - b.order)
          .map(task => (
            <div
              key={task.id}
              draggable
              onDragStart={e => handleDragStart(e, task)}
              onDragOver={handleDragOver}
              onDrop={e => handleDrop(e, task)}
              className={styles.draggableItem}
            >
              <CustomInput
                label={task.name}
                checked={task.checked}
                setChecked={() => handleCheckboxChange(task.id)}
                onRemove={() => handleRemove(task.id)}
              />
            </div>
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
