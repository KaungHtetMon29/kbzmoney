import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Lens, Mail, Phone } from "../assets/svgs";
import { useState } from "react";

function Navcomp() {
  const [navtype, setnavtype] = useState("home");
  const [search, setsearch] = useState(false);
  return (
    <div className="fixed top-0 z-[999] w-full bg-white">
      <div className=" py-4 bg-contactbar">
        <div className="2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl lg:text-base md:text-xs sm:text-[.6rem] text-[.4rem] md:max-w-2xl sm:max-w-xl max-w-[350px] mx-auto flex items-center">
          <div className="flex sm:gap-4 gap-2 items-center grow">
            <Phone />
            <p>+959 7980 65880</p>
          </div>
          <div className="grow">
            <p>UPDATES – Click Here for KBZ Money News Alerts – UPDATES</p>
          </div>
          <div className="flex sm:gap-4 gap-2 items-center">
            <p>admin@kbzmoney.com</p>
            <Mail />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center 2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350px]  mx-auto relative ">
        <div className="flex flex-grow">
          <img
            src={logo}
            alt="logo"
            className="lg:w-[14.1rem] md:w-[10rem] sm:w-[10rem] w-[6rem] "
          />
        </div>
        <div className="flex items-center xl:gap-24 md:gap-16 sm:gap-8 gap-3 grow font-semibold sm:text-base text-xs ">
          <Link
            onClick={() => {
              setnavtype("home");
            }}
            to={""}
            className={`text-black flex py-4 sm:px-2 px-[1px] ${
              navtype === "home"
                ? "border-b-4 border-primarybluelight text-primarybluelight"
                : "border-none"
            } `}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setnavtype("blog");
            }}
            to={"blog"}
            className={`text-black flex py-4  sm:px-2 px-[1px] ${
              navtype === "blog"
                ? "border-b-4 border-primarybluelight  text-primarybluelight"
                : "border-none"
            } `}
          >
            Blog
          </Link>
        </div>
        <div className="flex items-center sm:gap-8 gap-4">
          <input
            className={`sm:py-2 px-2 xl:w-80 lg:w-64 sm:w-44 w-24 ${
              search
                ? "border-[1px] border-footermail pointer-events-auto rounded-md"
                : "border-0 pointer-events-none"
            }`}
          />
          <div
            onClick={() => {
              setsearch(!search);
            }}
          >
            <Lens />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navcomp;
