import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { motion, useAnimation } from 'framer-motion';

const Stat = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundImage: [
        'linear-gradient(to right, #f43f5e, #3b82f6)', // pink to blue
        'linear-gradient(to right, #3b82f6, #f43f5e)', // blue to pink
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    });
  }, [controls]);

  return (
    <div className="mx-5">
      <motion.h1
        className="font-bold text-4xl text-center bg-clip-text text-transparent"
        animate={controls}
      >
        Our Achievements
      </motion.h1>

      <div className="stats shadow my-10 w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="stat w-full md:w-1/3">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">
            <CountUp end={25600} duration={5} separator="," suffix="K" />
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat w-full md:w-1/3">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">
            <CountUp end={26000} duration={5} separator="," suffix="M" />
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat w-full md:w-1/3">
          <div className="stat-figure text-secondary">
            <div className="avatar avatar-online">
              <div className="w-16 rounded-full">
                <img
                  src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
          <div className="stat-value">
            <CountUp end={86} duration={5} suffix="%" />
          </div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
