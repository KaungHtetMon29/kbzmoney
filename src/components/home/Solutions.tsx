import Hero3 from "../../assets/Hero3.png";
function Solutions() {
  return (
    <div className="bg-[#015EB9]">
      <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto text-white flex xl:py-48 lg:py-32 py-24 lg:items-end items-center lg:flex-row flex-col-reverse lg:gap-0 gap-6">
        <div className="flex flex-col lg:w-1/2 w-full gap-4 grow sm:text-left text-center lg:text-left lg:items-start items-center">
          <p className="xl:text-[42px] lg:text-[2rem] md:text-[1.5rem]  sm:text-[1.8rem]  text-[1.4rem] leading-normal font-medium">
            Our Solutions
          </p>
          <div className="flex flex-col lg:gap-8 gap-6 w-10/12 lg:text-start text-center">
            <p className="xl:text-xl sm:text-base text-sm  leading-normal">
              KBZ Money leverages technology and our extensive experience to
              create solutions that are forward thinking, anticipatory,
              holistic, and most importantly, effective.
            </p>
            <p className="xl:text-xl sm:text-base text-sm  leading-normal">
              KBZ Money offers a proven skill and delivers best-in-class AML/BSA
              consulting and automated AML/BSA and OFAC compliance solutions to
              financial institutions the world over.
            </p>
            <p className="xl:text-xl sm:text-base text-sm  leading-normal">
              Our deployment strategies are tailored to meet the individual
              needs of our clients in the context of a risk-laden world. Our
              approach is to provide the most protection in the most
              intelligent, effective and cost-efficient manner.
            </p>
          </div>
        </div>
        <div className="flex grow lg:w-fit w-[80%] items-center">
          <img src={Hero3} alt="hero2 img" />
        </div>
      </div>
    </div>
  );
}
export default Solutions;
