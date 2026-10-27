import { SetStateAction, SVGProps } from "react";

export type FetchBestSellerParams = {
  bestSellerDB: string;
  pagination: string;
  pageSize: string;
  sorting: string;
};

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export type ModalState = {
  isOpen: boolean;
  id?: string | number; // 특정 ID가 필요한 경우
};
export type ModalStateType = {
  isOpen: boolean;
  type: string;
  id?: number;
};
export type CommentType = {
  id: number;
  email: string;
  slug: string;
  rating: number;
  like: number;
  date: string;
  comment: string;
};
export type BookDataType = {
  delivery?: boolean;
  id?: number;
  title: string;
  price: number;
  sale_price: number;
  authors: string[]; // 여기서 authors가 문자열 배열인지 확인합니다.
  thumbnail: string;
  publisher: string;
  contents: string;
  datetime: Date;
  created_at?: Date;
  numbering?: number;
  isbn: string;
  comments?: CommentType[];
  content: string;
  blurDataURL?: string;
};
export const emptyBook: BookDataType = {
  id: 0,
  title: "",
  price: 0,
  sale_price: 0,
  authors: [],
  thumbnail: "",
  publisher: "",
  contents: "",
  datetime: new Date(0),
  isbn: "",
  content: "",
  // 선택 필드들은 생략하거나 기본값 지정할 수 있음
  delivery: false,
  created_at: new Date(0),
  numbering: 0,
  comments: [],
  blurDataURL: "",
};
export type LikeDataType = {
  id?: number;
  isbn: string;
};

export type BooksData = {
  data: BookDataType[];
  total: number | null;
  error: unknown;
};
// data
export type ProductComment = {
  // ? 혹시 오류가 많이나면 id  ? ㄹ ㄱㄱ
  id?: number;
  slug: string;
  content?: string;
  rating?: number;
  email?: string;
  created_at?: Date;
};

export type AddressType = {
  id: number;
  Address: string;
  Phone: string;
  address_name: string; // 주소 이름

  addressdetailinfo: string;
  addressinfo: string;
  consumer: string;
  created_at: string; // ISO 8601 datetime string
  email: string;
  is_recent: boolean;
};
export interface BestSellerParams {
  category: string;
  bestSellerDB: string;
  pagination: string;
  pageSize: string;
  sorting: string;
  data: BookDataType[];
}

export type ViewType = "Col" | "Basis";
