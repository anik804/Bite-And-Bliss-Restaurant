import React, { useEffect, useState } from "react";
import Environment from "./Environment/Environment";
import Food from "./Food/Food";
import Seafood from "./Seafood/Seafood";
import Inside from "./Outside Environment/Inside";
import Drinks from "./Drinks/Drinks";

const SkeletonCard = () => (
  <div className="bg-base-200 rounded-xl p-4 animate-pulse">
    <div className="h-48 bg-gray-300 rounded-md mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
  </div>
);

const Gallery = () => {
  const [loading, setLoading] = useState(true);

  // Simulate data/component loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s fake loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-24 px-4 md:px-10 lg:px-20">
      {loading ? (
        // Skeleton placeholders while loading
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
        </div>
      ) : (
        // Actual content after loading
        <>
          <Inside />
          <Environment />
          <Food />
          <Seafood />
          <Drinks />
        </>
      )}
    </div>
  );
};

export default Gallery;
