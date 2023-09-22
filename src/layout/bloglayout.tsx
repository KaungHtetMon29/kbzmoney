import Bloghero from "../components/blog/hero";
import Question from "../components/blog/Q&A";
import { useParams } from "react-router-dom";

import Related from "../components/blog/Related";
import Latestnew from "../components/blog/latesnew";
function BlogLayout() {
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
