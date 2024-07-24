import styles from "./Input.module.scss";
import CheckIcon from "../../assets/icon-check.svg";
import DeleteIcon from "../../assets/icon-cross.svg";

const CustomInput = ({ label, onRemove, checked, setChecked }) => {
  return (
    <div className={styles.customInput}>
      <div
        className={`${styles.checkboxContainer} ${checked && styles.checked}`}
        onClick={setChecked}
      >
        {checked && (
          <img className={styles.checkIcon} src={CheckIcon} alt="check" />
        )}
      </div>
      <p className={`${styles.inputLabel} ${checked && styles.checkedlabel}`}>
        {label}
      </p>

      <img
        className={styles.removeButton}
        src={DeleteIcon}
        alt="delete"
        onClick={onRemove}
      />
    </div>
  );
};

export default CustomInput;
