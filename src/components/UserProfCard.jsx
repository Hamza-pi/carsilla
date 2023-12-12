import { TbLineScan } from "react-icons/tb";
import { MdDiamond } from "react-icons/md";
import Switch from "react-switch";
import { useState } from "react";

const UserProfCard = () => {
  const [checked, setChecked] = useState(false);

  const statItems = [
    {
      count: 234,
      title: "Past Orders",
      icon: <TbLineScan />,
      bg: "bg-[#00BA9D]",
    },
    {
      count: "$23000",
      title: "Total Spent",
      icon: <MdDiamond />,
      bg: "bg-[#0A458F]",
    },
  ];

  return (
    <div className="bg-white shadow-boxShadow rounded-md py-4 px-3 font-openSans flex flex-wrap gap-6 items-start justify-between 2xl:h-[270px] h-auto">
      {/* User Details */}
      <div className="details flex sm:w-auto w-full sm:flex-row flex-col items-start justify-between gap-6">
        <div className="left space-y-6 sm:w-auto w-full">
          <div className="image sm:w-[191px] w-full h-[156px] rounded-xl">
            <img
              src="/images/seller1.png"
              alt="SellerImage"
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </div>
          <button className="bg-[#00BA9D] border border-[#01C8A9] w-full rounded-full py-2 text-white font-bold leading-[21.79px] shadow-btnShadow2">
            Profile
          </button>
        </div>
        <div className="content space-y-4 sm:w-auto w-full sm:block flex items-center justify-between flex-wrap">
          <h3 className="font-bold text-[22px] leading-[34px] text-textDark">
            Workshop
          </h3>
          <div className="font-semibold text-textBlue text-sm leading-[18px]">
            <a href="#" target="_blank" rel="noopener noreferrer">
              www.website.com
            </a>
          </div>
          <p className="font-archivo leading-[24px] text-textLight">
            53 West Cherry Hill Lane <br />
            Murfreesboro, TN 37128
          </p>
          <p className="font-archivo leading-[24px] text-textLight">
            +1(123) 123-123-123
          </p>
          <div className="font-archivo leading-[24px] text-textLight">
            <a href="mailto:emailalbo_store@email.com">
              emailalbo_store@email.com
            </a>
          </div>
        </div>
      </div>
      {/* Statistics */}
      <div className="stat flex sm:flex-row flex-col items-start justify-center gap-6">
        <div className="map sm:w-auto w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.9312001550784!2d-76.58827382456059!3d44.24965871365123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2ada9490bac41%3A0xe3f18fb564f863c0!2sPembridge%20Crescent%2C%20Kingston%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1702287538069!5m2!1sen!2s"
            className="border-none sm:w-[218px] w-full h-[230px] rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="stat_det flex flex-col gap-3 sm:w-auto w-full">
          <h3 className="font-bold text-[22px] leading-[34px] text-textDark">
            Statistic:
          </h3>
          <div className="flex sm:flex-col items-start gap-3">
            {" "}
            {statItems.map((item, i) => (
              <div key={i} className="stat_item flex items-start gap-3">
                <div
                  className={`w-[46px] h-[46px] rounded-lg ${item.bg} text-white text-[2.2rem] flex items-center justify-center`}
                >
                  {item.icon}
                </div>
                <div className="font-bold">
                  <h6 className="text-[1.5rem] leading-[2.25rem] text-textDark">
                    {item.count}
                  </h6>
                  <p className="text-sm leading-[21px] text-profileCard">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <h3 className="font-bold text-[22px] leading-[34px] text-textDark">
            Review Rate:
          </h3>
        </div>
      </div>
      {/* Switch */}
    </div>
  );
};

export default UserProfCard;
