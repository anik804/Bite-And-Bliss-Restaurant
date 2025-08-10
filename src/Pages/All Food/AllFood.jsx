import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const SkeletonCard = () => (
  <div className="bg-base-200 rounded-xl p-4 animate-pulse">
    <div className="h-40 bg-gray-300 rounded-md mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
  </div>
);

const AllFood = () => {
  const [foods, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://bite-and-bliss-server-side.vercel.app/menu")
      .then((res) => {
        setFood(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching data");
        setLoading(false);
      });
  }, []);

  if (error)
    return (
      <div className="pt-24 text-center text-red-500 font-semibold">
        Error: {error}
      </div>
    );

  // Filter foods based on search term (case-insensitive)
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 px-4">
      <motion.h1
        className="text-4xl font-bold text-center my-10"
        animate={{
          color: ["#FF0000", "#00FF00", "#0000FF", "#FFD700", "#FF69B4"],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        Explore Our Selection of Delicious Creations
      </motion.h1>

      <div className="flex justify-center">
        <label className="input w-3/5 my-5 flex items-center gap-2 border rounded-md px-3">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search Our Food Items By Name"
            className="outline-none flex-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-5">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, idx) => <SkeletonCard key={idx} />)
          : filteredFoods.map((food) => (
              <FoodCard food={food} key={food._id} />
            ))}
      </div>
    </div>
  );
};

export default AllFood;
