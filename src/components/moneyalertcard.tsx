import { useNavigate } from "react-router-dom";
import { Arrow, Clock } from "../assets/svgs";

function Malert({
  title,
  Image,
  acc,
}: {
  title: string;
  Image: any;
  acc: { avatar: any; name: string; date: string; post: string };
}) {
  const navi = useNavigate();
  return (
    <div className=" bg-white rounded-lg flex flex-col items-start 2xl:w-96 xl:w-80 lg:w-64 w-[80%] gap-6 shadow-lg ">
      <img
        src={Image}
        alt={title}
        className={`object-cover object-center w-full xl:h-56 h-40  rounded-t-lg `}
      />
      <div className="px-5 pt-4 pb-8 flex flex-col gap-4 text-left w-full">
        <div className="xl:text-xl lg:text-lg font-semibold">{title}</div>
        <div className="w-full text-left">
          <div className="flex flex-col xl:gap-8 gap-4">
            <div className="flex xl:items-center lg:items-start sm:flex-row xl:gap-0 gap-2 flex-col text-base text-center ">
              <div className="flex items-center gap-2 grow">
                <img
                  src={acc.avatar}
                  alt={acc.name}
                  className="w-8 object-cover rounded-full"
                />
                <p>{acc.name}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4">
                  <Clock />
                </div>

                <p>{acc.date}</p>
              </div>
            </div>
            <div className="xl:text-base lg:text-sm">
              <p>{acc.post}</p>
            </div>
            <p
              className="flex gap-3 items-center font-bold cursor-pointer"
              onClick={() => {
                navi("/blog/1");
              }}
            >
              Read more
              <div className="w-6">
                <Arrow color="black" />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Malert;
