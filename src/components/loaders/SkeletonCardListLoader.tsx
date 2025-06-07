const SkeletonCard = () => (
  <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
    <div className="flex justify-between items-start mb-4">
      <div className="h-6 bg-gray-200 rounded w-1/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/6"></div>
    </div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
    <div className="mt-4 flex justify-between items-center">
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
    </div>
  </div>
);

export const SkeletonCardListLoader = () => {
  const skeletonCards = Array(6).fill(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skeletonCards.map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};
