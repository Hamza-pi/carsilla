import moment from "moment";

const TitleBar = ({ title }) => {

  const currentDate = moment().format('MMMM DD, YYYY hh:mm A')

  return (
    <div className="bg-white shadow-boxShadow px-4 py-2 rounded-md font-openSans flex sm:flex-row flex-col gap-4 items-center justify-between text-textDark my-6">
      <h2 className="font-semibold text-[38px] leading-[51.75px]">{title}</h2>
      <div className="flex items-center text-sm gap-x-8">
        <p className="leading-[20px]">Date Refreshed</p>
        <p className="bg-[#F9F9F9] px-6 py-2 rounded-md border border-[#F1F1F1] lelading-[19.07px] tracking-[.41px]">
          {currentDate}
        </p>
      </div>
    </div>
  );
};

export default TitleBar;
