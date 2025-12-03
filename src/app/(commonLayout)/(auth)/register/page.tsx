import RegisterForm from "@/components/register-form";
import { RegistrationIllustration } from "@/components/RegistrationIllustration";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RegisterPage = () => {
  return (
    <>
      <div className="min-h-screen flex">
        {/* <div className="w-full max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>
                Enter your information below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent> */}
              <RegisterForm />
              {/* <div className="hidden lg:block"> */}
                <RegistrationIllustration/>
              {/* </div> */}
            {/* </CardContent>
          </Card>
        </div> */}
      </div>
    </>
  );
};

export default RegisterPage;
