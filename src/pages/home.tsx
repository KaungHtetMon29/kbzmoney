import HeroSec1 from "../components/home/Hero1";
import Moneyalert from "../components/home/MoneyAlert";
import Solutions from "../components/home/Solutions";
import WhyStandout from "../components/home/Standout";
import ServicesPage from "../components/home/ServicesPage";
import ClientFp from "../components/home/ClientFp";
import Platforms from "../components/home/AML";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchposts } from "../utils/fetcher";
function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <HeroSec1 />
      <Solutions />
      <WhyStandout />
      <ServicesPage />
      <ClientFp />
      <Platforms />
      <Moneyalert />
    </div>
  );
}
export default Home;
