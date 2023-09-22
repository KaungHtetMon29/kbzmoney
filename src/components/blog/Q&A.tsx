import qa from "../../assets/qa.png";
import qa2 from "../../assets/qa2.png";
import CustBtn from "../btns/Custombtn";
function Question() {
  return (
    <div className="relative py-32">
      <div className="absolute bottom-0 left-0 w-[20%] ">
        <img src={qa} />
      </div>
      <div className="absolute right-0 top-0 w-[20%] -rotate-180">
        <img src={qa2} />
      </div>
      <div className="flex flex-col items-center gap-12 z-20 relative">
        <h2 className="text-[38px] font-semibold 2xl:w-[25%] xl:w-[40%] lg:w-[50%] md:w-[70%] sm:w-[70%] text-center">
          Have Questions or Need to Book a Consultation?
        </h2>
        <CustBtn text="Contact Us Now" />
      </div>
    </div>
  );
}
export default Question;
