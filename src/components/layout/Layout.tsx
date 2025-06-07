import type { ReactNode } from "react";
import { ErrorBoundary } from "../common/ErrorBoundary";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ErrorBoundary>
      <div className="w-full min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          {/* <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">RemWaste</h1>
          </div> */}
        </header>
        <main>
          <div className="w-full mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
        <footer className="bg-white shadow mt-8">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} RemWaste. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
};
