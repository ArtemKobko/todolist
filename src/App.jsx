import styles from "./App.module.scss";
import ToDoList from "./components/ToDoList/ToDoList";
import IconMoon from "./assets/icon-moon.svg";

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heroSection}>
        <div className={styles.titleContainer}>
          <p className={styles.heroText}>TO DO</p>
          <img className={styles.heroIcon} src={IconMoon} alt="moon" />
        </div>
      </div>
      <div className={styles.toDoSection}>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
