import React from "react";
import { Link } from "react-router-dom"; // corrected import

const FoodCard = ({ food }) => {
  const { photo, name, quantity, description, category, cuisine, _id } = food;

  return (
    <div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      {/* Image Section */}
      <figure className="relative">
        <img
          src={photo}
          alt={name}
          className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {cuisine}
        </span>
      </figure>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col">
        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
          {name}
        </h2>
        <p className="text-gray-600 text-sm flex-1 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-300">
            Quantity: {quantity}
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-300">
            Category: {category}
          </span>
        </div>

        {/* Button */}
        <Link to={`/menu/${_id}`}>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-300 shadow-md">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
