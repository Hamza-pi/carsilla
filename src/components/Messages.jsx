import { IoMdArrowDropup } from "react-icons/io";

const Messages = () => {
  return (
    <div className="absolute z-40 sm:top-16 top-32 sm:right-0 py-6 bg-white font-openSans sm:w-[342px] w-[300px] rounded-lg">
      <h3 className="font-bold text-textDark text-[20px] leading-[24px] px-4 relative">
        Messages
      </h3>
      <div className="absolute -top-5 sm:right-[22%] right-[50%] text-[2rem] text-white">
        <IoMdArrowDropup />
      </div>
      <ul className="flex items-center gap-x-2 text-sm font-bold leading-[18px] text-textDark py-2 px-4">
        <li className="pr-4 border-r border-textDark">
          All{" "}
          <span className="font-archivo text-textMd font-normal">(1234)</span>
        </li>
        <li className="font-bold text-textBlue pr-4 border-r border-textDark">
          Latest{" "}
          <span className="font-archivo text-textMd font-normal">(3)</span>
        </li>
        <li className="font-bold text-textBlue ">
          Archive{" "}
          <span className="font-archivo text-textMd font-normal">(3)</span>
        </li>
      </ul>
      <ul className=" my-3 max-h-[30vh] sm:max-h-[50vh] 2xl:max-h-[64vh] overflow-x-hidden overflow-y-scroll">
        {[1, 2, 3, 4, 5, 6, 7].map((notif, i) => (
          <li
            key={i}
            className="flex items-start gap-x-2 odd:bg-greyBg transition-colors cursor-pointer px-4 py-6 hover:border-transparent last:border-none border-b border-[#F1F1F1]"
          >
            <div className="img w-[36px] rounded-lg">
              <img
                src="/images/placeholder.png"
                alt=""
                className="w-full rounded-lg object-cover object-centers"
              />
            </div>
            <div className="details space-y-1">
              <h3 className="font-bold text-sm leading-[20px] text-textDark">
                J. Davidson
              </h3>
              <div className="font-archivo font-[500] text-xs leading-[20px] flex items-center gap-x-2 text-textGrey">
                <p>2h ago</p>
                <p>at 8:08am</p>
              </div>
              <p className="text-sm font-archivo leading-[20px]">
                Maecenas elementum egestas ante, ac blandit orci ...
              </p>
              <div
                className={`buttons flex items-center gap-x-4 font-bold text-xs leading-[16.34px]`}
              >
                <button className="w-[70px] py-1 rounded-full bg-[#00BA9D] text-white border border-transparent">
                  Reply
                </button>
                <button className="w-[119px] py-1 rounded-full border border-pink text-pink">
                  Mark as Read
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="px-4">
        <button className=" w-full py-2 rounded-full bg-textBlue text-white font-bold shadow-btnShadow3">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Messages;
