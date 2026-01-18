import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./theme-provider";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex justify-between items-center text-white">
      <h1 className="text-3xl font-bold tracking-9 md:text-4xl">TODO</h1>
      <button className="cursor-pointer" onClick={handleToggleTheme}>
        {theme === "dark" ? (
          <FaSun className="h-7 w-7" />
        ) : (
          <FaMoon className="h-7 w-7" />
        )}
      </button>
    </header>
  );
};

export default Header;
