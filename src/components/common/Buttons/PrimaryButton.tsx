import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
}) => {
  return (
    <button
      type="button"
      className={`flex w-full border cursor-pointer bg-black text-white hover:bg-white hover:text-black border-black  dark:bg-gray-200  dark:text-black  dark:hover:bg-black  dark:hover:text-white justify-center rounded-md px-3 py-2.5 text-sm font-semibold leading-6 shadow-sm transition-all  ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
