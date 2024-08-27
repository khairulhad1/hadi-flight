import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import React, { FC } from "react";
import { logout } from "./actions";

interface ButtonLogoutProps {}

const ButtonLogout = () => {
  return (
    <div className="space-y-2">
      <form action={logout}>
        <Button
          variant={"destructive"}
          type="submit"
          className="w-full justify-start"
        >
          <LogOut className="mr-2 h-5 w-5" /> Logout
        </Button>
      </form>
    </div>
  );
};

export default ButtonLogout;
