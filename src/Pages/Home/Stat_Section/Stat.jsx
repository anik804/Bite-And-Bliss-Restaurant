import React, { useEffect } from "react";
import CountUp from "react-countup";
import { motion, useAnimation } from "framer-motion";

const Stat = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundImage: [
        "linear-gradient(to right, #f97316, #db2777)", // orange to pink
        "linear-gradient(to right, #db2777, #f97316)", // pink to orange
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <div className="mx-5">
      <motion.h1
        className="font-extrabold text-4xl text-center bg-clip-text text-transparent mb-10"
        animate={controls}
      >
        Our Delicious Milestones
      </motion.h1>

      <div className="stats shadow my-10 w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 rounded-lg bg-white p-8">
        {/* Customers Served */}
        <div className="stat w-full md:w-1/3 text-center">
          <div className="stat-figure text-orange-500 mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-12 w-12 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 14a4 4 0 100-8 4 4 0 000 8z"
              />
            </svg>
          </div>
          <div className="stat-title text-lg font-semibold text-gray-700">
            Customers Served
          </div>
          <div className="stat-value text-3xl font-bold text-orange-500">
            <CountUp end={12500} duration={5} separator="," />
          </div>
          <div className="stat-desc text-gray-500">
            And still growing every day
          </div>
        </div>

        {/* Dishes Served */}
        <div className="stat w-full md:w-1/3 text-center">
          <div className="stat-figure text-pink-500 mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-12 w-12 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3-2.686-3-6h6c0 3.314-1.343 6-3 6zM5 14h14v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2z"
              />
            </svg>
          </div>
          <div className="stat-title text-lg font-semibold text-gray-700">
            Dishes Served
          </div>
          <div className="stat-value text-3xl font-bold text-pink-500">
            <CountUp end={58000} duration={5} separator="," />
          </div>
          <div className="stat-desc text-gray-500">And counting!</div>
        </div>

        {/* Satisfaction Rate */}
        <div className="stat w-full md:w-1/3 text-center">
          <div className="stat-figure text-green-500 mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-12 w-12 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 12h.01M15 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="stat-title text-lg font-semibold text-gray-700">
            Satisfaction Rate
          </div>
          <div className="stat-value text-3xl font-bold text-green-500">
            <CountUp end={97} duration={5} suffix="%" />
          </div>
          <div className="stat-desc text-gray-500">
            Based on customer feedback
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
