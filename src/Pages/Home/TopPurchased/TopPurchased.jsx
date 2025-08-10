import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const colors = ["#FF6347", "#20B2AA", "#FFA500", "#6A5ACD", "#32CD32"];

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
    <div className="w-full h-56 bg-gray-200" />
    <div className="p-5 text-center">
      <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto mb-3" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-2" />
      <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
      <div className="mt-4 h-10 bg-gray-200 rounded-lg w-full" />
    </div>
  </div>
);

const TopPurchased = () => {
  const [topFoods, setTopFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://bite-and-bliss-server-side.vercel.app/top-purchased")
      .then((res) => {
        setTopFoods(res.data);
        setLoading(false);
      });

    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1000);

    return () => clearInterval(colorInterval);
  }, []);

  return (
    <section className="my-16 px-6">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12"
        animate={{ color: colors[colorIndex] }}
        transition={{ duration: 1 }}
      >
        🍽️ Top 6 Most Purchased Foods
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          : topFoods.map((food) => (
              <div
                key={food._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <figure className="relative">
                  <img
                    src={food.photo}
                    alt={food.name}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Popular
                  </span>
                </figure>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {food.name}
                  </h3>
                  <p className="text-gray-600 mb-1 font-bold">
                    Price : {food.price_bdt}tk
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    Purchased {food.totalQuantity} times
                  </p>

                  {/* Button */}
                  <Link to={`/menu/${food._id}`} className="mt-auto">
                    <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium shadow-md transition-colors duration-300">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
      </div>

      {/* See All Button */}
      {!loading && (
        <div className="text-center mt-14">
          <Link to="/allfood">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg transition-colors duration-300">
              See All Foods
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default TopPurchased;
