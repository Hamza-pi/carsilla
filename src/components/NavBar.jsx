import { IoIosNotifications } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-y-6 sm:items-center items-start justify-between font-archivo">
    {/* Search Bar */}
      <input
        type="text"
        placeholder="Search For..."
        name=""
        id=""
        className="outline-none sm:w-[55%] w-full border border-bGrey rounded-lg px-5 py-2.5 leading-[17.41px] tracking-[.4px]"
      />
      <div className="icons flex items-center gap-x-8">
        <div className="w-[33px] h-[33px] border rounded-full cursor-pointer">
          <img
            src="/images/country.png"
            alt=""
            className="w-full h-full rounded-full object-cover object-center"
          />
        </div>
        <div className="notification text-[1.5rem] relative cursor-pointer">
          <IoIosNotifications/>
          <span className="absolute -top-4 -right-3 w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-full bg-pink text-white font-bold text-[13px] leading-[14.41px]">2</span>
        </div>
        <div className="messages text-[1.5rem] relative cursor-pointer">
          <FaMessage/>
          <span className="absolute -top-4 -right-3 w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-full bg-green text-white font-bold text-[13px] leading-[14.41px]">7</span>
        </div>
        <div className="profile w-[44px] h-[44px] border rounded-full cursor-pointer relative">
          <img
            src="/images/profile.png"
            alt=""
            className="w-full h-full rounded-full object-cover object-center"
          />
           <span className="absolute bottom-0 right-0 bg-green border-[2px] border-white w-[13px] h-[13px] rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
