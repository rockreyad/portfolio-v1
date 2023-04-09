import { useTheme } from "next-themes";
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { m } from "framer-motion";

const Toggle = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    const nextTheme: "light" | "dark" = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <m.button
      whileTap={{ scale: 0.8 }}
      onClick={handleClick}
      className="focus:outline-none"
    >
      {theme === "light" ? (
        <FaMoon className="text-2xl text-gray-800 hover:text-gray-600 transition-colors duration-300 ease-in-out" />
      ) : (
        <FaSun className="text-2xl text-yellow-500 hover:text-yellow-400 transition-colors duration-300 ease-in-out" />
      )}
    </m.button>
  );
};

export default Toggle;
