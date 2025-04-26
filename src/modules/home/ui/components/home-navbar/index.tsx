import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 max-h-min p-1 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* menu and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger className="cursor-pointer" />
          <Link href={"/"}>
            <div>
              <h1 className="text-2xl font-bold text-primary">HashStream</h1>
            </div>
          </Link>
        </div>
        {/* search bar */}
        <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>

        <div className="flex-shrink-0 items-center flex gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
