import type { Card as CardType } from "../../types/card";
import { Card } from "./Card";

interface CardListProps {
  cards: CardType[];
  onCardClick?: (card: CardType) => void;
}

export const CardList = ({ cards, onCardClick }: CardListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={onCardClick} />
      ))}
    </div>
  );
};
