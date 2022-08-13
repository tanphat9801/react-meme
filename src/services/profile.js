import { api } from "./api";

export const profileService = {
  updateProfile() {
    return api.call.post("/member/update.php");
  },
};
