import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import { StudioUploadModal } from "../studio-upload-modal";

export const StudioNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 max-h-min p-1 bg-white flex items-center px-3 pr-5 z-50 border-b shadow-md">
      <div className="flex items-center justify-between gap-4 w-full">
        {/* menu and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href={"/studio"}>
            <div>
              {/* <Image
                src="/logo_hashstream.jpg"
                height={200}
                width={200}
                alt="logo"
              ></Image> */}
              <h1 className="text-2xl font-bold text-primary">Studio</h1>
            </div>
          </Link>
        </div>

        <div className="flex-shrink-0 items-center flex gap-4">
          <StudioUploadModal/>
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
