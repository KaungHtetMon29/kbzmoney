import av1 from "../../assets/av2.png";
import article from "../../assets/articleimg.png";
import { Clock } from "../../assets/svgs";
function Article() {
  return (
    <div className="flex flex-col gap-8 px-4">
      <h1 className="sm:text-3xl text-lg font-semibold tracking-wide leading-snug">
        FinCEN Issues a Geographic Targeting Order for Certain Real Estate
        Transactions
      </h1>
      <div className="flex flex-col gap-8">
        <div className="flex sm:items-center items-start sm:gap-0 gap-4 sm:flex-row flex-col">
          <div className="flex gap-4 items-center grow">
            <div className="md:w-16 md:h-16 sm:w-10 sm:h-10 w-10 h-10 flex">
              <img src={av1} alt="avatar" className="rounded-full" />
            </div>
            <p className="sm:text-2xl text-base font-bold opacity-80 text-center">
              Name
            </p>
          </div>
          <div className="flex sm:gap-6 gap-2 sm:text-base text-xs ">
            <div className="flex gap-2 items-center">
              <div className="sm:w-5 w-3">
                <Clock />
              </div>
              <p>8/30/21</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="sm:w-5 w-3">
                <Clock />
              </div>
              <p>8/30/21</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="sm:w-5 w-3">
                <Clock />
              </div>
              <p>8/30/21</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 text-base tracking-wide leading-relaxed">
          <div className="w-full h-[80%] flex">
            <img src={article} className="object-cover w-full rounded-2xl" />
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
        <div className=" flex flex-col gap-12">
          <h2 className="text-xl font-bold">Benefits</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic may be there will some words etc.
          </p>
          <p>
            Making this the first true generator on the Internet. It uses a
            dictionary of over 200 Latin words, combined with a handful of model
            sentence structures, to generate Lorem Ipsum which looks reasonable.
            The generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic ther will be some words etc.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Article;
