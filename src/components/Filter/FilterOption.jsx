import styles from "./Filter.module.scss";

const FilterOption = ({ label, isActive, onChange }) => (
  <label className={isActive ? styles.active : ""}>
    <input type="radio" name="filter" checked={isActive} onChange={onChange} />
    {label}
  </label>
);

export default FilterOption;
