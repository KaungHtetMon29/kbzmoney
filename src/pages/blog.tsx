import { useEffect } from "react";
import BlogLayout from "../layout/bloglayout";
import { useDispatch, useSelector } from "react-redux";
import { ModeActions } from "../utils/Mode";
import { fetchposts } from "../utils/fetcher";

function Blog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchposts());
    dispatch(ModeActions.Navblog());
  }, []);
  return (
    <div>
      <BlogLayout />
    </div>
  );
}
export default Blog;
