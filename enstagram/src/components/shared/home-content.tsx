import {
  Dot,
  Heart,
  MessageCircleMore,
  RefreshCcw,
  Share2,
} from "lucide-react";
import { usePostsPublic } from "../../api/post.api";
import { cn } from "../../lib/utils";

function HomeContent() {
  const { data, isLoading } = usePostsPublic();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1">
      {data?.map((post, idx) => (
        <div
          key={post.id}
          className={cn(
            "flex gap-3 p-5 border-b",
            data.length - 1 === idx && "border-b-0",
          )}
        >
          <div className="p-5 bg-gray-500 rounded-full w-6 h-6"></div>
          <div className="flex gap-3 flex-col">
            <div className="flex items-center gap-1">
              <p className="font-semibold">{post.user.username}</p>
              <Dot /> {post.createdAt}
            </div>

            {post.text && <div>{post.text}</div>}

            {post.imageUrl && (
              <div className="rounded-lg overflow-hidden">
                <img src={post.imageUrl} alt="" />
              </div>
            )}

            <div className="flex mt-4 items-center gap-10">
              <div className="flex gap-2 items-center">
                <MessageCircleMore className="w-5 h-5" />
                <p>12</p>
              </div>

              <div className="flex gap-2 items-center">
                <RefreshCcw className="w-5 h-5" />
                <p>0</p>
              </div>

              <div className="flex gap-2 items-center">
                <Heart className="w-5 h-5" />
                <p>10</p>
              </div>

              <div className="flex gap-2 items-center">
                <Share2 className="w-5 h-5" />
                <p>10</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeContent;
