import { getCurrentUserRole } from "@/lib/user_utils";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userRole = await getCurrentUserRole();
  const isAdmin = userRole === "ADMIN" ? true : false;
  if (!isAdmin) {
    return redirect("/");
  }
  return <div className="mx-auto max-w-[640px] pt-12">{children}</div>;
}
