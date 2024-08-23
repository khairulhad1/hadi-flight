"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { FC } from "react";
import { ActionResult, handleSignIn } from "./action";
import { useFormState, useFormStatus } from "react-dom";

interface FormSigInProps {}

const PendingButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button aria-disabled={pending} className="w-full" type="submit">
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
};

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

export const FormSignIn: FC<FormSigInProps> = ({}) => {
  const [state, formAction] = useFormState(handleSignIn, initialFormState);

  console.log(state);

  return (
    <div>
      <div className="w-full h-screen">
        <div className="min-h-full flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="mt-10 text-center text-2xl font-bold leading-9 tracking-tighter text-gray-900">
              Signin To your Account
            </div>
            {state.errorTitle !== null && (
              <div className="mx-auto bg-red-500 w-full rounded-lg text-white p-4 my-7">
                <div className="font-bold mb-2">{state.errorTitle}</div>
                <ul className="list-inside list-disc">
                  {state.errorDesc?.map((err, index) => (
                    <li key={index}>{err}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
              <form action={formAction} className="space-y-6">
                <Input type="email" placeholder="Email..." name="email" />
                <Input
                  type="password"
                  placeholder="Password..."
                  name="password"
                />
                <PendingButton />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSignIn;
