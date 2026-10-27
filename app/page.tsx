// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Main from "@/components/main";
import { cookies } from "next/headers";

export default async function Page() {
  return <Main />;
}
