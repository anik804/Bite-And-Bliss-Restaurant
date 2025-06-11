import React from "react";
import chef from "./chef.jpg";

const Chef = () => {
  return (
    <div className="mb-10">
      <h1 className="text-center font-bold text-3xl">Meet Our Chief Chef</h1>
      <div className="card card-side bg-base-100 shadow-sm w-full max-w-4xl mx-auto my-10 flex flex-col md:flex-row">
        <figure className="w-full md:w-1/2">
          <img src={chef} alt="Chef" className="w-full object-cover" />
        </figure>
        <div className="card-body items-center w-full md:w-1/2 bg-slate-400 p-4 md:p-8">
          <h2 className="card-title pt-10 text-4xl font-bold">Lorenzo Marchetti</h2>
          <p className="text-2xl pt-10 text-center md:text-left">
            With over 20 years of culinary mastery, Chef Lorenzo Marchetti
            brings a touch of Italian soul and global flair to every dish.
            Trained in the prestigious kitchens of Florence and seasoned by
            travels across Europe and Asia, Chef Lorenzo blends tradition with
            innovation to craft unforgettable dining experiences. His passion
            for fresh ingredients and artistic presentation is the heart of our
            kitchen, ensuring every plate tells a story worth savoring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chef;
