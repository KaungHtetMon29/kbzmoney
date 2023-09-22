import Malert from "../components/moneyalertcard";
import nft from "../assets/nft.png";
import savbank from "../assets/savacc.png";
import bank from "../assets/bank.png";
import av1 from "../assets/av1.png";
import av2 from "../assets/av2.png";
import av3 from "../assets/av3.png";
import { Lens } from "../assets/svgs";
import CustBtn from "../components/btns/Custombtn";
import Bloghero from "../components/blog/hero";
import Question from "../components/blog/Q&A";
import { useParams } from "react-router-dom";
import Article from "../components/blog/Article";
import Related from "../components/blog/Related";
import Latestnew from "../components/blog/latesnew";
function BlogLayout() {
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
  const { id } = useParams();
  return (
    <>
      <Bloghero />
      <Latestnew />
      {id === undefined ? <Question /> : <Related />}
    </>
  );
}
export default BlogLayout;
