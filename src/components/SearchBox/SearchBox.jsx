import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/filters/slice";
import { FiSearch } from "react-icons/fi"; 
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <FiSearch className={styles.icon} /> Search Contacts
      </h2>
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
