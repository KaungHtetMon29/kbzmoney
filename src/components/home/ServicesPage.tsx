import Servicecard from "../servicecard";
import consult from "../../assets/consult.png";
import license from "../../assets/license.png";
import train from "../../assets/train.png";
import acc from "../../assets/acc.png";
import rev from "../../assets/review.png";
import lbrev from "../../assets/LBreview.png";
function ServicesPage() {
  const services = [
    { title: "Consulting", image: consult },
    { title: "Licensing", image: license },
    { title: "Training", image: train },
    { title: "Correspondent Account", image: acc },
    { title: "Independent AML/BSA Reviews", image: rev },
    { title: "Look Back Reviews", image: lbrev },
  ];
  return (
    <div className="bg-[#F2FBFF]">
      <div className="2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350rem] mx-auto justify-center items-center flex flex-col py-32 gap-12">
        <div className="flex flex-col sm:gap-8 gap-4 items-center">
          <h2 className="font-semibold  sm:text-[1.8rem]  text-[1.4rem]">
            Our Services
          </h2>
          <p className="lg:text-xl sm:text-base text-sm w-1/2 text-center ">
            KBZ Money leverages technology and our extensive experience to
            create solutions that are forward thinking, anticipatory, holistic,
            and most importantly, effective.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {services.map((e, i) => {
            return <Servicecard key={i} Image={e.image} title={e.title} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default ServicesPage;
