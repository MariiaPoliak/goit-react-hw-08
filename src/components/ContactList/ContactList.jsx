import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import { selectSearchQuery } from "../../redux/filters/selectors";
import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const searchQuery = useSelector(selectSearchQuery);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <div className={s.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={s.error}>Error: {error}</div>;
  }

  if (!Array.isArray(contacts) || filteredContacts.length === 0) {
    return <div className={s.error}>No contacts found.</div>;
  }

  return (
    <ul className={s.contact_box}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
