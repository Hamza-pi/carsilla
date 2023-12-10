import { Outlet } from "react-router-dom";
import UserNav from "./UserNav";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="w-full flex lg:flex-row flex-col items-start">
      <SideBar />
      <div className="bg-greyBg w-full px-4 lg:px-10 xl:px-10 lg:pt-10 pt-2 max-h-screen overflow-y-scroll">
        {location.pathname === "/dashboard" ||
        location.pathname === "/dashboard/user" ? (
          <UserNav />
        ) : (
          <NavBar />
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
