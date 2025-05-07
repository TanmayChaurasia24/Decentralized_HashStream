"use client"

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export const StudioUploadModal = () => {
  return (
    <Button variant="secondary" className="cursor-pointer">
      <PlusIcon />
      Create
    </Button>
  );
};
