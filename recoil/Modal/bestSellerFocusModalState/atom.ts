import { atom } from "recoil";
import { BookDataType } from "@/types";

export const BestSellerFocusModalState = atom<BookDataType | null>({
  key: "BestSellerFocusModalState",
  default: null,
});
