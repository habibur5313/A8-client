import MyProfile from "@/components/modules/MyProfile/MyProfile";
import { getUserInfo } from "@/services/auth/getUserInfo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile | Travel Guide",  
  description: "My Profile | Travel Guide",
};

const MyProfilePage = async () => {
  <p>MyProfile</p>
  const userInfo = await getUserInfo();
  return <MyProfile userInfo={userInfo} />;
};

export default MyProfilePage;
