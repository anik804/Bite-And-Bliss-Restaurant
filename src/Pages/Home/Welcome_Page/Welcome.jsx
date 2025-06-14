import React from "react";
import { motion } from "framer-motion";
import bgImage from "./bg.jpg";
import "./Welcome.css"; // for color animation

const headingVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const paragraphVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Welcome = () => {
  return (
    <div
      className="my-10 w-full px-4 py-16 md:py-24 bg-opacity-60 bg-black bg-blend-overlay"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.h1
        className="text-center max-w-3xl mx-auto text-3xl md:text-5xl font-bold font-serif text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text animate-textWave"
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        Welcome To Bite & Bliss
      </motion.h1>

      <motion.p
        className="max-w-4xl mx-auto text-center text-sm md:text-lg font-semibold pt-6 md:pt-10 text-white px-2 leading-relaxed"
        variants={paragraphVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        We welcome you to a delicious feast of exquisite dishes in Artichaut. With a wide range of world cuisines to choose from, we guarantee you a sumptuous feast experience in our restaurant! Here you will dive into a friendly and romantic atmosphere and enjoy our haute cuisine. With our great selection of dishes from all over the world you can feel yourself as a traveler and true gourmet!
      </motion.p>
    </div>
  );
};

export default Welcome;
