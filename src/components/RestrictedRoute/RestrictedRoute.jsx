import { useSelector } from "react-redux"; // імпортуємо useSelector
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children, redirectTo }) => {
  const isAuthenticated = useSelector(selectIsLoggedIn);

  return !isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
