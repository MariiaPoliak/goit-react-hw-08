import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing, selectIsLoggedIn } from "./redux/auth/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthenticated = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing user...</p>;
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Роут для реєстрації, використовуємо RestrictedRoute для обмеження доступу */}
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <RegistrationPage />
            </RestrictedRoute>
          }
        />

        {/* Роут для логіну, перенаправляє на контактну сторінку, якщо вже авторизований */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/contacts" />
            ) : (
              <RestrictedRoute redirectTo="/contacts">
                <LoginPage />
              </RestrictedRoute>
            )
          }
        />

        {/* Роут для контактів, лише для авторизованих користувачів */}
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
