import { useEffect } from "react";
import BlogLayout from "../layout/bloglayout";
import { useDispatch } from "react-redux";
import { ModeActions } from "../utils/Mode";

function Blog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ModeActions.Navblog());
  }, []);
  return (
    <div>
      <BlogLayout />
    </div>
  );
}
export default Blog;
