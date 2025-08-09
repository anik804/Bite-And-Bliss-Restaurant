import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import aboutImage from "../../assets/about.jpg"; // replace with your own image

const AboutUs = () => {
  const navigate = useNavigate();

  const handleExploreMenu = () => {
    navigate("/allfood");
  };

  return (
    <section
      className="
        bg-white 
        pt-[12rem]   /* 64px padding top for navbar */
        md:pt-[5rem] /* slightly more padding on md */
        lg:pt-[6rem] /* even more on large */
        pb-16 
        px-5 
        md:px-12 
        lg:px-32
      "
      style={{ minHeight: "100vh" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-5 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            About Us
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Welcome to{" "}
            <span className="font-semibold text-red-500">Bite & Bliss</span>, your
            go-to destination for flavors that warm the heart and excite the palate.
            We specialize in serving fresh, delicious{" "}
            <span className="text-red-500 font-semibold">breakfast</span>, hearty{" "}
            <span className="text-red-500 font-semibold">lunch</span>, delightful{" "}
            <span className="text-red-500 font-semibold">dinners</span>, quick{" "}
            <span className="text-red-500 font-semibold">snacks</span>, and indulgent{" "}
            <span className="text-red-500 font-semibold">desserts</span>. Every dish is
            crafted with passion, using only the finest ingredients to ensure an
            unforgettable dining experience.
          </motion.p>

          <motion.button
            onClick={handleExploreMenu}
            className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Menu
          </motion.button>
        </motion.div>

        {/* Right Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="Delicious food served at Bite & Bliss"
            className="rounded-xl shadow-lg w-full max-w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
