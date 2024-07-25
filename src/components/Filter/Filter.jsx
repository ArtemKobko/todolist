import styles from "./Filter.module.scss";
import FilterOption from "./FilterOption";

const Filter = ({ filter, setFilter, clearCompletedTasks, remainingTasks }) => {
  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <div className={styles.filterContainer}>
      <div className={styles.quantityOfTasks}>{remainingTasks} items left</div>
      <div className={styles.filterButtons}>
        {filterOptions.map(option => (
          <FilterOption
            key={option.value}
            label={option.label}
            isActive={filter === option.value}
            onChange={() => setFilter(option.value)}
          />
        ))}
      </div>
      <div className={styles.clearButton} onClick={clearCompletedTasks}>
        Clear Completed
      </div>
      <div className={styles.filterButtonsMobile}>
        {filterOptions.map(option => (
          <FilterOption
            key={option.value}
            label={option.label}
            isActive={filter === option.value}
            onChange={() => setFilter(option.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
