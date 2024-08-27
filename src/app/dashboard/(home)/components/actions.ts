"use server";

import { getUser, lucia } from "@/lib/auth";
import { ActionResult } from "../../(auth)/signin/form/action";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout(): Promise<ActionResult> {
  const { session } = await getUser();
  if (!session) {
    return {
      errorTitle: "Error",
      errorDesc: ["Unauthorized"],
    };
  }
  await lucia.invalidateSession(session.id);
  const sesionCookies = lucia.createBlankSessionCookie();
  cookies().set(
    sesionCookies.name,
    sesionCookies.value,
    sesionCookies.attributes
  );
  redirect("/dashboard/signin");
}
