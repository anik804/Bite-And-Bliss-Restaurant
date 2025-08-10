import React, { useEffect, useState } from "react";
import Welcome from "./Welcome_Page/Welcome";
import Chef from "./Chef_Section/Chef";
import Stat from "./Stat_Section/Stat";
import Banner from "./Banner/Banner";
import TopPurchased from "./TopPurchased/TopPurchased";

// Skeleton loader component
const SkeletonBox = ({ height }) => (
  <div
    className="bg-gray-300 rounded-lg animate-pulse w-full"
    style={{ height }}
  ></div>
);

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API / Data fetching delay
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <>
          {/* Banner Skeleton */}
          <SkeletonBox height="400px" />
          {/* Welcome Section Skeleton */}
          <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
            <SkeletonBox height="50px" />
            <SkeletonBox height="200px" />
          </div>
          {/* Top Purchased Skeleton */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 py-10">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <SkeletonBox height="250px" key={i} />
              ))}
          </div>
          {/* Chef Section Skeleton */}
          <div className="max-w-6xl mx-auto px-4 py-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <SkeletonBox height="300px" key={i} />
              ))}
          </div>
          {/* Stat Section Skeleton */}
          <div className="max-w-6xl mx-auto px-4 py-10 grid gap-4 grid-cols-2 sm:grid-cols-4">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <SkeletonBox height="100px" key={i} />
              ))}
          </div>
        </>
      ) : (
        <>
          <Banner />
          <Welcome />
          <TopPurchased />
          <Chef />
          <Stat />
        </>
      )}
    </div>
  );
};

export default Home;
