import { TbLineScan } from "react-icons/tb";
import { MdDiamond } from "react-icons/md";
import CSwitch from "./CSwitch";
import { useReducer } from "react";
import { Link } from "react-router-dom";

const UserProfCard = () => {
  const initialState = {
    workShop: {
      accessibility: false,
      fee: false,
    },
    assistance: {
      accessibility: false,
      fee: false,
    },
    insurance: {
      accessibility: false,
      fee: false,
    },
    spareParts: {
      accessibility: false,
      fee: false,
    },
  };

  const switchReducer = (state, action) => {
    switch (action.type) {
      case "workShop_access":
        return {
          ...state,
          workShop: {
            ...state.workShop,
            accessibility: action.payload,
          },
        };
      case "workShop_fee":
        return {
          ...state,
          workShop: {
            ...state.workShop,
            fee: action.payload,
          },
        };
      case "assistance_access":
        return {
          ...state,
          assistance: {
            ...state.assistance,
            accessibility: action.payload,
          },
        };
      case "assistance_fee":
        return {
          ...state,
          assistance: {
            ...state.assistance,
            fee: action.payload,
          },
        };
      case "insurance_access":
        return {
          ...state,
          insurance: {
            ...state.insurance,
            accessibility: action.payload,
          },
        };
      case "insurance_fee":
        return {
          ...state,
          insurance: {
            ...state.insurance,
            fee: action.payload,
          },
        };
      case "spareParts_access":
        return {
          ...state,
          spareParts: {
            ...state.spareParts,
            accessibility: action.payload,
          },
        };
      case "spareParts_fee":
        return {
          ...state,
          spareParts: {
            ...state.spareParts,
            fee: action.payload,
          },
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(switchReducer, initialState);

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

  const options = [
    {
      title: "Workshop",
      accessibility: state.workShop.accessibility,
      fee: state.workShop.fee,
      type: "workShop_access",
      type2: "workShop_fee",
    },
    {
      title: "Home/Road Assistance",
      accessibility: state.assistance.accessibility,
      fee: state.assistance.fee,
      type: "assistance_access",
      type2: "assistance_fee",
    },
    {
      title: "Car Insurance",
      accessibility: state.insurance.accessibility,
      fee: state.insurance.fee,
      type: "insurance_access",
      type2: "insurance_fee",
    },
    {
      title: "Spare Parts",
      accessibility: state.spareParts.accessibility,
      fee: state.spareParts.fee,
      type: "spareParts_access",
      type2: "spareParts_fee",
    },
  ];

  return (
    <div className="bg-white shadow-boxShadow rounded-md py-4 px-3 font-openSans flex flex-wrap gap-6 items-start justify-between">
      {/* User Details */}
      <div className="details flex sm:w-auto w-full sm:flex-row flex-col items-start justify-between gap-6">
        <div className="left flex flex-col gap-6 sm:w-auto w-full">
          <div className="image sm:w-[191px] w-full h-[156px] rounded-xl">
            <img
              src="/images/seller1.png"
              alt="SellerImage"
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </div>
          <Link to="/admin/setting/user">
            <button className="bg-[#00BA9D] border border-[#01C8A9] w-full rounded-full py-2 text-white font-bold leading-[21.79px] shadow-btnShadow2">
              Profile
            </button>
          </Link>
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
      <div className="switches_container flex items-start 2xl:gap-x-14 justify-between 2xl:w-auto w-full font-roboto">
        <div className="access">
          <h3 className="font-bold text-[20px] leading-[24px] text-textDark">
            Services Accessibility
          </h3>
          <ul className="switches pt-3 flex flex-col gap-6">
            {options.map((item, i) => (
              <li key={i} className="flex items-center justify-between">
                <p className="font-bold text-sm leading-[21px] text-profileCard">
                  {item.title}
                </p>
                <CSwitch
                  checked={item.accessibility}
                  dispatch={dispatch}
                  type={item.type}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="fee">
          <h3 className="font-bold text-[20px] leading-[24px] text-textDark">
            Service Fee on Order
          </h3>
          <ul className="switches pt-3 flex flex-col gap-6">
            {options.map((item, i) => (
              <li key={i} className="flex items-center justify-center">
                <CSwitch
                  checked={item.fee}
                  dispatch={dispatch}
                  type={item.type2}
                />
              </li>
            ))}
          </ul>
          {/* Buttons */}
          <div className="buttons pt-3 flex items-center gap-2">
            <button className="w-[83px] h-[40px] border border-[#DCDCDC] bg-[#F1F1F1] rounded-lg font-[500] text-sm leading-[16.94px] text-[#202020]">
              Discard
            </button>
            <button className="w-[83px] h-[40px] border border-[#DCDCDC] bg-primary rounded-lg font-[500] text-sm leading-[16.94px] text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfCard;
