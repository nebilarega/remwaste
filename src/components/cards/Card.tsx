import { useEffect, useState } from "react";
import type { Card as CardType } from "../../types/card";
import PrimaryButton from "../common/Buttons/PrimaryButton";
import { Tag } from "../common/Tag";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface CardProps {
  card: CardType;
  onClick?: (card: CardType) => void;
  isSelected?: boolean;
}

export const Card = ({ card, onClick, isSelected = false }: CardProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price);
  };

  return (
    <div
      className={`min-h-[var(--size-card-height)] rounded-lg shadow-md dark:shadow-gray-900 dark:border-1 dark:border-gray-500 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col ${
        isSelected ? "ring-4 ring-blue-500 dark:ring-blue-400" : ""
      }`}
      onClick={() => onClick?.(card)}
    >
      <div
        className={`relative flex-1 ${
          isFullscreen
            ? "fullscreen-backdrop fixed inset-0 bg-black bg-opacity-50 z-[var(--z-fullscreen)]"
            : "justify-center"
        }`}
      >
        <img
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${card.size}-yarder-skip.jpg`}
          alt={"Skip Size Image"}
          className={`transition-all duration-300 cursor-pointer ${
            isFullscreen
              ? `max-w-full max-h-[95%] object-cover fixed inset-0 m-auto bg-white dark:bg-dark-background p-4 shadow-lg rounded-lg fullscreen-backdrop`
              : "h-48"
          }`}
          onClick={() => setIsFullscreen(!isFullscreen)}
        />
        {!isFullscreen && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-50 transition-opacity duration-300 cursor-pointer"
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            <span className="text-white text-xl mx-auto text-center gap-4">
              <FaMagnifyingGlass />
              Click to enlarge
            </span>
          </div>
        )}
      </div>
      <div className="flex-1 p-4 bg-white dark:bg-lighter-dark-background space-y-6 text-black dark:text-white">
        <h2 className="font-semibold text-lg">{card.size + " Yard Skip"}</h2>
        <p>{card.hire_period_days + " day hire period"}</p>
        <div className="w-full border-b-2 border-gray-200 dark:border-gray-800"></div>
        <div className="grid grid-cols-3 w-fit gap-3">
          <Tag
            size="sm"
            variant="primary"
            className="w-fit"
            tooltip={"Price before VAT"}
          >
            {formatPrice(card.price_before_vat)}
          </Tag>
          <Tag size="sm" variant="secondary" className="w-fit">
            {card.size + " Yards"}
          </Tag>
          <Tag
            size="sm"
            variant="secondary"
            className="w-fit"
            tooltip={card.hire_period_days + " day hire period"}
          >
            {card.hire_period_days + " days"}
          </Tag>
          {!card.allowed_on_road ? (
            <Tag
              size="sm"
              variant="warning"
              className="w-fit"
              tooltip="Not allowed on road"
            >
              {"No road"}
            </Tag>
          ) : (
            <Tag
              size="sm"
              variant="success"
              className="w-fit"
              tooltip="Allowed on road"
            >
              {"Road"}
            </Tag>
          )}
        </div>
        <PrimaryButton isSelected={isSelected}>
          {isSelected ? "Selected" : "Select This Skip"}
        </PrimaryButton>
      </div>
    </div>
  );
};
