interface PageProps {
  params: Promise<{
    videoId: string;
  }>;
}
const page = async ({ params }: PageProps) => {
  const { videoId } = await params;
  return <div>video is: {videoId}</div>;
};

export default page;
