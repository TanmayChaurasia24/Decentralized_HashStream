import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";

interface VideoDescriptionProps {
  compactViews: string;
  expandedViews: string;
  compactDate: string;
  expandedDate: string;
  description?: string | null;
}

export const VideoDescription = ({
  compactViews,
  compactDate,
  expandedViews,
  expandedDate,
  description,
}: VideoDescriptionProps) => {
  const [isExplanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded((current) => !current)}
      className="bg-secondary/50 rounded-xl p-3 cursor-pointer hover:bg-secondary/70 transition"
    >
      <div className="flex gap-2 text-sm mb-2">
        <span className="font-medium">
          {isExplanded ? expandedViews : compactViews} views
        </span>
        <span className="font-medium">
          {isExplanded ? expandedDate : compactDate}
        </span>
      </div>
      <div className="relative">
        <p
          className={cn(
            "text-sm whitespace-pre-wrap",
            !isExplanded && "line-clamp-2"
          )}
        >
          {description || "No description"}
        </p>
        <div>
          {isExplanded ? (
            <div className="flex items-center">
              Show less <ChevronUpIcon className="size-4" />
            </div>
          ) : (
            <div className="flex items-center">
              Show more <ChevronDownIcon className="size-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
