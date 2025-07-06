import { AuthLayout } from "@/components/auth/auth-layout";
import { SignUpForm } from "@/components/auth/sign-up-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | NicheMe",
  description: "Create your NicheMe account",
};

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Create an account"
      description="Enter your details to get started"
    >
      <SignUpForm />
    </AuthLayout>
  );
}
