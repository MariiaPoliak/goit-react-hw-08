import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <div className={s.list_container}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
