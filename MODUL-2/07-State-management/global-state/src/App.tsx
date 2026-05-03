import { useState } from "react";
import "./App.css";
import { useTheme } from "./context/ThemeContext";
import { useCounterStore } from "./store/useCounterStore";

interface IUser {
  name: string;
  email: string;
  age: number;
}

function App() {
  const { theme, setTheme } = useTheme();

  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  const [_user, setUser] = useState<IUser | null>(null);

  const login = () => {
    const newUser = {
      name: "Andi",
      email: "andi@a.com",
      age: 50,
    };

    setUser(newUser);

    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.reload();
  };

  const userLocalStorage = localStorage.getItem("user");

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          gap: "16px",
        }}
      >
        <span>THEME: {theme.toUpperCase()}</span>
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
      </div>

      <hr />

      <div
        style={{
          flexDirection: "column",
          display: "flex",
          gap: "16px",
        }}
      >
        <span>COUNTER: {count}</span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <hr />

      <div
        style={{
          flexDirection: "column",
          display: "flex",
          gap: "16px",
        }}
      >
        <span>
          {/* USER: {user?.name} - {user?.email} - {user?.age} */}
          USER: {userLocalStorage && JSON.parse(userLocalStorage).name} -{" "}
          {userLocalStorage && JSON.parse(userLocalStorage).email} -{" "}
          {userLocalStorage && JSON.parse(userLocalStorage).age}
        </span>

        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default App;
