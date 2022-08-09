import { api } from "./api";

export const categoryService = {
  listCategory() {
    return api.call().get("/categories/index.php");
  },
};
