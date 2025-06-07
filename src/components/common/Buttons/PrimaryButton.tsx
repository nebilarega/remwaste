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
      className={`flex w-full border cursor-pointer border-black justify-center rounded-md px-3 py-2.5 text-sm font-semibold leading-6 shadow-sm transition-all bg-black text-white hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
