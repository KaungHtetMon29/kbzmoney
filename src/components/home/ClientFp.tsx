import Clientfp from "../clientfpcard";
import america from "../../assets/america.png";
import asia from "../../assets/asia.png";
import meast from "../../assets/meast.png";
import samerica from "../../assets/samerica.png";
function ClientFp() {
  const clinetfp = [
    {
      color: "bg-[#FFF4E3]",
      title: "North America & Caribbean",
      image: america,
      Country: ["United States", "Mexico", "Dominican Republic", "Jamaica"],
    },
    {
      color: "bg-[#F2FBFF]",
      title: "Central & South America",
      image: samerica,
      Country: [
        "Costa Rica",
        "El Salvador",
        "Panama",
        "Venezuela",
        "Ecuador",
        "Chile",
        "Argentina",
        " Colombia",
        "Uruguay",
      ],
    },
    {
      color: "bg-[#FCEBFF]",
      title: "Europe & Africa",
      image: asia,
      Country: [
        "United Kingdom",
        "Spain",
        "Bulgaria",
        "Ethiopia",
        "Somalia",
        "Cote de Ivory",
        "Djibouti",
      ],
    },
    {
      color: "bg-[#E1F6EF]",
      title: "Middle East & Far East",
      image: meast,
      Country: ["Israel", "Saudi Arabia", "Dubai", "Philippines"],
    },
  ];
  return (
    <div className="bg-white">
      <div className="2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350px] mx-auto justify-center items-center flex flex-col py-32 gap-12">
        <div className="flex flex-col gap-8 items-center text-center">
          <h2 className="font-semibold sm:text-[1.8rem]  text-[1.4rem]">
            Our Clients and Footprint
          </h2>
          <p className="lg:text-xl sm:text-base text-sm sm:w-1/2 w-10/12 text-center">
            Clients include Banks, Non-Banking Financial Institutions,
            Non-Financial Institutions, Insurance Companies, Broker Dealers,
            Payment Processors, Check Cashers, Digital Payments Companies, Money
            Transmitters, and Crypto Currency Solution Companies including
            Exchanges and Market Places.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 items-start justify-center">
          {clinetfp.map((e, i) => {
            return (
              <Clientfp
                key={i}
                color={e.color}
                Image={e.image}
                title={e.title}
                country={e.Country}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ClientFp;
