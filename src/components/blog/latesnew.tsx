import Malert from "../moneyalertcard";

import { Lens } from "../../assets/svgs";
import CustBtn from "../btns/Custombtn";
import { useParams } from "react-router-dom";
import Article from "./Article";
import { useSelector } from "react-redux";
import { useState } from "react";
type category = {
  post_category: string;
  count: number;
};
type recposts = {
  img: any;
  title: string;
};
type tag = { tag: string };
function Latestnew() {
  const posts = useSelector((state: any) => state.Fetchpost.posts);

  const recposts = useSelector((state: any) => state.Fetchpost.recposts);
  const cats = useSelector((state: any) => state.Fetchpost.cats);
  const tags = useSelector((state: any) => state.Fetchpost.tags);
  const { id } = useParams();
  const [page, setpage] = useState(0);
  const load = () => {
    setpage(page + 6);
  };

  return (
    <div className="2xl:max-w-7xl xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350px] mx-auto py-20 gap-8 flex-col flex">
      <div className={`justify-center ${id === undefined ? "flex" : "hidden"}`}>
        <h1 className="text-[38px] text-center font-semibold">Latest News</h1>
      </div>
      <div className="flex justify-center gap-4 lg:flex-row flex-col lg:items-start items-center">
        <div className="flex flex-wrap grow  gap-8 lg:items-start justify-center lg:w-2/3 w-full">
          {id === undefined ? (
            <>
              {/* <Malert posts={posts[0]} /> */}
              {posts.slice(page, page + 6).map((e: object, i: number) => {
                return <Malert key={i} posts={e} index={i} />;
              })}
              <div
                className={`lg:w-full w-fit justify-center flex ${
                  page + 6 >= posts.length
                    ? "pointer-events-none opacity-50"
                    : ""
                }`}
              >
                <CustBtn text="Load More" clr="primarybluelight" func={load} />
              </div>
            </>
          ) : (
            <div className="w-full">
              <Article />
            </div>
          )}
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
              {cats.map((e: category) => (
                <div className="flex font-semibold">
                  <p className="flex grow">{e.post_category}</p>
                  <p>{e.count}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border-2 border-black border-opacity-10">
            <div className="bg-gray-50 p-4 ">
              <h2 className="text-[18px] font-bold">Recent Post</h2>
            </div>
            {recposts.map((e: recposts) => (
              <div className="bg-white p-4 rounded-b-lg">
                <div className="flex font-semibold items-center gap-6">
                  <img
                    src={e.img}
                    className=" object-cover object-center w-20 h-20 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <p>{e.title}</p>
                    <p className="opacity-50">8 hours age</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border-2 border-black border-opacity-10">
            <div className="bg-gray-50 p-4 ">
              <h2 className="text-[18px] font-bold">tags</h2>
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              <div className="flex items-center gap-3 flex-wrap">
                {console.log(tags)}
                {tags.map((e: tag) => (
                  <div className="flex flex-col">
                    <p className="bg-gray-200 p-2 rounded-md">{e.tag}</p>
                  </div>
                ))}
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
