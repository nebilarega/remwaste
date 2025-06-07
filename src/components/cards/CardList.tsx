import { useState, useEffect } from "react";
import type { Card as CardType } from "../../types/card";
import { Card } from "./Card";
import { Pagination } from "../common/Pagination";
import { Tag } from "../common/Tag";

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
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
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

  const handleCardClick = (card: CardType) => {
    setSelectedCard(selectedCard?.id === card.id ? null : card);
    onCardClick?.(card);
    // Scroll to top smoothly when a card is selected
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price);
  };

  if (cards.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">No cards available</div>
    );
  }

  return (
    <div className="space-y-6">
      <div
        className={`transition-all duration-300 ease-in-out transform ${
          selectedCard
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 h-0 overflow-hidden"
        }`}
      >
        {selectedCard && (
          <div className="bg-white dark:bg-lighter-dark-background rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${selectedCard.size}-yarder-skip.jpg`}
                  alt={`${selectedCard.size} Yard Skip`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h2 className="text-2xl font-bold">
                  {selectedCard.size} Yard Skip
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Price</p>
                    <p className="text-xl font-semibold">
                      {formatPrice(selectedCard.price_before_vat)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Hire Period
                    </p>
                    <p className="text-xl font-semibold">
                      {selectedCard.hire_period_days} days
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Road Access
                    </p>
                    <Tag
                      size="md"
                      variant={
                        selectedCard.allowed_on_road ? "success" : "warning"
                      }
                    >
                      {selectedCard.allowed_on_road ? "Allowed" : "Not Allowed"}
                    </Tag>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
                >
                  Change Selection
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentCards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={handleCardClick}
            isSelected={selectedCard?.id === card.id}
          />
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
