import Hero1 from "../../assets/Hero1.png";
import Heor2 from "../../assets/Hero2.png";

import { Amloutsource, Amltech, Arrow, Crypt } from "../../assets/svgs";

function HeroSec1() {
  return (
    <div className="relative">
      <div className="absolute md:w-full sm:w-[90%] w-[95%] mx-auto flex items-center justify-center inset-0 xl:top-24 lg:top-10 md:-top-44 sm:-top-80 -top-84 ">
        <div className="z-10 flex mx-auto lg:items-center justify-center lg:gap-10 md:gap-2 sm:gap-2 gap-2 md:items-stretch">
          <div className="bg-primarybluelight flex-auto lg:p-8 md:p-4 sm:p-4 p-2 text-white 2xl:w-96 xl:w-80 lg:w-72 md:w-52 rounded-xl shadow-xl gap-4 flex flex-col md:h-72 sm:h-64 h-56">
            <div className="lg:w-12 md:w-10 sm:w-10 w-8">
              <Amltech />
            </div>
            <div className="sm:gap-8 gap-4 flex flex-col flex-1">
              <h3 className="sm:text-[17px] text-[11px]">AML Technology</h3>
              <p className="md:text-[15px] sm:text-xs text-[10px]">
                KBZ Money’s AML Compass Platform combines cutting-edge
                technology and proven...
              </p>
            </div>
            <p className="cursor-pointer flex items-center gap-2 sm:text-[13px] text-[10px]">
              Get Started
              <div className="w-5">
                <Arrow />
              </div>
            </p>
          </div>
          <div className="bg-white flex-auto llg:p-8 md:p-4 sm:p-4 p-2 text-black 2xl:w-96 xl:w-80 lg:w-72  md:w-52 rounded-xl shadow-xl gap-4 flex flex-col md:h-72 sm:h-64 h-56">
            <div className="lg:w-12 md:w-10 sm:w-10 w-8">
              <Amloutsource color="#0054A6" />
            </div>
            <div className="sm:gap-8 gap-4 flex flex-col flex-1">
              <h3 className="sm:text-[17px] text-[11px]">AML Outsourcing</h3>
              <p className="md:text-[15px] sm:text-xs text-[10px]">
                Compliance as a Service ™ or CAS delivers not just systems
                through its AML Compass...
              </p>
            </div>
            <p className="cursor-pointer flex items-center gap-2 sm:text-[13px] text-[10px] text-primarybluelight">
              Get Started
              <div className="w-5 fill-primarybluelight">
                <Arrow color="#0054A6" />
              </div>
            </p>
          </div>
          <div className="bg-white flex-auto llg:p-8 md:p-4 sm:p-4 p-2 text-black 2xl:w-96 xl:w-80 lg:w-72  md:w-52 rounded-xl shadow-xl gap-4 flex flex-col md:h-72 sm:h-64 h-56">
            <div className="lg:w-12 md:w-10 sm:w-10 w-8">
              <Crypt color="#0054A6" />
            </div>
            <div className="sm:gap-8 gap-4 flex flex-col flex-1">
              <h3 className="sm:text-[17px] text-[11px]">Crypto Currencies</h3>
              <p className="md:text-[15px] sm:text-xs text-[10px]">
                The Crypto currency market is one of the most exciting and
                rapidly developing...
              </p>
            </div>
            <p className="cursor-pointer flex items-center gap-2 sm:text-[13px] text-[10px] text-primarybluelight">
              Get Started
              <div className="w-5 fill-primarybluelight">
                <Arrow color="#0054A6" />
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-BG1 relative">
        <div className="2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350px] mx-auto flex xl:py-48 lg:pt-32 lg:pb-52 md:pt-40 md:pb-52 sm:pt-32 sm:pb-48 pt-32 pb-48 items-center sm:flex-row flex-col-reverse">
          <div className="flex flex-col sm:w-1/2 w-10/12 md:gap-8 sm:gap-5 gap-3 sm:text-left text-center sm:items-start items-center">
            <p className="xl:text-[42px] lg:text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1.2rem] leading-normal font-medium">
              <span className="text-primarybluelight">KBZ Money</span> compass
              anti money laundering technology and services redefined
            </p>
            <p className="lg:text-xl md:text-lg sm:text-sm text-sm leading-loose">
              KBZ Money Compass Group is a consulting, services and technology
              firm with a long established legacy of leadership.
            </p>
            <button className="bg-lightred md:px-12 sm:px-6 md:py-4 py-2 px-4 w-fit text-white rounded-full flex items-center text-base gap-3">
              Get Started
              <div className="md:w-7 sm:w-5 w-5">
                <Arrow />
              </div>
            </button>
          </div>
          <div className="xl:w-full w-[50%]">
            <img src={Hero1} alt="hero1 img" />
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <div className="2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350px] mx-auto flex xl:py-48 lg:pt-52 lg:pb-32 md:pt-52 md:pb-16 pt-48 pb-16 lg:flex-row  flex-col lg:items-end items-center lg:gap-0 gap-4">
          <div className="flex grow lg:w-fit w-[80%] items-center">
            <img src={Heor2} alt="hero2 img" />
          </div>
          <div className="flex flex-col lg:w-1/2  w-10/12 lg:gap-6 md:gap-3 gap-3 md:mx-auto lg:text-start text-center">
            <p className="xl:text-[42px] lg:text-[2rem] md:text-[1.5rem]  sm:text-[1.8rem]  text-[1.4rem] leading-normal font-medium">
              The Current Challenges
            </p>
            <p className="xl:text-xl lg:text-base sm:text-base text-sm leading-relaxed">
              Legal requirements and recent developments compel Financial
              Institutions to adopt comprehensive and effective risk-based
              controls to prevent misuse by money launderers or purveyors of
              terrorist acts.
            </p>
            <p className="xl:text-xl lg:text-base sm:text-base text-sm leading-relaxed ">
              Anti Money Laundering, Terrorism Financing, Fraud, and related
              regulations continue to increase compliance operating costs for
              companies in the financial services space.
            </p>
            <p className="xl:text-xl lg:text-base sm:text-base text-sm  leading-relaxed">
              Untested, rubber stamp solutions adopted to appease regulators
              will not do in today’s environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSec1;
