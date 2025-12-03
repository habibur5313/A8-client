import RegisterForm from "@/components/register-form";
import { RegistrationIllustration } from "@/components/RegistrationIllustration";

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
