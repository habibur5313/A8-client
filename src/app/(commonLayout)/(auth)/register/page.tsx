import RegisterForm from "@/components/register-form";
import { RegistrationIllustration } from "@/components/RegistrationIllustration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Travel Guide",
  description: "Register to your account",
};

const RegisterPage = () => {
  return (
    <>
      <div className="min-h-screen flex">
        <RegisterForm />
        <RegistrationIllustration />
      </div>
    </>
  );
};

export default RegisterPage;
