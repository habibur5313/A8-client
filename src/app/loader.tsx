import HeartbeatLoader from "@/components/shared/HearbeatLoader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loading | Travel Guide",
  description: "Loading | Travel Guide",
};

const GlobalLoading = () => {
  return <HeartbeatLoader />;
};

export default GlobalLoading;
