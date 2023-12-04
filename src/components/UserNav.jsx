import { IoIosNotifications, IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { useState } from "react";

const UserNav = () => {
  const [uInfo, setUInfo] = useState(false);

  return (
    <nav className="flex items-center justify-between font-openSans pb-6">
      <div className="greeting">
        <h3 className="font-semibold text-neutral text-[1.25rem] leading-[30px] tracking-[0.15px]">
          Hello, Khanif
        </h3>
        <p className="text-sm leading-[21px] tracking-[0.25px] text-neutralGrey">
          Have a nice day
        </p>
      </div>
      <div className="info flex items-center gap-4 relative">
        {/* Notification Icon */}
        <div className="notification text-[1.5rem] relative cursor-pointer">
          <IoIosNotifications />
          <div className="w-[10px] h-[10px] rounded-full bg-secondary absolute top-[1px] right-[1px] border-2 border-white"></div>
        </div>
        {/* User Icon on mobile screen */}
        <div
          className="text-[1.25rem] sm:hidden block cursor-pointer"
          onClick={() => setUInfo(!uInfo)}
        >
          <FaUser />
        </div>

        <div className="h-[38px] w-[1px] border-l border-[#C2C2C2] sm:block hidden"></div>

        <div
          className={`flex sm:flex-row flex-col sm:static absolute top-7 sm:bg-transparent bg-white p-2 ${
            uInfo ? "flex" : "hidden sm:flex"
          } items-center gap-4 sm:shadow-none shadow-lg rounded-lg sm:rounded-none`}
        >
          {/* Profile pic */}
          <div className="w-[2.8125rem] h-[2.8125rem] rounded-full">
            <img
              src="/images/Profilepic.png"
              alt="profilePic"
              className="w-full h-full"
            />
          </div>
          {/* User Info */}
          <div>
            <h3 className="font-semibold text-neutral leading-[24px] tracking-[0.5px]">
              Khanif Alam
            </h3>
            <p className="text-xs leading-[18px] tracking-[0.4px] text-neutralGrey">
              Admin
            </p>
          </div>
          <div className="text-[1rem] cursor-pointer sm:block hidden">
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNav;
