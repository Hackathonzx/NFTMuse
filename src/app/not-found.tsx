export const dynamic = "force-dynamic";
import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/dashboard");
  return <div></div>;
}