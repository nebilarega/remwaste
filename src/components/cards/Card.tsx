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
      className="min-h-[450px] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col"
      onClick={() => onClick?.(card)}
    >
      <div className="flex-1">
        <img
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${card.size}-yarder-skip.jpg`}
          alt={"Skip Size Image"}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="flex-1 p-4 bg-white space-y-6 text-black">
        <h2 className=" font-semibold text-lg">{card.size + " Yard Skip"}</h2>
        <p>{card.hire_period_days + " day hire period"}</p>
        <div className="w-full border-b-2 border-gray-200"></div>
        <div className="grid grid-cols-3 w-fit gap-3">
          <Tag
            size="sm"
            variant="primary"
            className="w-fit"
            tooltip={"Something"}
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
        <PrimaryButton>Select This Skip</PrimaryButton>
      </div>
    </div>
  );
};
