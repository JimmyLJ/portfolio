"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    const mountedCheck = () => {
      setMounted(true);
    };
    mountedCheck();
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="transition w-10 h-10 cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
      {currentTheme === "dark" ? (
        <Sun className="text-white w-7 h-7 cursor-pointer" />
      ) : (
        <Moon className="text-black w-7 h-7 cursor-pointer" />
      )}
    </button>
  );
}