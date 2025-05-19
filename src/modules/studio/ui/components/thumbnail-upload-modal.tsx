import { ResponsiveDialog } from "@/components/responsive-dialog";
import { UploadDropzone } from "@/lib/uploadthing";

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
  return (
    <ResponsiveDialog open={open} title="Upload a Thumbnail" onOpenChange={onOpenChange}>
      <UploadDropzone endpoint="imageUploader" />
    </ResponsiveDialog>
  );
};
