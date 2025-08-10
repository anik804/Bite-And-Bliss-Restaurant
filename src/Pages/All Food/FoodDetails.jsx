import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

// Animated heading component
const AnimatedHeading = () => {
  return (
    <motion.h1
      className="text-3xl sm:text-4xl text-center font-extrabold mb-10"
      animate={{
        color: [
          "#ef4444", // red
          "#f59e0b", // amber
          "#10b981", // emerald
          "#3b82f6", // blue
          "#8b5cf6", // violet
          "#ef4444", // back to red
        ],
      }}
      transition={{
        duration: 8,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      🍴 Food Details
    </motion.h1>
  );
};

const FoodDetails = () => {
  const {
    name,
    photo,
    price_bdt,
    quantity,
    category,
    description,
    cuisine,
    _id,
  } = useLoaderData();

  const [purchaseCount, setPurchaseCount] = useState(0);

  useEffect(() => {
    axios
      .get(`https://bite-and-bliss-server-side.vercel.app/purchase-count/${_id}`)
      .then((res) => {
        setPurchaseCount(res.data.count || 0);
      })
      .catch(() => {
        setPurchaseCount(0);
      });
  }, [_id]);

  return (
    <div className="pt-28 pb-16 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-pink-50 via-white to-pink-50 min-h-screen">
      <AnimatedHeading />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Food Image */}
          <motion.figure
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-h-[400px] overflow-hidden"
          >
            <img
              src={photo}
              alt={name}
              className="w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.figure>

          {/* Food Details */}
          <div className="p-6 sm:p-10">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 flex flex-wrap gap-2 items-center"
            >
              {name}
              <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow">
                {cuisine}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-600 leading-relaxed mb-6"
            >
              {description}
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            >
              <div className="px-4 py-3 rounded-lg bg-red-100 text-red-700 font-semibold shadow text-center">
                Quantity: {quantity}
              </div>
              <div className="px-4 py-3 rounded-lg bg-yellow-100 text-yellow-700 font-semibold shadow text-center">
                Category: {category}
              </div>
              <div className="px-4 py-3 rounded-lg bg-green-100 text-green-700 font-semibold shadow text-center">
                Price: ৳{price_bdt}
              </div>
              <div className="px-4 py-3 rounded-lg bg-purple-100 text-purple-700 font-semibold shadow text-center">
                Purchased: {purchaseCount} times
              </div>
            </motion.div>

            {/* Purchase Button */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Link to={`/purchase/${_id}`} className="block w-full">
                <button className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-lg font-bold rounded-lg shadow-lg hover:scale-105 transform transition">
                  Purchase Now
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FoodDetails;
