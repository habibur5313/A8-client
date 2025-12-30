"use client";
import { useActionState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { loginUser } from "@/services/auth/loginUser";
import { toast } from "sonner";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import InputFieldError from "./shared/InputFieldError";
import Link from "next/link";


export function LoginForm({ redirect }: { redirect?: string }) {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-12 h-12 bg-linear-to-br from-coral-400 to-coral-600 rounded-2xl flex items-center justify-center mb-4">
          <Link href="/" className="flex items-center gap-2">
          <svg
            className="w-7 h-7 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
            <h1 className="text-3xl font-bold dark:text-white flex gap-2">Travel<span>Guide</span></h1>
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back</h1>
        <p className="text-gray-600 dark:text-gray-400">Sign in to continue your journey</p>
      </div>
      {/* Form */}
      <form action={formAction}>
        {/* {redirect && <input type="hidden" name="redirect" value={redirect} />} */}
        <FieldGroup>
          <div className="grid grid-cols-1 gap-4">
            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                //   required
              />

              <InputFieldError field="email" state={state} />
            </Field>

            {/* Password */}
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                //   required
              />
              <InputFieldError field="password" state={state} />
            </Field>
          </div>
          <FieldGroup className="mt-4">
            <Field>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
              </Button>

              <FieldDescription className="px-6 text-center">
                Don&apos;t have an account?{" "}
                <a href="/register" className="text-blue-600 hover:underline">
                  Sign up
                </a>
              </FieldDescription>
              <FieldDescription className="px-6 text-center">
                <a
                  href="/forget-password"
                  className="text-blue-600 hover:underline"
                >
                  Forgot password?
                </a>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldGroup>
      </form>
    </div>
  );
}
