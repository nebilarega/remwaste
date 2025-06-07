import { useState, useEffect } from "react";
import type { Card as CardType } from "../../types/card";
import { Card } from "./Card";
import { Pagination } from "../common/Pagination";

interface CardListProps {
  cards: CardType[];
  onCardClick?: (card: CardType) => void;
  itemsPerPage?: number;
}

export const CardList = ({
  cards,
  onCardClick,
  itemsPerPage = 6,
}: CardListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  // Reset to first page when cards array changes
  useEffect(() => {
    setCurrentPage(1);
  }, [cards]);

  // Ensure current page is valid
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, cards.length);
  const currentCards = cards.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of the list when changing pages
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // If no cards, show a message
  if (cards.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">No cards available</div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentCards.map((card) => (
          <Card key={card.id} card={card} onClick={onCardClick} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-8 space-y-2">
          <div className="text-sm text-gray-500 text-center mb-2">
            Showing {startIndex + 1}-{endIndex} of {cards.length} items
          </div>
          <div className="max-w-80 text-center mx-auto">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};
