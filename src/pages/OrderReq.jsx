import TitleBar from "../components/TitleBar";
import Period from "../components/Period";
import { useState, useEffect } from "react";

const OrderReq = () => {
  const allData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const data = allData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allData.length / perPage);

  const [pages, setPages] = useState([]);

  useEffect(() => {
    const calculatedPages = [];
    for (let i = 1; i <= totalPages; i++) {
      calculatedPages.push(i);
    }
    setPages(calculatedPages);
  }, [totalPages]);

  const paginate = (pageNumber) => {
    const nextPage = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(nextPage);
  };

  return (
    <>
      <TitleBar title="Order Request" />
      <Period
        periodTitle="Orders Request date from"
        viewTitle="Transactions"
        showing={
          indexOfLastItem > allData.length ? allData.length : indexOfLastItem
        }
        from={allData.length}
      />
      <div className="orders py-8 font-openSans">
        <div className="table-container relative overflow-x-auto shadow-boxShadow rounded-md w-full h-[624px] bg-white">
          <table className="w-full text-sm leading-[20px] text-left rtl:text-right text-textLightx">
            <thead className="text-xs font-bold bg-white text-textBlue uppercase">
              <tr>
                <th scope="col" className="px-6 pt-4 pb">
                  Date & Time
                </th>
                <th scope="col" className="px-6 pt-4 pb">
                  Store Profile
                </th>
                <th scope="col" className="px-6 pb-4 pt-6">
                  SKU
                </th>
                <th scope="col" className="px-6 pb-4 pt-6">
                  Method
                </th>
                <th scope="col" className="px-6 pb-4 pt-6">
                  Type
                </th>
                <th scope="col" className="px-6 pb-4 pt-6">
                  Status
                </th>
                <th scope="col" className="px-6 pb-4 pt-6">
                  Country
                </th>
                <th scope="col" className="px-6 pb-4 pt-6">
                  Curr
                </th>
                <th scope="col" className="px-6 pb-4 pt-6">
                  Fee
                </th>
                <th scope="col" className="px-6 pb-4 pt-6">
                  Tax
                </th>
                <th scope="col" className="px-6 pb-4 pt-6">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr className="odd:bg-greyBg even:bg-white font-[500] font-archivo" key={i}>
                  <th scope="row" className="px-6 py-4 font-bold">
                    <h3 className="font-openSans font-bold text-textDark">
                      03/11/2023
                    </h3>
                    <p className="font-[500]">at 06:30 am</p>
                  </th>
                  <td className="px-6 py-4 flex items-center gap-x-4">
                    <div className="img w-[60px] h-[60px] rounded-lg border border-[#EFF1FF]">
                      <img
                        src="/images/tablePic.png"
                        alt=""
                        className="w-full h-full object-cover object-center rounded-lg"
                      />
                    </div>
                    <p>Albo Store</p>
                  </td>
                  <td className="px-6 py-4">1234</td>
                  <td className="px-6 py-4">Mastercard</td>
                  <td className="px-6 py-4">Payment</td>
                  <td className="px-6 py-4">
                    <p className=" w-[97px] py-1 font-bold text-xs leading-[13.6px] bg-green text-white rounded-full text-center">
                      Waiting
                    </p>
                  </td>
                  <td className="px-6 py-4">USA</td>
                  <td className="px-6 py-4">USD</td>
                  <td className="px-6 py-4">250</td>
                  <td className="px-6 py-4">0.2%</td>
                  <td className="px-6 py-4 font-semibold leading-[20px] text-textDark">
                    249.5
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination py-4 border-b flex items-center gap-2 border-[#E2E1E1] font-openSans">
          {pages.map((p, i) => (
            <button
              key={i}
              className={`page_num w-[2rem] h-[2rem] ${
                currentPage === i + 1
                  ? "bg-textBlue text-white border-transparent"
                  : "bg-white text-textBlue border-textBlue"
              } border rounded-md font-bold text-sm leading-[19.41px] text-center shadow-pageBtn`}
              onClick={() => paginate(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderReq;
