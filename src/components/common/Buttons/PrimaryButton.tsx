import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  className?: string;
  isSelected?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  isSelected = false,
}) => {
  return (
    <button
      type="button"
      className={`flex w-full border cursor-pointer ${
        isSelected
          ? "bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white"
          : "bg-black hover:bg-white dark:bg-gray-200  dark:hover:bg-black"
      }  text-white hover:text-black border-black dark:text-black dark:hover:text-white justify-center rounded-md px-3 py-2.5 text-sm font-semibold leading-6 shadow-sm transition-all  ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
