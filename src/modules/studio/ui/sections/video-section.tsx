"use client";

import { InfiniteScroll } from "@/components/infinite-scroll";
import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

//  const VideoSection = () => {
//   <Suspense fallback={<p>Loading...</p>}>
//     <ErrorBoundary fallback={<p>Error...</p>}>
//       <VideoSectionSuspense />
//     </ErrorBoundary>
//   </Suspense>;
// };

export const VideoSection = () => {
  const [data,query] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  
  {console.log("loaded data and query is: ",data, query);}
  return (
    <div>
      {JSON.stringify(data)}
      <InfiniteScroll
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        fetchNextPage={query.fetchNextPage}
      />
    </div>
  );
};
