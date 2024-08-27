"use server";
import { formSchema } from "./validation";
import prisma from "../../../../../../lib/prisma";
import { lucia } from "../../../../../lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const bcrypt = require("bcrypt");
export interface ActionResult {
  errorTitle: string | null;
  errorDesc: string[] | null;
}

export async function handleSignIn(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  console.log(formData.get("email"));

  const values = formSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!values.success) {
    const errorDesc = values.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "error validation",
      errorDesc,
    };
  }
  const exsistingUser = await prisma.user.findFirst({
    where: {
      email: values.data.email,
    },
  });
  if (!exsistingUser) {
    return {
      errorTitle: "Error",
      errorDesc: ["email tidak di temukan"],
    };
  }
  const validPassword = await bcrypt.compare(
    values.data.password,
    exsistingUser.password
  );
  if (!validPassword) {
    return {
      errorTitle: "Error",
      errorDesc: ["email / password salah"],
    };
  }
  const sesion = await lucia.createSession(exsistingUser.id, {});
  const sesionCookies = await lucia.createSessionCookie(sesion.id);

  cookies().set(
    sesionCookies.name,
    sesionCookies.value,
    sesionCookies.attributes
  );

  return redirect("/dashboard");
}
