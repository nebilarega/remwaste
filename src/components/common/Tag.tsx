import type { ReactNode } from "react";
import { Tooltip } from "./Tooltip";

interface TagProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  className?: string;
  tooltip?: string;
}

const sizeStyles = {
  sm: "text-sm px-2 py-2",
  md: "text-base px-3 py-3",
  lg: "text-lg px-4 py-4",
};

const variantStyles = {
  primary: "border-blue-200 text-blue-800",
  secondary: "border-gray-200 text-gray-800",
  success: "border-green-200 text-green-800",
  warning: "border-yellow-400 text-yellow-800",
  error: "border-red-200 text-red-800",
};

export const Tag = ({
  children,
  size = "md",
  variant = "primary",
  className = "",
  tooltip,
}: TagProps) => {
  const tagContent = (
    <div
      className={`
        flex items-center justify-center
        rounded-full font-medium border-2
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );

  if (tooltip) {
    return (
      <Tooltip content={tooltip} position="top">
        {tagContent}
      </Tooltip>
    );
  }

  return tagContent;
};
