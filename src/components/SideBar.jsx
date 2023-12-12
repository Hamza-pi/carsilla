import { useEffect, useState } from "react";
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
        { title: "Analytics", route: "/dashboard/analytics" },
        { title: "Seller Profiles", route: "/dashboard/sellerprofiles" },
        { title: "User Profiles", route: "/dashboard/userprofiles" },
      ],
    },
    {
      title: "Services",
      route: "/admin/services",
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
      title: "Orders Requested",
      route: "",
    },
    {
      title: "Settings",
      route: "/admin/setting",
    },
  ];

  useEffect(() => {
    location.pathname.includes("/admin") ? setDropDown(false) : null;
  }, [location.pathname]);

  return (
    <div className="lg:w-auto scrollbar w-full relative">
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
            <li
              key={i}
              className="min-w-full font-bold last:border-t last:py-4"
            >
              <Link
                to={link.route}
                className={`lg:py-3 py-1 lg:px-14 px-4 w-full flex items-center justify-between hover:bg-greyBg border  hover:border-borderColor rounded-lg transition-all delay-150 ease-linear ${
                  i === 0
                    ? location.pathname.includes("/dashboard")
                      ? "bg-greyBg border-borderColor"
                      : "bg-white border-transparent"
                    : i === links.length - 1
                    ? location.pathname.includes("/setting")
                      ? "bg-greyBg border-borderColor"
                      : "bg-white border-transparent"
                    : location.pathname === link.route
                    ? "bg-greyBg border-borderColor"
                    : "bg-white border-transparent"
                }`}
                onClick={() => {
                  i === 0 ? setDropDown(!dropDown) : setDropDown(false);
                }}
              >
                {link.title}
                {
                  i===links.length-2?<span className="px-2 py-1 bg-[#00BA9D] text-white font-archivo font-bold text-[13px] leading-[14.14px] text-center rounded-lg">
                  247
                </span>:null
                }
              </Link>
              {link.subLinks?.length > 0 && dropDown ? (
                <ul className="w-[80%] float-right py-2">
                  {link.subLinks.map((subLink, j) => (
                    <li key={j}>
                      <Link
                        to={subLink.route}
                        className={`py-2 px-4 w-full flex hover:bg-greyBg border hover:border-borderColor rounded-lg transition-all delay-150 ease-linear ${
                          location.pathname === subLink.route
                            ? "bg-greyBg border-borderColor"
                            : "bg-white border-transparent"
                        }`}
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
