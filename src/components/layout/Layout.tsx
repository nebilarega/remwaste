import type { ReactNode } from "react";
import { ErrorBoundary } from "../common/ErrorBoundary";
import { LuSun, LuMoon } from "react-icons/lu";
import { useState, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = (isDark: boolean) => {
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ErrorBoundary>
      <div className="w-full min-h-screen bg-gray-100 dark:bg-dark-background overflow-x-hidden">
        <header className="bg-white dark:bg-lighter-dark-background shadow">
          <div className="mx-auto py-2 px-4 sm:px-4 lg:px-6 flex justify-between items-center">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              RemWaste
            </h1>
            <div className="bg-zinc-200 p-1 rounded-full flex gap-1 max-w-[var(--size-theme-switcher-width)]">
              {!isDarkMode ? (
                <button
                  onClick={() => toggleTheme(true)}
                  className="p-2 rounded-full cursor-pointer transition-colors bg-transparent text-black hover:bg-zinc-300"
                >
                  <LuMoon size={24} />
                </button>
              ) : (
                <button
                  onClick={() => toggleTheme(false)}
                  className="p-2 rounded-full cursor-pointer transition-colors bg-transparent text-black hover:bg-zinc-300"
                >
                  <LuSun size={24} />
                </button>
              )}
            </div>
          </div>
        </header>
        <main>
          <div className="w-full mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
        <footer className="bg-white dark:bg-lighter-dark-background shadow mt-8">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} RemWaste. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
};
