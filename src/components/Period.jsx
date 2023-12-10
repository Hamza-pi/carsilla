import { useRef } from "react";

const Period = ({periodTitle,viewTitle,showing,from}) => {

  const startDate = useRef(null);

  const endDate = useRef(null);

  const inputStyle =
    "outline-none text-sm font-bold leading-[16.41px] tracking-[0.41px] text-textMd";

  return (
    <div>
      <div className="period flex sm:flex-row flex-col gap-4 sm:items-center items-start justify-between">
        <div className="space-y-2 font-roboto">
          <h4 className="text-[20px] leading-[20p] text-textDark font-bold">{periodTitle}:</h4>
          <div className="bg-white px-2 py-3 rounded-xl border border-borderColor flex items-center justify-centerss gap-2">
            <input
              type="date"
              name=""
              className={inputStyle}
              id=""
              ref={startDate}
              onClick={() => startDate.current.showPicker()}
            />{" "}
            -{" "}
            <input
              type="date"
              name=""
              className={inputStyle}
              id=""
              ref={endDate}
              onClick={() => endDate.current.showPicker()}
            />
          </div>
        </div>
        <div className="space-y-2 font-archivo font-emibold leading-[23px] text-textDark">
          <p className="sm:text-right">View {viewTitle} {showing}/{from}</p>
          <div className="bg-white px-4 py-3 rounded-xl border border-borderColor flex items-center text-sm leading-[15.23px] text-[#1B1B1B] font-[500]">
            <label htmlFor="sort">Sort By:</label>
            <select
              name="sort"
              id="sort"
              className="pr-6 bg-transparent border-none outline-none text-textDarkG"
            >
              <option value="date">Best Seller</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>
      <style>
        {`
          /* Custom CSS to hide the default arrow icon */
          input[type='date']::-webkit-calendar-picker-indicator {
            display:none
          }
         
        `}
      </style>
    </div>
  );
};

export default Period;
