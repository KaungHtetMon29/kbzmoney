import { Link } from "react-router-dom";
import bhero from "../../assets/bloghero.png";
import bhero2 from "../../assets/bloghero2.png";
function Bloghero() {
  return (
    <div className="relative pt-52 pb-24 bg-footermain">
      <div className="2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350px] mx-auto gap-3 items-center text-center flex flex-col  text-white">
        <h1 className="text-[2.2rem]">Blog</h1>
        <div className="flex justify-center gap-4">
          <Link to={"/"} className="text-base opacity-50">
            Home
          </Link>
          <p> &gt;</p>
          <Link to={"/"} className="text-base">
            Blog
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0">
        <img src={bhero} alt="bhero" />
      </div>
      <div className="absolute -bottom-5 right-0">
        <img src={bhero2} alt="bhero" />
      </div>
    </div>
  );
}
export default Bloghero;
