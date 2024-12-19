import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { logout } from "../../redux/auth/operations";
import s from "./Header.module.css";

const buildLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={s.header}>
      <h3>PhoneBook</h3>
      {isLoggedIn && user && <div>{user.email}</div>}
      <nav className={s.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
        {!isLoggedIn ? (
          <>
            <NavLink className={buildLinkClass} to="/login">
              Login
            </NavLink>
            <NavLink className={buildLinkClass} to="/register">
              Register
            </NavLink>
          </>
        ) : (
          <button onClick={handleLogout} className={s.logoutButton}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
