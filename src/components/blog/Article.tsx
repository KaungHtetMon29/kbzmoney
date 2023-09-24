import { Calender, Clock, Eye } from "../../assets/svgs";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
type article = {
  title: string;
  uimg: any;
  uname: string;
  date: string;
  img: any;
  post: string;
  benefit: string;
};
function Article() {
  const { id } = useParams();

  const [article, setarticle] = useState<article>();
  const posts = useSelector((state: any) => state.Fetchpost.posts);
  const indexofpost = posts.findIndex((e: any) => e.postid === Number(id));
  useEffect(() => {
    console.log(typeof id);
    console.log(indexofpost);
    setarticle(posts[indexofpost]);
  }, [posts, id]);
  return (
    <div className="flex flex-col gap-8 px-4">
      {article !== undefined ? (
        <>
          <h1 className="sm:text-3xl text-lg font-semibold tracking-wide leading-snug">
            {article.title}
          </h1>
          <div className="flex flex-col gap-8">
            <div className="flex sm:items-center items-start sm:gap-0 gap-4 sm:flex-row flex-col">
              <div className="flex gap-4 items-center grow">
                <div className="md:w-16 md:h-16 sm:w-10 sm:h-10 w-10 h-10 flex">
                  <img
                    src={article.uimg}
                    alt="avatar"
                    className="rounded-full"
                  />
                </div>
                <p className="sm:text-2xl text-base font-bold opacity-80 text-center">
                  {article.uname}
                </p>
              </div>
              <div className="flex sm:gap-6 gap-2 sm:text-base text-xs ">
                <div className="flex gap-2 items-center">
                  <div className="sm:w-5 w-3">
                    <Calender />
                  </div>
                  <p>{article.date}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="sm:w-5 w-3">
                    <Eye />
                  </div>
                  <p>25k views</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="sm:w-5 w-3">
                    <Clock />
                  </div>
                  <p>4 mins read</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-12 text-base tracking-wide leading-relaxed">
              <img
                src={article.img}
                className="object-cover h-[30rem] w-full rounded-2xl"
              />

              {article.post}
            </div>
            <div className=" flex flex-col gap-12">
              <h2 className="text-xl font-bold">Benefits</h2>
              {article.benefit}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Article;
