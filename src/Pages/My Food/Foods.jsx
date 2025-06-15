import React, { use } from "react";
import { Link } from "react-router-dom"; // react-router-dom v6+
import { FaEdit } from "react-icons/fa";
import bg from "../../assets/bg.jpg";

const Foods = ({ foodCreatedByPromise, userEmail }) => {
  const food = use(foodCreatedByPromise) || [];

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>

      <div className="relative z-10 px-2 sm:px-6 max-w-6xl mx-auto py-8">
        <h1 className="font-bold text-xl sm:text-2xl text-center text-purple-200 mb-6">
          My Added Food
        </h1>
        <div className="overflow-x-auto bg-white bg-opacity-90 rounded-lg shadow-lg">
          <table className="table table-zebra w-full min-w-[600px]">
            <thead className="bg-gray-200 text-gray-800 text-xs sm:text-sm">
              <tr>
                <th className="px-2 sm:px-4 py-2">#</th>
                <th className="px-2 sm:px-4 py-2">Image</th>
                <th className="px-2 sm:px-4 py-2">Food Name</th>
                <th className="px-2 sm:px-4 py-2">Category</th>
                <th className="px-2 sm:px-4 py-2">Cuisine</th>
                <th className="px-2 sm:px-4 py-2">Price</th>
                <th className="px-2 sm:px-4 py-2">Quantity</th>
                <th className="px-2 sm:px-4 py-2">Update</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm">
              {food.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    No food items found.
                  </td>
                </tr>
              ) : (
                food.map((item, index) => (
                  <tr key={item._id}>
                    <td className="px-2 sm:px-4 py-2">{index + 1}</td>
                    <td className="px-2 sm:px-4 py-2">
                      <img
                        src={item.photo || "/default-food.png"}
                        alt={item.name || "Food image"}
                        className="w-10 h-10 sm:w-16 sm:h-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-2 sm:px-4 py-2">{item.name}</td>
                    <td className="px-2 sm:px-4 py-2">{item.category}</td>
                    <td className="px-2 sm:px-4 py-2">{item.cuisine}</td>
                    <td className="px-2 sm:px-4 py-2">{item.price_bdt} BDT</td>
                    <td className="px-2 sm:px-4 py-2">{item.quantity}</td>
                    <td className="px-2 sm:px-4 py-2">
                      {item.ownerEmail === userEmail ? (
                        <Link
                          to={`/update-food/${item._id}`}
                          className="btn btn-xs sm:btn-sm btn-primary flex items-center gap-1"
                          title="Update Food"
                        >
                          <FaEdit />
                          <span className="hidden sm:inline">Edit</span>
                        </Link>
                      ) : (
                        <span className="text-gray-400 text-xs sm:text-sm">
                          Restricted
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Foods;
