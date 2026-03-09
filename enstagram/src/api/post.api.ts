import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/http";
import type { PostWithUser } from "../types/post.type";

interface ResponsePosts {
  message: string;
  data: PostWithUser[];
}

const usePostsPublic = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<ResponsePosts>("/posts/all");

      return data.data;
    },
  });
};

export { usePostsPublic };
