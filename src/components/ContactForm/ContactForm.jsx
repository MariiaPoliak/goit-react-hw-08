import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = { name, number };

    dispatch(addContact(newContact))
      .unwrap()
      .then((res) => {
        toast.success(`Contact ${res.name} added successfully!`);
        setName("");
        setNumber("");
      })
      .catch((error) => {
        toast.error(
          error.message || "Failed to add contact. Please try again."
        );
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className={styles.input}
      />
      <input
        type="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Phone Number"
        required
        className={styles.input}
      />
      <button className={styles.button} type="submit">
        <span className={styles.icon}>+</span> Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
