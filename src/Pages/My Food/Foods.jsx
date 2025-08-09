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

      <div className="relative z-10 px-4 py-6 max-w-7xl mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl text-center text-purple-200 mb-6">
          My Added Food
        </h1>
        
        {/* Mobile-friendly card layout */}
        <div className="lg:hidden space-y-4">
          {food.length === 0 ? (
            <div className="text-center py-8 text-white">
              <p className="text-lg">No food items found.</p>
            </div>
          ) : (
            food.map((item, index) => (
              <div key={item._id} className="bg-white bg-opacity-95 rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-4 mb-3">
                  <img
                    src={item.photo || "/default-food.png"}
                    alt={item.name || "Food image"}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category} • {item.cuisine}</p>
                    <p className="text-lg font-bold text-green-600">{item.price_bdt} BDT</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-semibold">Quantity:</span> {item.quantity}
                  </div>
                  <div>
                    {item.ownerEmail === userEmail ? (
                      <Link
                        to={`/update-food/${item._id}`}
                        className="btn btn-sm btn-primary w-full flex items-center justify-center"
                        title="Update Food"
                      >
                        <FaEdit className="mr-1" />
                        Edit
                      </Link>
                    ) : (
                      <span className="text-gray-400 text-sm">
                        Restricted
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Desktop table layout */}
        <div className="hidden lg:block overflow-x-auto bg-white bg-opacity-90 rounded-lg shadow-lg">
          <table className="table table-zebra w-full">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Food Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Cuisine</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Update</th>
              </tr>
            </thead>
            <tbody>
              {food.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-8">
                    No food items found.
                  </td>
                </tr>
              ) : (
                food.map((item, index) => (
                  <tr key={item._id}>
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">
                      <img
                        src={item.photo || "/default-food.png"}
                        alt={item.name || "Food image"}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-3 font-medium">{item.name}</td>
                    <td className="px-4 py-3">{item.category}</td>
                    <td className="px-4 py-3">{item.cuisine}</td>
                    <td className="px-4 py-3 font-bold text-green-600">{item.price_bdt} BDT</td>
                    <td className="px-4 py-3">{item.quantity}</td>
                    <td className="px-4 py-3">
                      {item.ownerEmail === userEmail ? (
                        <Link
                          to={`/update-food/${item._id}`}
                          className="btn btn-sm btn-primary"
                          title="Update Food"
                        >
                          <FaEdit className="mr-1" />
                          Edit
                        </Link>
                      ) : (
                        <span className="text-gray-400">
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
