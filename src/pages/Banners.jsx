import TitleBar from "../components/TitleBar";
const Banners = () => {
  const sm_banners = [
    "/images/Banner1.png",
    "/images/Banner2.png",
    "/images/Banner3.png",
  ];

  const md_banners = [
    "/images/Banner4.png",
    "/images/Banner5.png",
    "/images/Banner6.png",
  ];

  const row_banners = [
    "/images/BannerR1.png",
    "/images/BannerR2.png",
    "/images/BannerR3.png",
  ];

  return (
    <>
      <TitleBar title={"Banners & Offers"} />
      <div className="col_banner_cont flex sm:flex-row flex-col items-start justify-between">
        {/* Left */}
        <div className="left flex flex-col gap-y-4">
          <div className="sm_banners w-full flex sm:flex-row flex-col items-start 2xl:gap-x-11 xl:gap-x-6 gap-x-4 gap-y-4">
            {sm_banners.map((banner, i) => (
              <div key={i}>
                <img src={banner} alt="" />
              </div>
            ))}
          </div>
          <div className="md_banners w-full flex sm:flex-row flex-col items-start 2xl:gap-x-6 xl:gap-x-4 gap-x-2 gap-y-4">
            {md_banners.map((banner, i) => (
              <div key={i}>
                <img src={banner} alt="" />
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="large_banners">
          <div>
            <img src="/images/vBanner.png" alt="" />
          </div>
        </div>
      </div>
      <div className="row_banners flex sm:flex-row flex-col items-center 2xl:gap-x-6 xl:gap-x-4 gap-x-2 gap-y-2">
        {row_banners.map((banner, i) => (
          <div key={i}>
            <img src={banner} alt="" className="w-full object-cover object-center" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Banners;
