import { useEffect, useState } from "react";
import type { IUser } from "./types/user.type";
import { Link } from "react-router";

function App() {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://scenicjump-us.backendless.app/api/data/Account",
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("ERROR FETCHING USERS", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center text-4xl font-bold text-black">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-4 py-4">
      {users?.map((user) => (
        <div
          key={user.objectId}
          className="p-4 rounded-md border flex justify-between items-center"
        >
          <div className="flex gap-3 items-center">
            {user.avatar_url ? (
              <img
                src={user.avatar_url}
                alt={`Avatar ${user.email}`}
                className="w-12 h-12 rounded-full"
              />
            ) : (
              <div className="w-12 h-12 bg-neutral-600 rounded-full text-white text-center flex items-center justify-center font-bold">
                {user.email.slice(0, 1).toUpperCase()}
              </div>
            )}
            <div>
              <p className="text-lg font-semibold">{user.email}</p>
              <p className="text-sm text-neutral-700">{user.username}</p>
            </div>
          </div>
          <Link
            to={`/user/${user.objectId}`}
            className="bg-black p-1 rounded text-white cursor-pointer px-2"
          >
            Detail user
          </Link>
        </div>
      ))}
    </div>
  );
}

export default App;
