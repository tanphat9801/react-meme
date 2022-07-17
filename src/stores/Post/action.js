import { mappingPostData } from "../../helper";
import { postService } from "../../services/post";

export const ACT_POST_HAS_PAGING = "ACT_POST_HAS_PAGING";

export const actListPost = ({ posts, currentPage }) => {
  return {
    type: ACT_POST_HAS_PAGING,
    payload: {
      posts,
      currentPage,
    },
  };
};

export const actListPostAsync = ({ currentPage = 1, perPage = 2 } = {}) => {
  return async (dispatch) => {
    try {
      const response = await postService.listPost({ perPage, currentPage });
      console.log(response);
      const posts = response.data.posts.map(mappingPostData);
      dispatch(actListPost({ posts, currentPage }));
    } catch (error) {}
  };
};
