// import { handleHashCategory } from "../../helper";
import { categoryService } from "../../services/category";

export const ACT_FETCH_CATEGORY = "ACT_FETCH_CATEGORY";

export const actFetchCategory = (categories) => {
  return {
    type: ACT_FETCH_CATEGORY,
    payload: {
      categories,
    },
  };
};

export const actFetchCategoryAsync = () => {
  return async (dispatch) => {
    try {
      const response = await categoryService.listCategory();
      const categories = response.data.categories;
      // const hashCategory = handleHashCategory(categories);
      dispatch(actFetchCategory(categories));
    } catch (error) {}
  };
};
