import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const UserSearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex xl:flex-row flex-col items-center justify-between gap-y-3 font-openSans">
      {/* SearchBar */}
      <div className="bg-white flex items-center gap-6 py-3 px-4 rounded-xl text-textDarkG text-[1rem] w-full xl:w-[40%] 2xl:w-[60%]">
        <IoSearchOutline />
        <input
          type="text"
          name="Search"
          id="search"
          className="w-full bg-transparent border-none outline-none leading-[24px] tracking-[0.5px] text-textDarkG"
          placeholder="Search"
        />
      </div>
      {/* Buttons & Filters */}
      <div className="xl:w-auto w-full flex flex-wrap items-center justify-between gap-2 text-[17px] font-semibold leading-[1rem]">
        <button
          className="flex items-center gap-3 px-6 py-4 bg-secondary text-white shadow-btnShadow rounded-lg"
          onClick={() => setOpen(true)}
        >
          Add user
          <FaPlus />
        </button>
        {/* Sort By */}
        <select
          name="sort"
          id="sort"
          className="px-6 bg-transparent border-none outline-none text-textDarkG"
        >
          <option value="" hidden>
            Sort by
          </option>
          <option value="date">Date</option>
          <option value="name">Name</option>
        </select>
        {/* Saved Search */}
        <select
          name="sort"
          id="sort"
          className="px-6 bg-transparent border-none outline-none text-textDarkG"
        >
          <option value="" hidden>
            Saved search
          </option>
          <option value="date">Date</option>
          <option value="name">Name</option>
        </select>
        {/* Filter */}
        <HiMiniAdjustmentsHorizontal className="text-[1.5rem] cursor-pointer ml-2" />
      </div>
      {/* Add User Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        center
        showCloseIcon={false}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b-[1px] border-b-[#EFF4FA]">
          <div className="flex items-center justify-between ">
            <h3 className="font-semibold text-[17px] leading-[16px] text-textBluish">
              Add User
            </h3>
            <IoClose
              className="text-[1.5rem] cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
        <form className="w-full px-4 py-6 text-[13px] leading-[16px] flex flex-col gap-2">
          <input
            type="text"
            placeholder="User ID *"
            className="w-full px-4 py-2 outline-none border-[1px] border-[#EFF4FA] rounded-lg text-textBluish placeholder:text-textBluish"
            required
          />
          <div className="flex sm:flex-row flex-col items-center justify-between gap-3">
            <input
              type="text"
              placeholder="First Name *"
              className="w-full px-4 py-2 outline-none border-[1px] border-[#EFF4FA] rounded-lg text-textBluish placeholder:text-textBluish"
              required
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="w-full px-4 py-2 outline-none border-[1px] border-[#EFF4FA] rounded-lg text-textBluish placeholder:text-textBluish"
              required
            />
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-between gap-3">
            <input
              type="email"
              placeholder="Email ID *"
              className="w-full px-4 py-2 outline-none border-[1px] border-[#EFF4FA] rounded-lg text-textBluish placeholder:text-textBluish"
              required
            />
            <input
              type="text"
              placeholder="Mobile No"
              className="w-full px-4 py-2 outline-none border-[1px] border-[#EFF4FA] rounded-lg text-textBluish placeholder:text-textBluish"
            />
            <input
              type="number"
              placeholder="Select Role Type"
              className="w-full px-4 py-2 outline-none border-[1px] border-[#EFF4FA] rounded-lg text-textBluish placeholder:text-textBluish"
            />
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-between gap-3">
            <input
              type="text"
              placeholder="Username *"
              className="w-full px-4 py-2 outline-none border-[1px] border-[#EFF4FA] rounded-lg text-textBluish placeholder:text-textBluish"
              required
            />
            <input
              type="password"
              placeholder="Password*"
              className="w-full px-4 py-2 outline-none border-[1px] border-[#EFF4FA] rounded-lg text-textBluish placeholder:text-textBluish"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password*"
              className="w-full px-4 py-2 outline-none border-[1px] border-[#EFF4FA] rounded-lg text-textBluish placeholder:text-textBluish"
              required
            />
          </div>
        </form>
        <div className="relative overflow-x-auto">
          <table className="w-full text-center rtl:text-right">
            <thead className="text-[15px] font-semibold leading-[16px] text-[#8F9BB3] capitalize bg-lightBlue">
              <tr>
                <th scope="col" className="px-6 py-3 text-left">
                  Module Permission
                </th>
                <th scope="col" className="px-6 py-3">
                  Read
                </th>
                <th scope="col" className="px-6 py-3">
                  Write
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="bg-white border-b border-[#EFF4FA] text-xs text-textBluish">
                <td scope="row" className="px-6 py-4 text-left">
                  Super Admin
                </td>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
              </tr>
              <tr className="bg-white border-b border-[#EFF4FA] text-xs text-textBluish">
                <td scope="row" className="px-6 py-4 text-left">
                  Admin
                </td>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
              </tr>
              <tr className="bg-white border-b border-[#EFF4FA] text-xs text-textBluish">
                <td scope="row" className="px-6 py-4 text-left">
                  Employee
                </td>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
              </tr>
              <tr className="bg-white border-b border-[#EFF4FA] text-xs text-textBluish">
                <td scope="row" className="px-6 py-4 text-left">
                  Lorem Ipsum
                </td>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Footer */}
        <div className="px-4 py-3 border-t-[1px] border-t-[#EFF4FA]">
          <div className="flex items-center justify-end gap-x-8 text-[13px] leading-[16px]">
            <button
              type="submit"
              className="font-semibold w-[88px] h-[28px] rounded-lg bg-secondary text-white"
            >
              Add User
            </button>
            <button onClick={() => setOpen(false)} className="text-[#8F9BB3]">
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserSearch;
