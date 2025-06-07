import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip = ({
  children,
  content,
  position = "top",
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState(position);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      updatePosition();
    }, 100); // Small delay to prevent accidental triggers
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const updatePosition = () => {
    if (!tooltipRef.current || !triggerRef.current) return;

    const tooltip = tooltipRef.current.getBoundingClientRect();
    const trigger = triggerRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    let newPosition = position;

    // Check if tooltip would be cut off
    if (position === "top" && trigger.top - tooltip.height < 0) {
      newPosition = "bottom";
    } else if (
      position === "bottom" &&
      trigger.bottom + tooltip.height > viewport.height
    ) {
      newPosition = "top";
    } else if (position === "left" && trigger.left - tooltip.width < 0) {
      newPosition = "right";
    } else if (
      position === "right" &&
      trigger.right + tooltip.width > viewport.width
    ) {
      newPosition = "left";
    }

    setTooltipPosition(newPosition);
  };

  useEffect(() => {
    if (isVisible) {
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
    }

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`
            absolute z-[9999] px-3 py-2 text-sm text-white bg-gray-900 rounded
            max-w-[200px] break-words
            pointer-events-none text-center
            ${positionClasses[tooltipPosition]}
            before:content-[''] before:absolute
            ${
              tooltipPosition === "top"
                ? "before:bottom-[-4px] before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-gray-900"
                : ""
            }
            ${
              tooltipPosition === "bottom"
                ? "before:top-[-4px] before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-gray-900"
                : ""
            }
            ${
              tooltipPosition === "left"
                ? "before:right-[-4px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-transparent before:border-l-gray-900"
                : ""
            }
            ${
              tooltipPosition === "right"
                ? "before:left-[-4px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-transparent before:border-r-gray-900"
                : ""
            }
          `}
        >
          {content}
        </div>
      )}
    </div>
  );
};
