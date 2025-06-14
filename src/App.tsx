import { Suspense } from "react";
import { Layout } from "./components/layout/Layout";
import { CardList } from "./components/cards/CardList";
import type { Card } from "./types/card";
import { skipService } from "./services/skipService";
import { SkeletonCardListLoader } from "./components/loaders/SkeletonCardListLoader";

const skipResource = skipService.getSkipsResource({
  postcode: "NR32",
  area: "Lowestoft",
});

const SkipList = () => {
  const cards = skipResource.read();

  const handleCardClick = (card: Card) => {
    console.log("Card clicked:", card);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-bold text-center text-black dark:text-white py-2">
        Available Skips
      </h1>
      <CardList cards={cards} onCardClick={handleCardClick} />
    </div>
  );
};

function App() {
  return (
    <Layout>
      <Suspense fallback={<SkeletonCardListLoader />}>
        <SkipList />
      </Suspense>
    </Layout>
  );
}

export default App;
