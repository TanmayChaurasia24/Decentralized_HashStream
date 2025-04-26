import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import HomeNavbar from "../components/home-navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const Homelayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        <div>{children}</div>
      </div>
    </SidebarProvider>
  );
};

export default Homelayout;
