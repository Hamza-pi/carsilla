import { Link } from "react-router-dom";
import TitleBar from "../components/TitleBar";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";

const contact = [
  {
    icon: <IoMailOutline />,
    content: "maria@gmai.com",
  },
  {
    icon: <IoLocationOutline />,
    content: `312 3rd St, Albany,
    New York 12206, USA`,
  },
  {
    icon: <FaWhatsapp />,
    content: "+1 123-123-123",
  },
  {
    icon: <CiFileOn />,
    content: "Profile Information file",
  },
];

const UserSettings = () => {
  return (
    <>
      <TitleBar title="User Settings" />
      <div className="profile_container flex sm:flex-row flex-col gap-6 items-start justify-between pb-4">
        {/* Left */}
        <div className="left 2xl:w-[22%] sm:w-[35%] w-full space-y-6">
          {/* User Details */}
          <div className="user_details w-full flex flex-col items-center justify-center bg-white shadow-boxShadow rounded-lg p-4 font-roboto">
            <div className="profile_pic relative w-[110px] rounded-full">
              <img
                src="/images/Prof.png"
                alt=""
                className="w-full h-full rounded-full object-cover object-center"
              />
              <div className="w-[37px] h-[37px] bg-[#00BA9D] border-[3px] border-white rounded-full absolute -bottom-0 -right-2"></div>
            </div>
            <div className="details text-center py-4 space-y-4">
              <h3 className="font-bold text-[24px] leading-[36px] text-textDark">
                Maria Smith
              </h3>
              <span className=" bg-pink px-10 py-1.5 text-white font-archivo text-bold text-[13px] leading-[14.14px] rounded-lg">
                User
              </span>
              <p className="font-bold text-sm leading-[16.41px] text-textBlue pt-3">
                last visit 02/03/2023
              </p>
            </div>
            <Link to="/" className="w-full pb-4">
              <button className="w-full bg-textBlue rounded-full py-3 shadow-btnShadow3 text-white font-bold leading-[18.75px]">
                Log Out
              </button>
            </Link>
          </div>
          {/* Notifications & Messages */}
          <div className="notifications_messages w-full p-4 bg-white shadow-boxShadow rounded-lg font-archivo">
            <ul className="p-4 space-y-3 font-normal text-[#1B1B1B] leading-[17.41px]">
              <li>
                <p>
                  Notifications{" "}
                  <span className="text-textBlue font-bold">(24)</span>
                </p>
              </li>
              <li>
                <p>
                  Messages <span className="text-textBlue font-bold">(7)</span>
                </p>
              </li>
            </ul>
          </div>
          {/* Contact Details */}
          <div className="notifications_messages w-full p-4 bg-white shadow-boxShadow rounded-lg font-archivo">
            <ul className="px-2 py-4 space-y-6 font-normal text-[#1B1B1B] leading-[17.41px]">
              {contact.map((item, i) => (
                <li className="flex items-start gap-x-2" key={i}>
                  <div className="icon text-textBlue">{item.icon}</div>
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right */}
        <div className="right bg-white shadow-boxShadow px-6 py-8 rounded-lg 2xl:w-[76%] sm:w-[63%] w-full">
          <form className="font-archivo">
            <h3 className="font-roboto font-bold text-[20px] leading-[24px] text-textDark">
              My Profile Details
            </h3>
            <div className="inputs pt-3 flex xl:flex-row flex-col items-center justify-between">
              <div className="left xl:w-[49%] w-full">
                <div className="mb-5">
                  <label
                    htmlFor="fname"
                    className="block pb-2 text-xs font-bold leading-[20px] text-textGrey"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    className="text-base text-[#1B1B1B] rounded-lg block w-full py-2 px-6 border-[1px] border-bGrey outline-none placeholder:text-[#1B1B1B]"
                    placeholder="Maria"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="lname"
                    className="block pb-2 text-xs font-bold leading-[20px] text-textGrey"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    className="text-base text-[#1B1B1B] rounded-lg block w-full py-2 px-6 border-[1px] border-bGrey outline-none placeholder:text-[#1B1B1B]"
                    placeholder="Smith"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block pb-2 text-xs font-bold leading-[20px] text-textGrey"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="text-base text-[#1B1B1B] rounded-lg block w-full py-2 px-6 border-[1px] border-bGrey outline-none placeholder:text-[#1B1B1B]"
                    placeholder="maria@gmail.com"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="tel"
                    className="block pb-2 text-xs font-bold leading-[20px] text-textGrey"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    className="text-base text-[#1B1B1B] rounded-lg block w-full py-2 px-6 border-[1px] border-bGrey outline-none placeholder:text-[#1B1B1B]"
                    placeholder="+1-123-123-123"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block pb-2 text-xs font-bold leading-[20px] text-textGrey"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="text-base text-[#1B1B1B] rounded-lg block w-full py-2 px-6 border-[1px] border-bGrey outline-none placeholder:text-[#1B1B1B]"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="right xl:w-[49%] w-full">
                <div className="mb-5">
                  <label
                    htmlFor="country"
                    className="block pb-2 text-xs font-bold leading-[20px] text-textGrey"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="text-base text-[#1B1B1B] rounded-lg block w-full py-2 px-6 border-[1px] border-bGrey outline-none placeholder:text-[#1B1B1B]"
                    placeholder="USA"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="city"
                    className="block pb-2 text-xs font-bold leading-[20px] text-textGrey"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="text-base text-[#1B1B1B] rounded-lg block w-full py-2 px-6 border-[1px] border-bGrey outline-none placeholder:text-[#1B1B1B]"
                    placeholder="New york"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="state"
                    className="block pb-2 text-xs font-bold leading-[20px] text-textGrey"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="text-base text-[#1B1B1B] rounded-lg block w-full py-2 px-6 border-[1px] border-bGrey outline-none placeholder:text-[#1B1B1B]"
                    placeholder="New York"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="zip"
                    className="block pb-2 text-xs font-bold leading-[20px] text-textGrey"
                  >
                    Zipcode
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="text-base text-[#1B1B1B] rounded-lg block w-full py-2 px-6 border-[1px] border-bGrey outline-none placeholder:text-[#1B1B1B]"
                    placeholder="1013"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="address"
                    className="block pb-2 text-xs font-bold leading-[20px] text-textGrey"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="text-base text-[#1B1B1B] rounded-lg block w-full py-2 px-6 border-[1px] border-bGrey outline-none placeholder:text-[#1B1B1B]"
                    placeholder="312 3rd St, Albany, New York 12206, USA"
                    required
                  />
                </div>
              </div>
            </div>
            <Link
              to="#"
              className="font-roboto font-semibold text-sm leading-[18px] text-textBlue"
            >
              Change Password
            </Link>
            <Link to="/" className="w-full pt-4 block">
              <button className="sm:w-[312px] w-full font-roboto font-bold leading-[18.75px] text-white bg-[#00BA9D] border border-[#01C8A9] shadow-btnShadow2 py-3 rounded-full">
                Update Information
              </button>
            </Link>
          </form>
          <div className="admin_tools pt-8 font-roboto">
            <h3 className="font-bold text-[20px] leading-[24px] text-textDark">
              Admin Panel Tools
            </h3>
            <ul className="2xl:w-[60%] font-bold text-sm leading-[18px] text-textDark flex flex-wrap gap-x-20 gap-y-8 items-start justify-between  px-4 pt-6">
              <li className="flex xl:flex-col flex-row items-start gap-8 ">
                <h6>Enable Services</h6>
                <h6>Security Accets</h6>
              </li>
              <li className="flex xl:flex-col flex-row items-start gap-8 ">
                <h6>Payment Methods</h6>
                <h6>Configuration Settings</h6>
              </li>
              <li className="flex xl:flex-col flex-row items-start gap-8 ">
                <h6>Appearance</h6>
                <h6>View Mode</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
