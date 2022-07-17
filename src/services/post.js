import { api } from "./api";

export const postService = {
  getList(params) {
    return api.call().get("/post/getListPagination.php", {
      params: {
        ...params,
      },
    });
  },
  listPost({ currentPage = 1, perPage = 2 } = {}) {
    return postService.getList({
      pagesize: perPage,
      currPage: currentPage,
    });
  },
};
