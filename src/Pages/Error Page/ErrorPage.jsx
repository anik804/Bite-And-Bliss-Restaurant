import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const errorGifUrl =
  "https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-red-100 to-pink-200 px-5 pb-20 text-gray-800 pt-50 md:pt-20 lg:pt-24"
    >
      <motion.img
        src={errorGifUrl}
        alt="Page not found - 404"
        className="w-64 h-64 mb-8 rounded-xl shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      />
      <motion.h1
        className="text-7xl font-extrabold mb-3 text-red-600"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        404
      </motion.h1>
      <motion.h2
        className="text-3xl font-semibold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Oops! This dish is not on our menu.
      </motion.h2>
      <motion.p
        className="text-center max-w-md mb-8 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        Sorry, the page you're looking for can’t be found. Maybe it got eaten by
        our hungry chefs or it’s cooking up somewhere else.
      </motion.p>
      <motion.button
        onClick={() => navigate("/")}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Take Me Back to Safety
      </motion.button>
    </div>
  );
};

export default ErrorPage;
