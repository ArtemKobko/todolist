import styles from "./Filter.module.scss";

const Filter = ({ filter, setFilter, clearCompletedTasks, remainingTasks }) => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.quantityOfTasks}>{remainingTasks} items left</div>
      <div className={styles.filterButtons}>
        <label className={filter === "all" ? styles.active : ""}>
          <input
            type="radio"
            name="filter"
            checked={filter === "all"}
            onChange={() => setFilter("all")}
          />
          All
        </label>
        <label className={filter === "active" ? styles.active : ""}>
          <input
            type="radio"
            name="filter"
            checked={filter === "active"}
            onChange={() => setFilter("active")}
          />
          Active
        </label>
        <label className={filter === "completed" ? styles.active : ""}>
          <input
            type="radio"
            name="filter"
            checked={filter === "completed"}
            onChange={() => setFilter("completed")}
          />
          Completed
        </label>
      </div>
      <div className={styles.clearButton} onClick={clearCompletedTasks}>
        Clear Completed
      </div>
    </div>
  );
};

export default Filter;
