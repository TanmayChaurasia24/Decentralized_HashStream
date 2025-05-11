"use client";

import { ResponsiveDialog } from "@/components/responsive-dialog";
import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { Loader2Icon, PlusIcon } from "lucide-react";
import { toast } from "sonner";

export const StudioUploadModal = () => {
  const utils = trpc.useUtils();
  const create = trpc.videos.create.useMutation({
    onSuccess: () => {
      toast.success("Video Created");
      utils.studio.getMany.invalidate();
    },
    onError: () => {
      toast.error("something went wrong, please try again later");
    },
  });
  return (
    <>
      <ResponsiveDialog
        title="Upload the Video"
        open={!!create.data}
        onOpenChange={() => create.reset()}
      >
        <p>this will be an uploder</p>
      </ResponsiveDialog>
      <Button
        variant="secondary"
        className="cursor-pointer"
        onClick={() => create.mutate()}
        disabled={create.isPending}
      >
        {create.isPending ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          <PlusIcon />
        )}
        Create
      </Button>
    </>
  );
};
