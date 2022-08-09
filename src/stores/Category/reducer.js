import { ACT_FETCH_CATEGORY } from "./action";

const initState = {
  categories: [],
};

const reducer = (categoryState = initState, action) => {
  switch (action.type) {
    case ACT_FETCH_CATEGORY:
      return {
        ...categoryState,
        categories: action.payload.categories,
      };
    default:
      return categoryState;
  }
};

export default reducer;
