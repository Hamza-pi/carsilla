import TitleBar from "../components/TitleBar";
import Chart from "../components/Chart";

const Analytics = () => {
  const stats = [
    {
      count: 1200,
      title: "Users",
      icon: "/images/icond.png",
      stat: 45.12,
      status: true,
    },
    {
      count: 200,
      title: "Service Provider",
      icon: "/images/icont.png",
      stat: 12,
      status: false,
    },
    {
      count: 5234,
      title: "New Orders",
      icon: "/images/icons.png",
      stat: 14.56,
      status: true,
    },
  ];

  const reportItems = [
    {
      title: "User Spendings",
      spending: "$176,120",
      stat: 45.0,
      status: true,
    },
    {
      title: "Service Providers",
      spending: "$310,452",
      stat: 12,
      status: false,
    },
    {
      title: "Profit",
      spending: "$342,558",
      stat: 14.56,
      status: true,
    },
  ];

  return (
    <div className="font-openSans pb-8">
      <TitleBar title={"Analytics"} />
      {/* Stats */}
      <div className="stats flex xl:flex-row flex-col items-start gap-4 justify-between pb-4">
        {/* Left */}
        <div className="stat xl:w-[65%] flex sm:flex-row flex-col items-start gap-4 bg-white px-3 py-4 rounded-xl shadow-boxShadow">
          <img
            src="/images/ProfileLogo.png"
            alt=""
            className="border border-bGrey rounded-md sm:w-auto sm:h-auto h-[15rem] w-full object-cover object-center"
          />
          <div>
            {/* Intro */}
            <div className="pb-2">
              <h3 className="text-[28px] leading-[34px] text-textDark">
                Carsilla
              </h3>
              <p className=" font-roboto text-sm leading-[16.41px] text-textLight py-1">
                Carsilla offers complete auto care for your vehicle. Whether
                it’s time for your next factory recommended maintenance visit, a
                routine oil change, new tires, or repair services
              </p>
            </div>
            {/* Stats Container */}
            <div>
              <h4 className="font-bold text-[20px] leading-[24px] text-textDark">
                Average Rate 2023
              </h4>
              <div className="flex flex-wrap gap-y-2 items-center justify-between py-4 pr-3">
                {/* stats */}
                {stats.map((stat, i) => (
                  <div
                    className="stat flex items-start justify-start gap-4"
                    key={i}
                  >
                    <img src={stat.icon} alt="" />
                    <div>
                      <h6 className="font-semibold text-[32px] leading-[43.58px] text-textDark">
                        {stat.count}
                      </h6>
                      <p className="font-bold leading-[21px] text-[#6E757F]">
                        {stat.title}
                      </p>
                      <p
                        className={`font-bold leading-[19px] ${
                          stat.status ? "text-green" : "text-pink"
                        } text-center pt-2`}
                      >
                        {stat.status ? `+${stat.stat}%` : `-${stat.stat}%`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="xl:w-[35%] w-full h-[270px] shadow-boxShadow rounded-xl relative">
          <img
            src="/images/banner.png"
            alt=""
            className="w-full h-full object-cover object-left rounded-md"
          />
          <div className="absolute top-1/3 right-5 text-textDark">
            <h3 className="font-semibold text-[38px] leading-[51.75px]">
              $476,3k
            </h3>
            <p className="font-bold leading-[22px]">Total Balance</p>
          </div>
        </div>
      </div>
      {/* chart */}
      <div className="chart_container flex xl:flex-row flex-col items-start gap-4">
        <div className="chart xl:w-[65%] w-full bg-white shadow-boxShadow rounded-xl px-4 sm:px-8 py-4 sm:py-6">
          <Chart />
        </div>
        <div className="report xl:w-[35%] w-full bg-white shadow-boxShadow rounded-xl px-4 sm:px-4 py-4 sm:py-8">
          <h3 className="font-bold text-[24px] leading-[36px] text-textDark">
            Total Report
          </h3>
          <p className=" font-archivo leading-[24px] text-textLight">
            All Periods per 01/01/2022 - 08/282023
          </p>
          <div className="reportItems flex flex-col gap-8 w-full py-8">
            {reportItems.map((item, i) => (
              <div key={i} className="item flex items-center gap-x-2 bg-[#F9F9F9] border border-borderColor px-3 py-3.5 rounded-md">
                <div className="img w-[52px] rounded-md">
                  <img
                    src="/images/reportIcon.png"
                    alt=""
                    className="w-full h-full object-cover object-center rounded-md"
                  />
                </div>
                <div className="details w-full flex items-center gap-x-3 justify-between text-textDark font-bold">
                  <h6 className="leading-[22px]">{item.title}</h6>
                  <p className="text-sm leading-[20px]">{item.spending}</p>
                  <p
                        className={`font-bold leading-[19px] ${
                          item.status ? "text-green" : "text-pink"
                        } text-center pt-2`}
                      >
                        {item.status ? `+${item.stat}%` : `-${item.stat}%`}
                      </p>
                </div>
              </div>
            ))}
          </div>
          <button className="border-none outline-none w-full rounded-full py-3 bg-primary text-white font-bold leading-[21.79px] shadow-btnShadow2">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
