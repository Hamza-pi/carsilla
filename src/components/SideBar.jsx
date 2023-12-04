import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FcMenu } from "react-icons/fc";

const SideBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const links = [
    {
      title: "Dashboard",
      route: "/dashboard",
      subLinks: [
        { title: "Analytics", route: "/dashboard" },
        { title: "Seller Profiles", route: "/dashboard" },
        { title: "User Profiles", route: "/dashboard" },
      ],
    },
    {
      title: "Services",
      route: "",
    },
    {
      title: "Orders",
      route: "",
    },
    {
      title: "Statistics",
      route: "",
    },
    {
      title: "Reviews",
      route: "",
    },
    {
      title: "Customers",
      route: "",
    },
    {
      title: "Transactions",
      route: "",
    },
    {
      title: "Settings",
      route: "",
    },
  ];

  return (
    <div className="lg:w-auto w-full relative">
      {/* Menu Icon */}
      <div className="lg:w-0 w-full px-4 bg-greyBg z-40">
        <FcMenu
          className="text-2xl text-black  lg:hidden"
          onClick={() => setMenu(!menu)}
        />
      </div>
      <div
        className={`sm:w-[320px] 2xl:w-[374px] w-[250px] bg-white z-20 flex flex-col gap-y-4 items-center lg:pt-12 pt-6 min-h-screen shadow-sideShadow font-openSans transition-transform lg:static fixed ${
          menu ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="logo">
          <img src="/images/Logosm.png" alt="logo" />
        </div>
        {/* Links */}
        <ul className="sm:w-[266px] 2xl:w-[320px] w-[200px] h-full justify-center flex flex-col gap-y-2">
          {links.map((link, i) => (
            <li key={i} className="min-w-full font-bold last:border-t">
              <Link
                to={link.route}
                className={`lg:py-3 py-1 lg:px-14 px-4 w-full flex hover:bg-greyBg border  hover:border-borderColor rounded-lg transition-all delay-150 ease-linear ${
                  location.pathname === link.route
                    ? "bg-greyBg border-borderColor"
                    : "bg-white border-transparent"
                }`}
                onClick={() => {
                  i === 0 ? setDropDown(!dropDown) : null;
                }}
              >
                {link.title}
              </Link>
              {link.subLinks?.length > 0 && dropDown ? (
                <ul className="w-[80%] float-right py-2">
                  {link.subLinks.map((subLink, j) => (
                    <li key={j}>
                      <Link
                        to={subLink.route}
                        className="py-2 px-4 w-full flex hover:bg-greyBg border border-transparent hover:border-borderColor rounded-lg transition-all delay-150 ease-linear"
                      >
                        {subLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
