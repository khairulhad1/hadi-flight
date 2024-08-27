import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpenText, LogOut, Plane, Ticket, User2 } from "lucide-react";
import ButtonLogout from "./components/button-logout";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, session } = await getUser();

  if (session === null || user.role === "CUSTOMER") {
    redirect("/dashboard/signin");
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="">
          <nav className="border-b p-5 border-muted">
            <div className="flex flex-row items-center justify-between">
              <span className="font-bold text-primary">FlyHadi Dashboard</span>
            </div>
          </nav>
          <section className="flex-row flex gap-5 items-start flex-nowrap">
            <section className="grow-0 w-[20%] h-screen shadow p-5 space-y-5 ">
              <div className="space-y-2">
                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/"} className="">
                    Dashboard
                  </Link>
                </Button>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase text-xs">master data</div>
                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/airplanes"} className="">
                    <Plane className="mr-2 h-5 w-5" /> Air Planes
                  </Link>
                </Button>
                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/flights"} className="">
                    <BookOpenText className="mr-2 h-5 w-5" /> Flights
                  </Link>
                </Button>
                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/tickets"} className="">
                    <Ticket className="mr-2 h-5 w-5" /> Tickets
                  </Link>
                </Button>
                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/users"} className="">
                    <User2 className="mr-2 h-5 w-5" /> Users
                  </Link>
                </Button>
              </div>
              <ButtonLogout />
            </section>
            <section className="grow mr-5 mt-5 h-[87vh] overflow-y-auto ">
              {children}
            </section>
          </section>
        </section>
      </body>
    </html>
  );
}
