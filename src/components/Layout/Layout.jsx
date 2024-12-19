// Layout.jsx
import { Outlet } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

const Layout = () => {
  return (
    <div>
      <HomePage />
      <Outlet />
    </div>
  );
};

export default Layout;
