import { Button } from "@/components/ui/button";
import MuxUploader, {
  MuxUploaderDrop,
  MuxUploaderFileSelect,
  MuxUploaderProgress,
  MuxUploaderStatus,
} from "@mux/mux-uploader-react";
import { UploadIcon } from "lucide-react";

interface StudioUploaderProps {
  endpoint?: string | null;
  onSuccess: () => void;
}
const uploader_id = "video-uploader";
export const StudioUploader = ({
  endpoint,
  onSuccess,
}: StudioUploaderProps) => {
  return (
    <div>
      <MuxUploader
        endpoint={endpoint}
        id={uploader_id}
        className="hidden group/uploader"
      />

      <MuxUploaderDrop muxUploader={uploader_id} className="group/drop">
        <div slot="heading" className="flex flex-col items-center gap-6">
          <div className="flex items-center justify-center gap-2 rounded-full bg-muted h-32 w-32">
            <UploadIcon className="size-10 text-muted-foreground group/drop-[&[active]]:animate-bouce transition-all duration-300" />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <p className="text-sm">Drag and drop video files to upload</p>
            <p className="text-xs text-muted-foreground">
              Your videos will be provate until you publish them
            </p>
          </div>
          <MuxUploaderFileSelect muxUploader={uploader_id}>
            <Button type="button" className="rounded-full">
              Select Files
            </Button>
          </MuxUploaderFileSelect>
        </div>
        <span slot="seperator" className="hidden"></span>
        <MuxUploaderStatus muxUploader={uploader_id} className="text-sm" />
        <MuxUploaderProgress
          muxUploader={uploader_id}
          className="text-sm"
          type="percentage"
        />
        <MuxUploaderProgress muxUploader={uploader_id} type="bar" />
      </MuxUploaderDrop>
    </div>
  );
};
