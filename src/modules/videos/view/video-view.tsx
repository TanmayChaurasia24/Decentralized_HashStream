import { CommentsSection } from "../ui/sections/comments-section";
import { SuggestionsSections } from "../ui/sections/suggestions-sections";
import { VideoSection } from "../ui/sections/video-section";

interface VideoViewProps {
  videoId: string;
}

export const VideoView = ({ videoId }: VideoViewProps) => {
  return (
    <div className="flex flex-col max-w-[1700px] mx-auto pt-2.5 px-4 mb-10">
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-1 min-w-0">
          <VideoSection videoId={videoId} />
          <div className="xl:hidden block mt-4">
            <SuggestionsSections />
          </div>
          <CommentsSection />
        </div>
        <div className="hidden xl:block w-full xl:w-[380px] 2xl:w-[460px] shrink-1">
          <SuggestionsSections />
        </div>
      </div>
    </div>
  );
};
