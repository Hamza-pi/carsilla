import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      {/* Logo Side */}
      <div className=" bg-greyBg w-[53%] h-full sm:flex hidden flex-col items-center justify-center">
        <img src="/images/logo.png" alt="Carsilla Logo" />
      </div>
      {/* Login Form */}
      <div className="sm:w-[47%] w-full">
        <form className="lg:w-[80%] w-full mx-auto text-center">
          <h1 className="font-sourceSans font-normal text-[2.38rem] text-textDark">
            Welcome back!
          </h1>
          <p className=" font-roboto text-sm text-textLight 2xl:w-[70%] w-[90%] mx-auto py-1">
            Carsilla offers complete auto care for your vehicle. Whether it’s
            time for your next factory recommended maintenance visit, a routine
            oil change, new tires, or repair services
          </p>
          {/* Inputs */}
          <div className="text-left px-6 font-archivo py-3 2xl:w-[80%] w-full mx-auto">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block pb-2 text-xs font-bold text-textGrey"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="text-base text-textGrey rounded-lg block w-full py-2 px-4 border-[1px] border-bGrey outline-none"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block pb-2 text-xs font-bold text-textGrey"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="text-base text-textGrey rounded-lg block w-full py-2 px-4 border-[1px] border-bGrey outline-none"
                placeholder="Enter Your Password (6 characters)"
                required
              />
            </div>
            {/* Buttons */}
            <div className="buttons font-openSans font-semibold flex flex-col xl:gap-8 gap-3">
              <Link to="/">
                <h3 className="text-sm text-center text-textBlue">
                  Forgot Password?
                </h3>
              </Link>
              <Link to="/dashboard">
                <button className="w-full bg-primary rounded-full py-3 text-white text-base">
                  Login
                </button>
              </Link>
            </div>
            {/* Divider */}
            <div className="relative xl:py-8 py-4 font-archivo">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-b border-bGrey"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-base">or</span>
              </div>
            </div>
            {/* Social logins */}
            <div className="w-full flex items-center justify-between font-openSans font-bold text-sm">
              <Link to="/" className="w-[48%]">
                <button className="flex items-center justify-center gap-4 py-2.5 border border-textBlue rounded-full w-full">
                  <FcGoogle className="text-[1.4rem]" />
                  <p>Google</p>
                </button>
              </Link>
              <Link to="/" className="w-[48%]">
                <button className="flex items-center justify-center gap-4 py-2.5 border border-textBlue rounded-full w-full">
                  <FaFacebook className="text-[1.4rem] text-textBlue" />
                  <p>Facebook</p>
                </button>
              </Link>
            </div>
            {/* No Account */}

            <p className="xl:pt-8 pt-3 text-center text-sm text-textMd">
              Don’t You have an account?{" "}
              <Link
                to="/"
                className="font-openSans font-semibold text-textBlue"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
