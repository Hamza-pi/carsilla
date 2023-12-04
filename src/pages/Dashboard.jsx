import UserSearch from "../components/UserSearch";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Dashboard = () => {
  const [perPage, setPerPage] = useState(6);

  const [currentPage, setCurrentPage] = useState(1);

  const allData = [
    {
      name: "David Wagner",
      email: "david_wagner@example.com",
      designation: "Super Admin",
      createdAt: "24 Otc, 2015",
      role: "Lorem Ipsum",
    },
    {
      name: "Ina Hogan",
      email: "windler.warren@runte.net",
      designation: "Admin",
      createdAt: "24 Otc, 2015",
      role: "Lorem Ipsum",
    },
    {
      name: "Devin Harmon",
      email: "wintheiser_enos@yahoo.com",
      designation: "HR Admin",
      createdAt: "24 Otc, 2015",
      role: "Lorem Ipsum",
    },
    {
      name: "David Wagner",
      email: "david_wagner@example.com",
      designation: "Super Admin",
      createdAt: "24 Otc, 2015",
      role: "Lorem Ipsum",
    },
    {
      name: "Lena Page",
      email: "camila_ledner@gmail.com",
      designation: "Employee",
      createdAt: "24 Otc, 2015",
      role: "Lorem Ipsum",
    },
    {
      name: "David Wagner",
      email: "david_wagner@example.com",
      designation: "Super Admin",
      createdAt: "24 Otc, 2015",
      role: "Lorem Ipsum",
    },
    {
      name: "Eula Horton",
      email: "edula_dorton1221@gmail.com",
      designation: "Super Admin",
      createdAt: "24 Otc, 2015",
      role: "Lorem Ipsum",
    },
    {
      name: "Victoria Perez",
      email: "terrill.wiza@hotmail.com",
      designation: "HR Admin",
      createdAt: "24 Otc, 2015",
      role: "Lorem Ipsum",
    },
    {
      name: "Cora Medina",
      email: "hagenes.isai@hotmail.com",
      designation: "Employee",
      createdAt: "24 Otc, 2015",
      role: "Lorem Ipsum",
    },
    {
      name: "David Wagner",
      email: "david_wagner@example.com",
      designation: "Super Admin",
      createdAt: "24 Otc, 2015",
      role: "Lorem Ipsum",
    },
  ];

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const data = allData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allData.length / perPage);

  const paginate = (pageNumber) => {
    const nextPage = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(nextPage);
  };

  return (
    <div className="font-openSans flex flex-col gap-6 pb-10">
      <h2 className="font-bold text-[1.5rem] leading-[2rem] text-secondary">
        Users Dashboard
      </h2>
      <UserSearch />
      {/* Users List */}
      <div className="bg-white border-[1px] border-[#EFF4FA] rounded-2xl pt-10">
        <div className="relative overflow-x-auto">
          <h3 className="pl-4 pt-4 font-semibold text-[17px] leading-[16px] bg-lightBlue">
            List Users
          </h3>
          <table className="w-full text-left rtl:text-right">
            <thead className="text-[15px] font-semibold leading-[16px] text-[#8F9BB3] capitalize bg-lightBlue">
              <tr>
                <th scope="col" className="px-6 pb-6">
                  Name
                </th>
                <th scope="col" className="px-6 pb-6"></th>
                <th scope="col" className="px-6 pb-6">
                  Create Date
                </th>
                <th scope="col" className="px-6 pb-6">
                  Role
                </th>
                <th scope="col" className="px-6 pb-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((item, i) => (
                <tr
                  className="bg-white border-b border-[#EFF4FA] text-xs text-textBluish"
                  key={i}
                >
                  <td scope="row" className="px-6 py-4 ml-10">
                    <h3 className="text-[13px] font-semibold leading-[16px]">
                      {item.name}
                    </h3>
                    <p className="text-[#8F9BB3]">{item.email}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      className={`${
                        item.designation === "Employee"
                          ? "bg-[#EFF4FA] text-[#8F9BB3]"
                          : "bg-secondary text-white"
                      } w-[138.75px] h-[31.08px] rounded-lg font-semibold text-[13px] leading-[16px]`}
                    >
                      {item.designation}
                    </button>
                  </td>
                  <td className="px-6 py-4">{item.createdAt}</td>
                  <td className="px-6 py-4">{item.role}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-start gap-4 text-[1.2rem] text-[#C5CEE0]">
                      <BiEditAlt className="cursor-pointer" />
                      <RiDeleteBinLine className="cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-center gap-x-8 text-[10px] leading-[14.71px] text-darkGrey">
        <p>Items per page:</p>
        <select
          name="page"
          id=""
          className="px-4 py-2 border-b-[2px] border-darkGrey outline-none"
          onChange={(e) => {
            setPerPage(parseInt(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value={6}>6</option>
          <option value={10}>10</option>
        </select>
        <p>
          {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, allData.length)} of{" "}
          {allData.length}
        </p>
        <div className="flex items-center gap-x-4">
          <FaArrowLeft
            onClick={() => paginate(currentPage - 1)}
            style={{
              color: currentPage === 1 ? "#C4C4C4" : "inherit",
              cursor: "pointer",
            }}
            disabled={currentPage === 1}
          />
          <FaArrowRight
            onClick={() => paginate(currentPage + 1)}
            style={{
              color: indexOfLastItem >= allData.length ? "#C4C4C4" : "inherit",
              cursor: "pointer",
            }}
            disabled={indexOfLastItem >= allData.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
