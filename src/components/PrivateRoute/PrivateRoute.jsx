import React from "react";
import { useSelector } from "react-redux"; // Ensure this import is present
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors"; // Adjust path if needed

const PrivateRoute = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Use the hook here

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
