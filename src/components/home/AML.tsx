import { Arrow } from "../../assets/svgs";
function Platforms() {
  return (
    <div className="bg-BG2 bg-no-repeat bg-cover xl:bg-center lg:bg-center ">
      <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350px] mx-auto text-white flex py-48  items-center lg:justify-start justify-center">
        <div className="flex flex-col w-[32rem] gap-8 lg:text-start text-center lg:items-start items-center">
          <p className="lg:text-[42px] sm:text-[1.8rem]  text-[1.4rem] leading-normal font-medium">
            AML Compass Technology Platforms
          </p>
          <div className="flex flex-col gap-8 w-fit">
            <p className="lg:text-xl sm:text-base leading-normal">
              Our proprietary AML Compass Suite is a fully automated compliance
              solution for banks and non-bank financial institutions including
              hedge funds, broker dealers, insurance companies, and domestic and
              international MSBs that have regulatory reporting and control…
            </p>
          </div>
          <button className="bg-white px-12 py-4 w-fit text-primarybluelight rounded-full flex items-center text-base gap-3">
            Learn More
            <div className="w-7">
              <Arrow color="#015EB9" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Platforms;
