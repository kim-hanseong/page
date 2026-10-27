// recoil/Modal/atom.ts
import { atom } from "recoil";

export const modalOrderState = atom<string[]>({
  key: "modalOrderState",
  default: [],
});
export const ModalAtom = atom<Record<string, boolean>>({
  key: "ModalAtom",
  default: {},
});
