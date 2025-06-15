import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
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

  if (loading) return <div>Loading Our Menu...</div>;
  if (error) return <div>Error: {error}</div>;

  // Filter foods based on search term (case-insensitive)
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
            <motion.h1
        className="text-4xl font-bold text-center my-10"
        animate={{
          color: ["#FF0000", "#00FF00", "#0000FF", "#FFD700", "#FF69B4"], // cycle through red, green, blue, gold, pink
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
        <label className="input w-3/5 my-5">
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      {/* {filteredFoods.length} */}
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-5 mx-5">
        {filteredFoods.map((food) => (
          <FoodCard food={food} key={food._id}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
