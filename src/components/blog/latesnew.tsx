import Malert from "../moneyalertcard";
import nft from "../../assets/nft.png";
import savbank from "../../assets/savacc.png";
import bank from "../../assets/bank.png";
import av1 from "../../assets/av1.png";
import av2 from "../../assets/av2.png";
import av3 from "../../assets/av3.png";
import { Lens } from "../../assets/svgs";
import CustBtn from "../btns/Custombtn";
function Latestnew() {
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
  return (
    <div className="2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350px] mx-auto py-20 gap-8 flex-col flex">
      <div className="justify-center ">
        <h1 className="text-[38px] text-center font-semibold">Latest News</h1>
      </div>
      <div className="flex justify-center gap-4 lg:flex-row flex-col-reverse lg:items-start items-center">
        <div className="flex flex-wrap grow  gap-8 lg:items-start justify-center lg:w-2/3 w-full">
          {Malertarray.map((e, i) => {
            return (
              <Malert key={i} Image={e.image} title={e.title} acc={e.acc} />
            );
          })}
          <div className="lg:w-full w-fit justify-center flex">
            <CustBtn text="Load More" clr="#063A78" />
          </div>
        </div>
        <div className="flex flex-col lg:w-[30%] w-[90%] gap-10">
          <div className="flex items-center bg-gray-50 w-full px-4 gap-6 rounded-lg border-2 border-black border-opacity-10">
            <Lens />
            <input
              className="w-full py-4 bg-transparent text-black"
              placeholder="Search here"
            />
          </div>
          <div className="rounded-lg border-2 border-black border-opacity-10">
            <div className="bg-gray-50 p-4 ">
              <h2 className="text-[18px] font-bold">Categories</h2>
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              <div className="flex font-semibold">
                <p className="flex grow">Alerts</p>
                <p>35</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border-2 border-black border-opacity-10">
            <div className="bg-gray-50 p-4 ">
              <h2 className="text-[18px] font-bold">Recent Post</h2>
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              <div className="flex font-semibold items-center gap-6">
                <img
                  src={nft}
                  className=" object-cover object-center w-20 h-20 rounded-lg"
                />
                <div className="flex flex-col">
                  <p>Major Crypto Exchanges Face Action Over</p>
                  <p className="opacity-50">8 hours age</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border-2 border-black border-opacity-10">
            <div className="bg-gray-50 p-4 ">
              <h2 className="text-[18px] font-bold">Recent Post</h2>
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex flex-col">
                  <p className="bg-gray-200 p-2 rounded-md">Money alerts</p>
                </div>
                <div className="flex flex-col">
                  <p className="bg-gray-200 p-2 rounded-md">Money alerts</p>
                </div>
                <div className="flex flex-col">
                  <p className="bg-gray-200 p-2 rounded-md">Money alerts</p>
                </div>
                <div className="flex flex-col">
                  <p className="bg-gray-200 p-2 rounded-md">Money alerts</p>
                </div>
                <div className="flex flex-col">
                  <p className="bg-gray-200 p-2 rounded-md">Money alerts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-primarybluelight p-10 flex flex-col items-center gap-6">
            <div className="text-3xl text-white">
              <h2 className="text-center">Subscribe to KBZ Money Alerts</h2>
            </div>
            <div className="w-full items-center flex flex-col gap-6">
              <input
                className="bg-white w-full text-center py-4 rounded-md"
                placeholder="Email Address"
              />
              <button className="bg-[#20C2FF] text-white p-4 rounded-md">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Latestnew;
