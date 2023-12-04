import UserSearch from "../components/UserSearch";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const Users = () => {
  const data = [
    {
      name: "David Wagner",
      id: "LA-0234",
      lorem: "Lorem Ipsum",
      date: "30 Apr, 2017 to 24 Otc 2020",
      ipsum: "Lorem Ipsum",
    },
    {
      name: "David Wagner",
      id: "LA-0234",
      lorem: "Lorem Ipsum",
      date: "30 Apr, 2017 to 24 Otc 2020",
      ipsum: "Lorem Ipsum",
    },
    {
      name: "David Wagner",
      id: "LA-0234",
      lorem: "Lorem Ipsum",
      date: "30 Apr, 2017 to 24 Otc 2020",
      ipsum: "Lorem Ipsum",
    },
  ];

  const stats = [
    {
      title: "Lorem Ipsum",
      count: 614,
    },
    {
      title: "Lorem Ipsum",
      count: 124,
    },
    {
      title: "Lorem Ipsum",
      count: 504,
    },
    {
      title: "Lorem Ipsum",
      count: 100,
    },
  ];

  return (
    <div className="font-openSans flex flex-col gap-6 pb-10">
      <h2 className="font-bold text-[1.5rem] leading-[2rem] text-secondary">
        Users
      </h2>
      <UserSearch />
      {/* Stats */}
      <div className="flex sm:flex-row flex-col items-center justify-between gap-4">
        {stats.map((stat, i) => (
          <div className="w-full bg-white py-6 px-3 space-y-2 rounded-lg border-[1px] border-lightBlue" key={i}>
            <h3 className="text-[13px] leading-[1rem] text-lightGrey">
              {stat.title}
            </h3>
            <p className="font-bold text-[20px] leading-[1.5rem]">{stat.count}</p>
          </div>
        ))}
      </div>
      {/* Users List */}
      <div className="bg-white border-[1px] border-lightBlue rounded-2xl pt-10">
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
                <th scope="col" className="px-6 pb-6">
                  User ID
                </th>
                <th scope="col" className="px-6 pb-6">
                  Lorem Ipsum
                </th>
                <th scope="col" className="px-6 pb-6">
                  Date
                </th>
                <th scope="col" className="px-6 pb-6">
                  Lorem Ipsum
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
                  </td>
                  <td className="px-6 py-4 text-center">{item.id}</td>
                  <td className="px-6 py-4">{item.lorem}</td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">{item.ipsum}</td>
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
    </div>
  );
};

export default Users;
