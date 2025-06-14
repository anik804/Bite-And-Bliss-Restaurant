import React from "react";
import chef from "./chef2.jpg";
import { motion } from "framer-motion";
import "./Chef.css";

// Animation Variants
const headingVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const nameVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const paragraphVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const Chef = () => {
  return (
    <div className="mb-10 px-4">
      {/* Heading */}
      <motion.h1
        className="text-center font-bold text-2xl md:text-3xl bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 bg-[length:200%_200%] bg-clip-text text-transparent animate-textWave"
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        Meet Our Chief Chef
      </motion.h1>

      <div className="card card-side bg-base-100 shadow w-full max-w-4xl mx-auto my-6 flex flex-col md:flex-row">
        {/* Image */}
        <motion.figure
          className="w-full md:w-5/12 max-h-80"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={chef} alt="Chef" className=" rounded-l-md" />
        </motion.figure>

        {/* Text */}
        <div className="card-body w-full md:w-7/12 bg-slate-100 p-4 md:p-5 justify-center">
          <motion.h2
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 via-green-400 to-blue-600 bg-clip-text text-transparent animate-textWave"
            variants={nameVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            Lorenzo Marchetti
          </motion.h2>

          <motion.p
            className="text-sm md:text-base pt-2 text-justify leading-relaxed text-purple-800"
            variants={paragraphVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            With over 20 years of culinary mastery, Chef Lorenzo Marchetti
            brings a touch of Italian soul and global flair to every dish.
            Trained in the prestigious kitchens of Florence and seasoned by
            travels across Europe and Asia, Chef Lorenzo blends tradition with
            innovation to craft unforgettable dining experiences.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Chef;
