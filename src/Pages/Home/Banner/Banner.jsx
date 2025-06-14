import React from "react";
import { Link } from "react-router";
import { GiCampCookingPot } from "react-icons/gi";
import { motion } from "framer-motion";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="hero banner-bg">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <motion.h1
              className="mb-5 text-5xl font-bold"
              animate={{
                color: ["#ffffff", "#FFD700", "#FF6347", "#00FFFF", "#ADFF2F"],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              Delicious Moments, Delivered Fresh
            </motion.h1>

            <motion.p
              className="my-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 5, delay: 3 }}
            >
              A dining experience where flavor meets comfort. Whether you're
              craving a cozy dinner, planning a family feast, or just want
              something quick and delicious — we've got you covered. Fresh
              ingredients, bold flavors, and warm hospitality await you at every
              bite.
            </motion.p>

            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 5 }}
            >
              <Link to="/allfood">
                <button className="btn btn-primary bg-white text-black flex items-center gap-2">
                  <GiCampCookingPot />
                  See What’s Cooking..!
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
