import { Dispatch, createSlice } from "@reduxjs/toolkit";

const initstate = { posts: [], tags: [], cats: [], recposts: [], related: [] };
const Fetchpostslice = createSlice({
  name: "fetcher",
  initialState: initstate,
  reducers: {
    setposts(state, actions) {
      state.posts = actions.payload.posts;
      state.tags = actions.payload.tag;
      state.cats = actions.payload.cats;
      state.recposts = actions.payload.recents;
      state.related = actions.payload.related;
      console.log(state.posts);
    },
  },
});

export const fetchposts = () => {
  return async (dispatch: Dispatch) => {
    const res = await fetch(`${import.meta.env.VITE_API_HOST}/post/recandcat`);
    const data = await res.json();
    dispatch(Fetchactions.setposts(data));
  };
};
export const Fetchactions = Fetchpostslice.actions;
export default Fetchpostslice;
