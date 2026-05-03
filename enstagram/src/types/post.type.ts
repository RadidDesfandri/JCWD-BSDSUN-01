import type { User } from "./user.type";

interface Post {
  id: number;
  text: string | null;
  imageUrl: string | null;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

interface PostWithUser extends Post {
  user: Pick<User, "id" | "username">;
}

export type { Post, PostWithUser };
