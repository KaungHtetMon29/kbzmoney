import Malert from "../moneyalertcard";
import nft from "../../assets/nft.png";
import savbank from "../../assets/savacc.png";
import bank from "../../assets/bank.png";
import av1 from "../../assets/av1.png";
import av2 from "../../assets/av2.png";
import av3 from "../../assets/av3.png";
import { Movearrow } from "../../assets/svgs";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { ModeActions } from "../../utils/Mode";
import { useNavigate } from "react-router-dom";
import CustBtn from "../btns/Custombtn";
import { fetchposts } from "../../utils/fetcher";
import { useEffect, useState } from "react";
function Moneyalert() {
  const Malertarray = [
    {
      title: "Major Crypto Exchanges Face Action Over",
      image: nft,
      acc: {
        name: "Darlene Robertson",
        date: "5/27/15",
        post: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
        avatar: av1,
      },
    },
    {
      title: "FinCEN issues regulations requiring that financial",
      image: savbank,
      acc: {
        name: "Courtney Henry",
        date: "22 Dec 2021",
        post: "FinCEN is issuing final rules under the Bank Secrecy Act to clarify and strengthen customer due diligence...",
        avatar: av2,
      },
    },
    {
      title: "US State Bank Supervisors Issue Model",
      image: bank,
      acc: {
        name: "Jerome Bell",
        date: "22 Dec 2021",
        post: "The Conference of State Bank Supervisors (CSBS) has released a draft proposal for regulating digital currency...",
        avatar: av3,
      },
    },
  ];
  const dispatch = useDispatch();
  const navi = useNavigate();
  const posts = useSelector((state) => state.Fetchpost.posts);
  let arr = [...posts];
  const [start, setstart] = useState(0);
  const Loadmore = () => {
    navi("/blog");
    dispatch(fetchposts());
    dispatch(ModeActions.Navblog());
  };
  useEffect(() => {
    dispatch(fetchposts());
  }, [start]);
  return (
    <div className="bg-white ">
      <div className=" relative 2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto justify-center items-center flex flex-col py-32 gap-12">
        <div className="flex flex-col gap-8 items-center">
          <h2 className="font-semibold text-[38px]">KBZ Money Alerts</h2>
        </div>
        <div className="flex items-center">
          <div
            onClick={() => setstart(start - 3)}
            className={`p-6 bg-[#F2F2F2] w-fit h-fit items-center rounded-2xl  absolute lg:-left-10 md:-left-5 hover:bg-[#54C9F1] group lg:flex hidden ${
              start === 0
                ? "cursor-not-allowed pointer-events-none opacity-50"
                : ""
            }`}
          >
            <div className="w-4 group stroke-gray-500 group-hover:stroke-white ">
              <Movearrow />
            </div>
          </div>
          <div className="flex flex-wrap gap-8 items-start justify-center ">
            {arr.slice(start, start + 3).map((e, i) => {
              return <Malert key={i} index={i} posts={e} />;
            })}
          </div>
          <div
            onClick={() => setstart(start + 3)}
            className={`p-6 bg-[#F2F2F2] w-fit h-fit items-center rounded-2xl rotate-180 absolute lg:-right-10 md:-right-5 hover:bg-[#54C9F1] group lg:flex hidden ${
              start + 3 >= arr.length
                ? "cursor-not-allowed pointer-events-none opacity-50"
                : ""
            }`}
          >
            <div className="w-4 group stroke-gray-500 group-hover:stroke-white ">
              <Movearrow />
            </div>
          </div>
        </div>
        <CustBtn text="Load More" func={Loadmore} />
      </div>
    </div>
  );
}
export default Moneyalert;
