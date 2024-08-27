import { getUser } from "@/lib/auth";
import { FormSignIn } from "./form/index";
import { Metadata } from "next";
import React, { FC } from "react";
import { redirect } from "next/navigation";

interface SignIninPageProps {}

export const metadata: Metadata = {
  title: "Dashboard | Sign In",
};

const SignInPage: FC<SignIninPageProps> = async () => {
  const { user, session } = await getUser();
  if (user?.role === "ADMIN" && session) {
    redirect("/dashboard");
  }
  return <FormSignIn />;
};

export default SignInPage;
