const SkeletonCard = () => (
  <div className="min-h-[450px] bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    {/* Image placeholder */}
    <div className="w-full h-48 bg-gray-200"></div>

    {/* Content section */}
    <div className="p-4 bg-white space-y-6">
      {/* Headline */}
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>

      {/* Description */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>

      {/* Divider */}
      <div className="w-full border-b-2 border-gray-200"></div>

      {/* Tags */}
      <div className="flex space-x-2">
        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
      </div>
    </div>
  </div>
);

export const SkeletonCardListLoader = () => {
  const skeletonCards = Array(6).fill(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skeletonCards.map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};
