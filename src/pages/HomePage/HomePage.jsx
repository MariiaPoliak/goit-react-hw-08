import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className={s.homePage}>
      <div className={s.overlay}>
        <h1>Welcome to PhoneBook!</h1>
        {!isLoggedIn ? (
          <p>
            Please{" "}
            <NavLink to="/login" className={s.link}>
              Login
            </NavLink>{" "}
            or{" "}
            <NavLink to="/register" className={s.link}>
              Register
            </NavLink>{" "}
            to access your contacts.
          </p>
        ) : (
          <p>
            Welcome back! Go to your{" "}
            <NavLink to="/contacts" className={s.link}>
              Contacts
            </NavLink>
            .
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
