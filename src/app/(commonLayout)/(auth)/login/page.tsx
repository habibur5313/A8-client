// import LoginForm from "@/components/login-form";

import { LoginForm } from "@/components/login-form";
import { TravelIllustration } from "@/components/TravelIllustration";
import { Suspense } from "react";

const LoginPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ redirect?: string }>;
}) => {
  const params = (await searchParams) || {};
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      {/* Left side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-white dark:bg-slate-900">
        <LoginForm redirect={params.redirect}/>
      </div>
      {/* Right side - Illustration */}
      <div className="w-full lg:w-1/2 hidden lg:flex bg-linear-to-br from-blue-50 via-mint-50 to-coral-50 ">
        <TravelIllustration />
      </div>
    </div>
    </Suspense>
  );
};

export default LoginPage;

