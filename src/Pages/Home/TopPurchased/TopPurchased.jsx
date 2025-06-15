import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const colors = ["#FF6347", "#20B2AA", "#FFA500", "#6A5ACD", "#32CD32"];

const TopPurchased = () => {
  const [topFoods, setTopFoods] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    axios.get("https://bite-and-bliss-server-side.vercel.app/top-purchased").then((res) => {
      setTopFoods(res.data);
    });

    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1000);

    return () => clearInterval(colorInterval);
  }, []);

  return (
    <section className="my-10 px-5">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        animate={{ color: colors[colorIndex] }}
        transition={{ duration: 1 }}
      >
        🍽️ Top 6 Most Purchased Foods
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topFoods.map((food) => (
          <div key={food._id} className="card bg-base-100 shadow-xl p-4">
            <figure>
              <img
                src={food.photo}
                alt={food.name}
                className="w-full h-48 object-cover rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-xl font-semibold">{food.name}</h3>
              <p className="text-gray-600">Price: ৳{food.price_bdt}</p>
              <p className="text-sm text-green-600 font-medium">
                Purchased: {food.totalQuantity} times
              </p>
              <Link to={`/menu/${food._id}`}>
                <button className="btn btn-outline btn-primary mt-3">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center mt-10">
        <Link to="/allfood">
          <button className="btn btn-primary px-6 text-lg">See All Foods</button>
        </Link>
      </div>
    </section>
  );
};

export default TopPurchased;
