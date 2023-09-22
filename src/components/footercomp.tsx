import logowhite from "../assets/logowhite.png";
import { Link } from "react-router-dom";
import {
  Contact,
  Fb,
  Footerbg,
  Insta,
  Linkedin,
  Locationpin,
  Plane,
  Twitter,
} from "../assets/svgs";
function Footercomp() {
  const linkdata = [
    "Home",
    "Services",
    "AML Technology",
    "Crypto Currencies",
    "Resources",
  ];
  const linkdata2 = ["Contact", "About Us", "Client Support", "Alerts"];
  const aboutusdata = [
    "Disclaimer",
    "Privacy Policy",
    "Terms of Services",
    "Carrier",
  ];
  return (
    <>
      <div className="bg-footermail text-white xl:text-[2.5rem] lg:text-[1.8rem] md:text-[1.5rem] sm:text-[1.0rem] text-base leading-tight">
        <div className="2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350px] mx-auto lg:py-16 md:py-8 sm:py-6 py-6 flex items-center sm:flex-row flex-col sm:gap-0 gap-4">
          <div className="flex grow ">
            <h2 className="lg:w-[32rem] md:w-[20rem] sm:w-[13rem] w-full sm:text-start text-center font-semibold">
              Subscribe Newslatter & get KBZ Money Alerts
            </h2>
          </div>
          <div className="sm:text-base text-sm flex sm:gap-4 gap-2 h-fit">
            <input
              className="sm:py-2 py-0 px-2 xl:w-[24rem] lg:w-72 md:w-56 sm:w-52 border-2 bg-footermail border-white text-white rounded-lg"
              placeholder="Email address"
            />
            <button className="bg-white h-auto py-2 px-6 border-2 border-white rounded-lg text-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-footermain md:pt-32 pt-16 pb-8 text-white relative">
        <div className="2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350px] mx-auto z-50 relative">
          <div className=" flex sm:flex-row flex-col sm:items-start items-center pb-24 sm:gap-0 gap-20">
            <div className="flex flex-col gap-8 xl:text-base md:text-sm sm:text-xs text-xs grow items-center">
              <div className="flex xl:w-72 lg:w-64 md:w-48 sm:w-40 w-32">
                <img src={logowhite} />
              </div>
              <div className="flex flex-col gap-4 xl:w-[22rem] lg:w-[20rem] md:w-[12rem] sm:w-[10rem] w-[16rem] sm:items-start ">
                <div className="flex items-center gap-4">
                  <div className="w-4">
                    <Locationpin />
                  </div>
                  <p className="w-fit">
                    1250 Capital of Texas Hwy. South Building 3, Suite 400
                    Austin, TX 78746
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4">
                    <Plane />
                  </div>

                  <p>Support: admin@kbzmoney.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4">
                    <Contact />
                  </div>
                  <p>Hotline: +959 7980 65880</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-8 sm:gap-4 gap-4 lg:text-base md:text-sm sm:text-xs text-sx w-fit grow items-center">
              <div>
                <h2 className="text-xl font-bold">Quick Links</h2>
              </div>
              <div className="flex xl:gap-32 lg:gap-16 md:gap-10 sm:gap-8 gap-6  items-start">
                <div className="flex flex-col gap-4">
                  {linkdata.map((e, i) => (
                    <Link to="#" className="text-base font-light" key={i}>
                      {e}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  {linkdata2.map((e, i) => (
                    <Link to="#" className="text-base font-light" key={i}>
                      {e}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 lg:text-base md:text-sm sm:text-xs w-fit sm:items-start items-center">
              <div>
                <h2 className="lg:text-xl md:text-lg sm:text-base text-base font-bold">
                  About Us
                </h2>
              </div>
              <div className="flex">
                <div className="flex flex-col gap-4 md:items-start items-center">
                  {aboutusdata.map((e, i) => (
                    <Link to="#" className="text-base font-light" key={i}>
                      {e}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr className="opacity-50" />
          <div className="pt-8 flex items-center">
            <div className="flex grow">
              <p className="sm:text-base text-xs">
                Copyright © 2022{" "}
                <span className="text-custorange">KBZ Money</span>. All Rights
                Reserved.
              </p>
            </div>
            <div className="flex sm:gap-4 gap-2">
              <div className="w-8">
                <Fb />
              </div>
              <div className="w-8">
                <Linkedin />
              </div>
              <div className="w-8">
                <Insta />
              </div>
              <div className="w-8">
                <Twitter />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 opacity-50 w-full">
          <Footerbg />
        </div>
      </div>
    </>
  );
}
export default Footercomp;
