// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Main from "@/components/main";
import { cookies } from "next/headers";

export const revalidate = 3600; // 1시간마다 재검증

export default async function Page() {
  return <Main />;
}
