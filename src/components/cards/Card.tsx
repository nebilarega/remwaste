import type { Card as CardType } from "../../types/card";
import PrimaryButton from "../common/Buttons/PrimaryButton";
import { Tag } from "../common/Tag";

interface CardProps {
  card: CardType;
  onClick?: (card: CardType) => void;
}

export const Card = ({ card, onClick }: CardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price);
  };

  return (
    <div
      className="min-h-[450px] bg-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col"
      onClick={() => onClick?.(card)}
    >
      <div className="flex-1"></div>
      <div className="flex-1 p-4 bg-white space-y-6 text-black">
        <h2>Headline</h2>
        <p>Lorem ipsum dolor sit elit. Voluptatibus, quia!</p>
        <div className="w-full border-b-2 border-gray-200"></div>
        <div className="flex w-fit space-x-2">
          <Tag size="sm" variant="primary" className="w-fit">
            {"Tag 1"}
          </Tag>
          <Tag size="sm" variant="primary" className="w-fit">
            {"Tag 1"}
          </Tag>
          <Tag size="sm" variant="primary" className="w-fit">
            {"Tag 1"}
          </Tag>
        </div>
        <PrimaryButton>Buy now</PrimaryButton>
      </div>
    </div>
  );
};
