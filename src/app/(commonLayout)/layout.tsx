import { PublicFooter } from "@/components/shared/PublicFooter";
import { PublicNavbar } from "@/components/shared/PublicNavbar";
 import { getCookie } from "@/services/auth/tokenHandlers";


export default async function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
       const accessToken = await getCookie("accessToken");
  return (
    <>
      <PublicNavbar accessToken={accessToken}/>
      {children}
      <PublicFooter />
    </>
  );
}
