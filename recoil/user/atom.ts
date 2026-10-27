import { atom } from "recoil";

import { ModalStateType } from "@/types"; // Adjust the path as per your project structure
import { User } from "@supabase/supabase-js";

export const UserAtom = atom<User | null>({
  key: "UserAtom",
  default: null,
});
