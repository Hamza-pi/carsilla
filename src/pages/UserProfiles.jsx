import { useEffect, useState } from "react";
import Period from "../components/Period";
import TitleBar from "../components/TitleBar";
import UserProfCard from "../components/UserProfCard";

const UserProfiles = () => {
  
  const allData = [1, 2, 3, 4, 5, 6, 7, 8];

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;
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
    <div>
      <TitleBar title={"User Profiles"} />
      <Period
        periodTitle="Sales Period"
        viewTitle="Profiles"
        showing={
          indexOfLastItem > allData.length ? allData.length : indexOfLastItem
        }
        from={allData.length}
      />
      <div className="profiles py-8">
        <div className="flex flex-col gap-6">
          {data.map((item, i) => (
            <UserProfCard key={i} />
          ))}
        </div>
        <div className="pagination py-4 border-b flex items-center gap-2 border-[#E2E1E1] font-roboto">
          {pages.map((p, i) => (
            <button
              key={i}
              className={`page_num w-[2rem] h-[2rem] ${
                currentPage === i + 1
                  ? "bg-[#00BA9D] text-white border-[#00BA9D]"
                  : "bg-[#F9F9F9] text-[#00BA9D] border-[#00BA9D]"
              } border rounded-md font-bold text-sm leading-[19.41px] text-center shadow-pageBtn`}
              onClick={() => paginate(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfiles;
