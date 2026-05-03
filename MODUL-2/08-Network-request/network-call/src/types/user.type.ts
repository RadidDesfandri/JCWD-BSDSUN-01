interface IUser {
  objectId: string;
  email: string;
  password: string;
  username: string | null;
  age: number | null;
  avatar_url: string | null;
}

export type { IUser };
