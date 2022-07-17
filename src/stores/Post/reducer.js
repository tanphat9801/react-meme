import { ACT_POST_HAS_PAGING } from "./action";

const initState = {
  listPaging: {
    list: [],
    currentPage: 1,
  },
};

const reducer = (postState = initState, action) => {
  switch (action.type) {
    case ACT_POST_HAS_PAGING:
      return {
        ...postState,
        listPaging: {
          ...postState.listPaging,
          list:
            action.payload.currentPage === 1
              ? action.payload.posts
              : [...postState.listPaging.list, ...action.payload.posts],
          currentPage: action.payload.currentPage,
        },
      };
    default:
      return postState;
  }
};

export default reducer;
