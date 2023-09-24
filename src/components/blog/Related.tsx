import Malert from "../moneyalertcard";
import nft from "../../assets/nft.png";
import savbank from "../../assets/savacc.png";
import bank from "../../assets/bank.png";
import av1 from "../../assets/av1.png";
import av2 from "../../assets/av2.png";
import av3 from "../../assets/av3.png";
import { useSelector } from "react-redux";
function Related() {
  const posts = useSelector((state) => state.Fetchpost.related);
  // const Malertarray = [
  //   {
  //     title: "Major Crypto Exchanges Face Action Over",
  //     image: nft,
  //     acc: {
  //       name: "Darlene Robertson",
  //       date: "5/27/15",
  //       post: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
  //       avatar: av1,
  //     },
  //   },
  //   {
  //     title: "FinCEN issues regulations requiring that financial",
  //     image: savbank,
  //     acc: {
  //       name: "Courtney Henry",
  //       date: "22 Dec 2021",
  //       post: "FinCEN is issuing final rules under the Bank Secrecy Act to clarify and strengthen customer due diligence...",
  //       avatar: av2,
  //     },
  //   },
  //   {
  //     title: "US State Bank Supervisors Issue Model",
  //     image: bank,
  //     acc: {
  //       name: "Jerome Bell",
  //       date: "22 Dec 2021",
  //       post: "The Conference of State Bank Supervisors (CSBS) has released a draft proposal for regulating digital currency...",
  //       avatar: av3,
  //     },
  //   },
  // ];
  return (
    <div className="flex flex-col items-center gap-8 pb-24">
      <h2 className="text-[38px] text-center font-semibold">Related Post</h2>
      <div className="flex gap-8 2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350px] mx-auto justify-center lg:flex-row flex-col lg:items-start items-center">
        {posts.map((e, i) => {
          return <Malert key={i} posts={e} index={i} />;
        })}
      </div>
    </div>
  );
}
export default Related;
