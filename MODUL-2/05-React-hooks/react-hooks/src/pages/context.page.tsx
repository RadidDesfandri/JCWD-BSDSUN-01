import { createContext, useContext, useState } from "react";

interface IUser {
  name: string;
  email: string;
  age: number;
}

const UserContext = createContext<IUser>({
  name: "Andi",
  email: "andi@a.com",
  age: 50,
});

export default function ContextPage() {
  const user: IUser = {
    name: "Andi",
    email: "andi@a.com",
    age: 50,
  };

  return (
    <UserContext.Provider value={user}>
      <Component1 />
    </UserContext.Provider>
  );
}

const Component1 = () => {
  return (
    <div>
      <Component2 />
    </div>
  );
};

const Component2 = () => {
  return (
    <div>
      <Component3 />
    </div>
  );
};

const Component3 = () => {
  const user = useContext(UserContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-center h-screen relative">
      <button
        onClick={handleOpen}
        className="bg-black cursor-pointer text-white rounded-2xl p-2 active:scale-95 transition-all duration-300"
      >
        Info user
      </button>

      {isOpen && (
        <div onClick={handleClose} className="fixed bg-black/50 inset-0 p-4 ">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-5 rounded-md max-w-2xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
          </div>
        </div>
      )}
    </div>
  );
};
