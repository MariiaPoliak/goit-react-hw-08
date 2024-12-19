import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className={styles.formContainer}>
      <input
        type="text"
        placeholder="Search by name"
        onChange={handleChange}
        className={styles.searchBox}
      />
    </div>
  );
};

export default SearchBox;
