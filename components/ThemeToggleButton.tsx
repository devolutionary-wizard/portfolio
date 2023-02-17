import { useTheme } from "next-themes";
import React from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="bg-slate-100 p-2 rounded-xl">
          <RiSunLine size={25} color="black" />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="bg-slate-100 p-2 rounded-xl">
          <RiMoonFill size={25} />
        </button>
      )}
    </>
  );
};

export default ThemeToggleButton;
