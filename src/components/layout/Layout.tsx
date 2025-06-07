import type { ReactNode } from "react";
import { ErrorBoundary } from "../common/ErrorBoundary";
import { LuSun, LuMoon } from "react-icons/lu";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ErrorBoundary>
      <div className="w-full min-h-screen bg-gray-100 dark:bg-dark-background overflow-x-hidden dark">
        <header className="bg-white dark:bg-lighter-dark-background shadow">
          <div className="mx-auto py-2 px-4 sm:px-4 lg:px-6 flex">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white my-auto">
              RemWaste
            </h1>
            <div className="bg-zinc-200 p-2 rounded-xl flex gap-1 max-w-[150px]">
              <button className="bg-transparent p-2 hover:bg-zinc-300 rounded-lg text-black cursor-pointer">
                <LuSun size={24} />
              </button>
              <button className="bg-transparent p-2 hover:bg-zinc-300 rounded-lg text-black cursor-pointer">
                <LuMoon size={24} />
              </button>
            </div>
          </div>
        </header>
        <main>
          <div className="w-full mx-auto sm:px-6 lg:px-8">{children}</div>
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
