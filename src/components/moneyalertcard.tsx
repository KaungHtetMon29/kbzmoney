import { useNavigate } from "react-router-dom";
import { Arrow, Clock } from "../assets/svgs";

function Malert({ posts, index }: { posts: any; index: number }) {
  const navi = useNavigate();
  return (
    <div className="xl:h-[36rem] lg:h-[26rem] sm:h-[28rem] h-[31rem] bg-white rounded-lg flex flex-col items-start 2xl:w-96 xl:w-80 lg:w-64 w-[80%] lg:gap-6 gap-2 shadow-lg ">
      {posts !== undefined && (
        <>
          <img
            src={posts.img}
            alt={posts.title}
            className={`object-cover object-center w-full 2xl:h-56 xl:h-44 lg:h-36 md:h-52 h-52 rounded-t-lg relative`}
          />
          <div className="xl:px-5 lg:px-3 px-5  pt-0 pb-8 flex flex-col gap-4 text-left h-full w-full ">
            <div className="xl:text-2xl lg:text-lg text-2xl py-2 font-semibold line-clamp-1 ">
              <p>{posts.title}</p>
            </div>
            <div className="w-full text-left h-full flex flex-col relative">
              <div className="flex flex-col xl:gap-8 gap-4 flex-1">
                <div className="flex xl:items-center lg:items-start xl:flex-row  xl:gap-0 gap-2 lg:flex-col sm:flex-row flex-col text-base text-center ">
                  <div className="flex items-center gap-2 grow">
                    <img
                      src={posts.uimg}
                      alt={posts.uname}
                      className="w-8 object-cover rounded-full"
                    />
                    <p>{posts.uname}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4">
                      <Clock />
                    </div>

                    <p>{posts.date}</p>
                  </div>
                </div>
                <div className="xl:text-base lg:text-sm">
                  <p className="xl:line-clamp-6 lg:line-clamp-3 line-clamp-3">
                    {posts.post}
                  </p>
                </div>
                <div className="flex absolute bottom-0">
                  <p
                    className="flex gap-3 items-center font-bold cursor-pointer"
                    onClick={() => {
                      console.log(posts.postid);
                      navi(`/blog/${posts.postid}`);
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
        </>
      )}
    </div>
  );
}
export default Malert;
