//
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

// Animated heading component
const AnimatedHeading = () => {
  return (
    <motion.h1
      className="text-3xl sm:text-4xl text-center font-bold mb-10"
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
      .get(`http://localhost:3000/purchase-count/${_id}`)
      .then((res) => {
        setPurchaseCount(res.data.count || 0);
      })
      .catch(() => {
        setPurchaseCount(0);
      });
  }, [_id]);

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10">
      <AnimatedHeading />
      <div className="flex justify-center">
        <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
          <figure className="max-h-[300px] overflow-hidden">
            <img
              src={photo}
              alt={name}
              className="w-full object-cover rounded-t-xl"
            />
          </figure>
          <div className="card-body p-6 sm:p-8">
            <h2 className="card-title text-2xl sm:text-3xl font-bold mb-4 flex-wrap gap-2">
              {name}
              <div className="badge badge-secondary">{cuisine}</div>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">{description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              <div className="badge badge-outline bg-rose-400 py-3 border-none w-full text-center">
                Quantity: {quantity}
              </div>
              <div className="badge badge-outline bg-amber-300 py-3 border-none w-full text-center">
                Category: {category}
              </div>
              <div className="badge badge-outline bg-green-400 py-3 border-none w-full text-center">
                Price: ৳{price_bdt}
              </div>
              <div className="badge badge-outline bg-purple-300 py-3 border-none w-full text-center">
                Purchased: {purchaseCount} times
              </div>
            </div>

            <Link to={`/purchase/${_id}`} className="block w-full">
              <button className="btn btn-success w-full text-lg">
                Purchase Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
