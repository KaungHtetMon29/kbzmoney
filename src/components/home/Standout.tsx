import Hero4 from "../../assets/Hero4.png";
import { Arrow } from "../../assets/svgs";
import CustBtn from "../btns/Custombtn";
function WhyStandout() {
  return (
    <div className="bg-white">
      <div className="2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350px] mx-auto flex lg:py-48 py-36 items-center lg:flex-row flex-col lg:gap-0 gap-4">
        <div className="flex grow lg:w-fit w-[80%]">
          <img src={Hero4} alt="hero4 img" />
        </div>
        <div className="flex flex-col lg:w-1/2 w-10/12 gap-6 lg:text-left text-center sm:items-start items-center">
          <h2 className="xl:text-[42px] lg:text-[2rem] sm:text-[1.8rem] text-[1.4rem] leading-normal font-medium ">
            Why We Stand Out in the Industry
          </h2>
          <p className="xl:text-xl sm:text-base text-sm  leading-relaxed">
            KBZ Money Compass Group is a consulting, services and technology
            firm with a long established legacy of leadership, innovation, and
            trust in the anti-money laundering compliance field in the United
            States, Latin America, Europe, Africa, the Middle East and the Far
            East. Since its inception we have focused on innovative ways to
            deliver cutting edge Compliance solutions to our clients in a
            dynamic and fast-changing regulatory landscape.
          </p>
          <div className="flex mx-auto">
            <CustBtn text="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyStandout;
