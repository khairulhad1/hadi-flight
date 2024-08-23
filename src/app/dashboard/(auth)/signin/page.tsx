import { FormSignIn } from "./form/index";
import { Metadata } from "next";
import React, { FC } from "react";

interface SignIninPageProps {}

export const metadata: Metadata = {
  title: "Dashboard | Sign In",
};

const SignInPage: FC<SignIninPageProps> = ({}) => {
  return <FormSignIn />;
};

export default SignInPage;
