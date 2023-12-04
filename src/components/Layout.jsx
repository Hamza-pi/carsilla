import { Outlet } from "react-router-dom";
import UserNav from "./UserNav";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col items-start">
      <SideBar />
      <div className="bg-greyBg w-full px-4 lg:px-10 xl:px-14 lg:pt-10 pt-2 max-h-screen overflow-y-scroll">
        <UserNav />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
