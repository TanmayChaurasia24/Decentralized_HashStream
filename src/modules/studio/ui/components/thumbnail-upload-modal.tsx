import { ResponsiveDialog } from "@/components/responsive-dialog";
import { UploadDropzone } from "@/lib/uploadthing";
import { trpc } from "@/trpc/client";

interface ThumbnailUploadModalProps {
  videoId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ThumbnailUploadModal = ({
  videoId,
  open,
  onOpenChange,
}: ThumbnailUploadModalProps) => {
  const utils = trpc.useUtils();

  const onUploadComplete = () => {
    utils.studio.getOne.invalidate({ id: videoId });
    onOpenChange(false);
  };

  return (
    <ResponsiveDialog
      open={open}
      title="Upload a Thumbnail"
      onOpenChange={onOpenChange}
    >
      <UploadDropzone
        input={{ videoId }}
        endpoint="ThumbnailUploader"
        onClientUploadComplete={onUploadComplete}
      />
    </ResponsiveDialog>
  );
};
